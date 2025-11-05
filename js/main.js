// Site State
let currentSongIndex = 0;
let isPlaying = false;
let isShuffled = false;
let repeatMode = 1; // 0: off, 1: all, 2: one
let currentVolume = 0.8;
let currentSongsList = songs; // Track current displayed songs for filtering
let isDragging = false; // Track if user is dragging progress bar
let errorCount = 0; // Track consecutive errors to prevent infinite loops
const MAX_ERRORS = 3; // Maximum consecutive errors before stopping
let youtubePlayer = null; // YouTube player instance
let isVideoOpen = false; // Track if YouTube video panel is open
let currentMode = 'audio'; // 'audio' or 'video' - tracks current playback mode

// Favorites and Playlists System
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let playlists = JSON.parse(localStorage.getItem('playlists')) || {
  'Chill Vibes': [],
  'Workout Mix': [],
  'Road Trip': []
};

// DOM Elements
const loadingScreen = document.getElementById('loading-screen');
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const mainContent = document.getElementById('main-content');
const audioPlayerBar = document.getElementById('audio-player-bar');
const sectionArea = document.getElementById('section-area');
const searchInput = document.getElementById('search-input');
const sidebarLinks = document.querySelectorAll('.sidebar-link');

// Audio Elements
const audio = document.getElementById('audio');
const playerCover = document.getElementById('player-cover');
const playerTitle = document.getElementById('player-title');
const playerArtist = document.getElementById('player-artist');
const btnPlayPause = document.getElementById('btn-playpause');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnShuffle = document.getElementById('btn-shuffle');
const btnRepeat = document.getElementById('btn-repeat');
const btnVideo = document.getElementById('btn-video');
const progressBar = document.getElementById('progress-bar');
const progressInner = document.getElementById('progress-inner');
const playerCurrent = document.getElementById('player-current');
const playerDuration = document.getElementById('player-duration');
const volumeRange = document.getElementById('volume-range');

// YouTube Elements
const youtubePanel = document.getElementById('youtube-panel');
const youtubeContainer = document.getElementById('youtube-player');
const closeYoutube = document.getElementById('close-youtube');
const videoTitle = document.getElementById('video-title');
const videoSongTitle = document.getElementById('video-song-title');
const videoSongArtist = document.getElementById('video-song-artist');

// Settings Elements
const settingsPanel = document.getElementById('settings-panel');
const contactsPanel = document.getElementById('contacts-panel');
const closeSettings = document.getElementById('close-settings');
const closeContacts = document.getElementById('close-contacts');
const saveSettings = document.getElementById('save-settings');
const logoutBtn = document.getElementById('logout-btn');

// Notification System
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  
  const container = document.getElementById('notification-container');
  if (!container) {
    const newContainer = document.createElement('div');
    newContainer.id = 'notification-container';
    document.body.appendChild(newContainer);
    newContainer.appendChild(notification);
  } else {
    container.appendChild(notification);
  }

  setTimeout(() => {
    notification.classList.add('show');
  }, 100);

  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Update Background Cover Function
function updateBackgroundCover(imageUrl) {
  const backgroundCover = document.getElementById('background-cover');
  
  if (!imageUrl || imageUrl.includes('placeholder.com')) {
    // Remove background if no valid image
    backgroundCover.classList.remove('active');
    return;
  }
  
  // Create a new image to preload and check if it loads successfully
  const img = new Image();
  img.onload = function() {
    // Set the background image and fade it in
    backgroundCover.style.backgroundImage = `url('${imageUrl}')`;
    backgroundCover.classList.add('active');
  };
  
  img.onerror = function() {
    // Hide background if image fails to load
    backgroundCover.classList.remove('active');
  };
  
  img.src = imageUrl;
}

// Show Error Message
function showError(message) {
  // Remove any existing error messages
  const existingError = document.querySelector('.error-message');
  if (existingError) {
    existingError.remove();
  }
  
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.textContent = message;
  
  // Insert error message at the top of section area
  const sectionArea = document.getElementById('section-area');
  if (sectionArea.firstChild) {
    sectionArea.insertBefore(errorDiv, sectionArea.firstChild);
  } else {
    sectionArea.appendChild(errorDiv);
  }
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    if (errorDiv.parentNode) {
      errorDiv.remove();
    }
  }, 5000);
}

// Download Song Function
function downloadSong(song, event) {
  event.stopPropagation(); // Prevent triggering the card click event
  
  try {
    // Create a temporary anchor element
    const a = document.createElement('a');
    a.href = song.audio;
    a.download = `${song.artist} - ${song.title}.mp3`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    // Show success feedback
    const downloadBtn = event.currentTarget;
    const originalHTML = downloadBtn.innerHTML;
    downloadBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      </svg>
      Downloaded
    `;
    downloadBtn.style.color = 'var(--success-color)';
    
    // Reset button after 2 seconds
    setTimeout(() => {
      downloadBtn.innerHTML = originalHTML;
      downloadBtn.style.color = '';
    }, 2000);
    
    showNotification(`Downloaded "${song.title}"`, 'success');
    
  } catch (error) {
    console.error('Error downloading song:', error);
    showError('Error downloading song. Please try again.');
  }
}

// Favorite Song Function
function toggleFavorite(song, event) {
  event.stopPropagation();
  
  const index = favorites.findIndex(fav => fav.id === song.id);
  if (index === -1) {
    favorites.push(song);
    showNotification(`Added "${song.title}" to favorites`, 'success');
  } else {
    favorites.splice(index, 1);
    showNotification(`Removed "${song.title}" from favorites`, 'info');
  }
  
  // Update local storage
  localStorage.setItem('favorites', JSON.stringify(favorites));
  
  // Update the button in the music card
  const btn = event.currentTarget;
  btn.classList.toggle('active', index === -1);
  
  // If we are in the favorites section, refresh the view
  if (document.querySelector('.sidebar-link[data-section="favorites"]').classList.contains('active')) {
    loadSection('favorites');
  }
}

// Add to Playlist Function
function addToPlaylist(playlistName, song, event) {
  event.stopPropagation();
  
  if (!playlists[playlistName]) {
    playlists[playlistName] = [];
  }
  
  // Check if song is already in the playlist
  const index = playlists[playlistName].findIndex(s => s.id === song.id);
  if (index === -1) {
    playlists[playlistName].push(song);
    showNotification(`Added "${song.title}" to ${playlistName}`, 'success');
  } else {
    showNotification(`"${song.title}" is already in ${playlistName}`, 'info');
  }
  
  localStorage.setItem('playlists', JSON.stringify(playlists));
}

// Update Repeat Button Icon
function updateRepeatButton() {
  const repeatIcon = btnRepeat.querySelector('.repeat-icon');
  
  switch(repeatMode) {
    case 0: // Off
      repeatIcon.innerHTML = '<path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>';
      btnRepeat.title = 'Repeat Off';
      break;
    case 1: // All
      repeatIcon.innerHTML = '<path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>';
      btnRepeat.title = 'Repeat All';
      break;
    case 2: // One
      repeatIcon.innerHTML = '<path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z"/>';
      btnRepeat.title = 'Repeat One';
      break;
  }
  
  // Update active state
  btnRepeat.classList.toggle('active', repeatMode > 0);
}

// Initialize YouTube Player
function initYouTubePlayer() {
  // Check if YouTube IFrame API is loaded
  if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
    console.error('YouTube IFrame API not loaded');
    return;
  }
  
  youtubePlayer = new YT.Player('youtube-player', {
    height: '100%',
    width: '100%',
    playerVars: {
      'playsinline': 1,
      'controls': 1,
      'rel': 0,
      'modestbranding': 1
    },
    events: {
      'onReady': onYouTubePlayerReady,
      'onStateChange': onYouTubePlayerStateChange,
      'onError': onYouTubePlayerError
    }
  });
}

// YouTube Player Ready
function onYouTubePlayerReady(event) {
  console.log('YouTube player is ready');
}

// YouTube Player State Change
function onYouTubePlayerStateChange(event) {
  // Only handle YouTube player state when in video mode
  if (currentMode !== 'video') return;
  
  if (event.data === YT.PlayerState.PLAYING) {
    isPlaying = true;
    btnPlayPause.textContent = '⏸';
    updateMediaSessionPlaybackState();
  } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
    isPlaying = false;
    btnPlayPause.textContent = '▶';
    updateMediaSessionPlaybackState();
    
    // Handle video ended
    if (event.data === YT.PlayerState.ENDED) {
      if (repeatMode === 2) {
        // Repeat one
        youtubePlayer.seekTo(0);
        youtubePlayer.playVideo();
      } else if (repeatMode === 1 || isShuffled) {
        // Repeat all or shuffle - play next audio song
        currentMode = 'audio'; // Switch back to audio mode
        playNext();
      } else {
        // No repeat - stop at end
        isPlaying = false;
        btnPlayPause.textContent = '▶';
        updateMediaSessionPlaybackState();
      }
    }
  }
}

// YouTube Player Error
function onYouTubePlayerError(event) {
  console.error('YouTube player error:', event.data);
  showError('Error loading music video');
}

// Load YouTube Video
function loadYouTubeVideo(song) {
  if (!youtubePlayer || !song.youtubeId) {
    showError('No video available for this song');
    return;
  }
  
  try {
    // Switch to video mode and stop audio
    currentMode = 'video';
    if (isPlaying && currentMode === 'audio') {
      audio.pause();
      isPlaying = false;
      btnPlayPause.textContent = '▶';
    }
    
    youtubePlayer.loadVideoById(song.youtubeId);
    videoSongTitle.textContent = song.title;
    videoSongArtist.textContent = song.artist;
    
    // Show video panel
    youtubePanel.style.display = 'flex';
    isVideoOpen = true;
    
    // Update video button state
    btnVideo.classList.add('active');
    
  } catch (error) {
    console.error('Error loading YouTube video:', error);
    showError('Error loading music video');
  }
}

// Close YouTube Video
function closeYouTubeVideo() {
  if (youtubePlayer) {
    youtubePlayer.stopVideo();
  }
  youtubePanel.style.display = 'none';
  isVideoOpen = false;
  isPlaying = false;
  btnPlayPause.textContent = '▶';
  
  // Switch back to audio mode if there's a current song
  if (audio.src) {
    currentMode = 'audio';
  }
  
  // Update video button state
  btnVideo.classList.remove('active');
}

// Debounce Function for Search
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
  
  // Hide loading screen after 2 seconds
  setTimeout(() => {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
  }, 2000);

  // Load home section by default
  loadSection('home');
  
  // Setup event listeners
  setupEventListeners();
  
  // Initialize audio player
  initAudioPlayer();
  
  // Initialize Media Session API
  initMediaSession();
  
  // Initialize background with no image
  updateBackgroundCover(null);
  
  // Initialize repeat button
  updateRepeatButton();
  
  // Initialize YouTube player when API is ready
  if (window.YT) {
    initYouTubePlayer();
  } else {
    // Wait for YouTube API to load
    window.onYouTubeIframeAPIReady = function() {
      initYouTubePlayer();
    };
  }
  
  // Add mobile swipe gestures
  initSwipeGestures();
});

// Initialize Swipe Gestures for Mobile
function initSwipeGestures() {
  let startX = 0;
  let startY = 0;
  let endX = 0;
  let endY = 0;
  
  document.addEventListener('touchstart', function(event) {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
  });
  
  document.addEventListener('touchend', function(event) {
    endX = event.changedTouches[0].clientX;
    endY = event.changedTouches[0].clientY;
    
    handleSwipe();
  });
  
  function handleSwipe() {
    const diffX = endX - startX;
    const diffY = endY - startY;
    
    // Only consider horizontal swipes with minimal vertical movement
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX > 0) {
        // Swipe right - show sidebar on mobile
        if (window.innerWidth <= 1024) {
          sidebar.classList.add('active');
          showSwipeIndicator('Menu opened');
        }
      } else {
        // Swipe left - hide sidebar on mobile
        if (window.innerWidth <= 1024 && sidebar.classList.contains('active')) {
          sidebar.classList.remove('active');
          showSwipeIndicator('Menu closed');
        }
      }
    }
  }
  
  function showSwipeIndicator(message) {
    const indicator = document.createElement('div');
    indicator.className = 'swipe-indicator';
    indicator.textContent = message;
    document.body.appendChild(indicator);
    
    setTimeout(() => {
      indicator.classList.add('show');
    }, 10);
    
    setTimeout(() => {
      indicator.classList.remove('show');
      setTimeout(() => {
        if (indicator.parentNode) {
          indicator.parentNode.removeChild(indicator);
        }
      }, 300);
    }, 1500);
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Sidebar navigation
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const section = this.getAttribute('data-section');
      
      // Update active state
      sidebarLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      
      // Load section
      loadSection(section);
      
      // Close sidebar on mobile after selection
      if (window.innerWidth <= 1024) {
        sidebar.classList.remove('active');
      }
    });
  });
  
  // Sidebar toggle for mobile
  sidebarToggle.addEventListener('click', function() {
    sidebar.classList.toggle('active');
  });
  
  // Search functionality with debounce
  const debouncedFilter = debounce(function() {
    filterSongs(this.value);
  }, 300);
  
  searchInput.addEventListener('input', debouncedFilter);
  
  // YouTube video
  btnVideo.addEventListener('click', function() {
    const currentSong = currentSongsList[currentSongIndex];
    if (currentSong && currentSong.youtubeId) {
      loadYouTubeVideo(currentSong);
    } else {
      showError('No video available for this song');
    }
  });
  
  closeYoutube.addEventListener('click', closeYouTubeVideo);
  
  youtubePanel.addEventListener('click', function(e) {
    if (e.target === youtubePanel) {
      closeYouTubeVideo();
    }
  });
  
  // Settings panels
  document.querySelector('.sidebar-link[data-section="settings"]').addEventListener('click', function(e) {
    e.preventDefault();
    settingsPanel.style.display = 'flex';
  });
  
  document.querySelector('.sidebar-link[data-section="contacts"]').addEventListener('click', function(e) {
    e.preventDefault();
    contactsPanel.style.display = 'flex';
  });
  
  closeSettings.addEventListener('click', function() {
    settingsPanel.style.display = 'none';
  });
  
  closeContacts.addEventListener('click', function() {
    contactsPanel.style.display = 'none';
  });
  
  // Close panels when clicking outside
  settingsPanel.addEventListener('click', function(e) {
    if (e.target === settingsPanel) {
      settingsPanel.style.display = 'none';
    }
  });
  
  contactsPanel.addEventListener('click', function(e) {
    if (e.target === contactsPanel) {
      contactsPanel.style.display = 'none';
    }
  });
  
  // Settings actions
  saveSettings.addEventListener('click', function() {
    showNotification('Settings saved successfully!', 'success');
    settingsPanel.style.display = 'none';
  });
  
  logoutBtn.addEventListener('click', function() {
    if (confirm('Are you sure you want to logout?')) {
      showNotification('Logged out successfully!', 'info');
      settingsPanel.style.display = 'none';
    }
  });
  
  // Handle back button on mobile to close panels
  window.addEventListener('popstate', function() {
    if (settingsPanel.style.display === 'flex') {
      settingsPanel.style.display = 'none';
    }
    if (contactsPanel.style.display === 'flex') {
      contactsPanel.style.display = 'none';
    }
    if (youtubePanel.style.display === 'flex') {
      closeYouTubeVideo();
    }
  });
}

// Initialize Audio Player
function initAudioPlayer() {
  // Player controls
  btnPlayPause.addEventListener('click', togglePlayPause);
  btnPrev.addEventListener('click', playPrevious);
  btnNext.addEventListener('click', playNext);
  btnShuffle.addEventListener('click', toggleShuffle);
  btnRepeat.addEventListener('click', toggleRepeat);
  
  // Progress bar - Click and Drag functionality
  progressBar.addEventListener('click', seekAudio);
  
  // Mouse events for dragging
  progressBar.addEventListener('mousedown', startDrag);
  document.addEventListener('mousemove', whileDrag);
  document.addEventListener('mouseup', endDrag);
  
  // Touch events for mobile dragging
  progressBar.addEventListener('touchstart', startDrag);
  document.addEventListener('touchmove', whileDrag);
  document.addEventListener('touchend', endDrag);
  
  // Volume control
  volumeRange.addEventListener('input', function() {
    audio.volume = this.value;
    currentVolume = this.value;
  });
  
  // Audio events
  audio.addEventListener('loadedmetadata', function() {
    playerDuration.textContent = formatTime(audio.duration);
    updateMediaSessionPositionState();
  });
  
  audio.addEventListener('timeupdate', function() {
    if (audio.duration && !isDragging && currentMode === 'audio') {
      const progressPercent = (audio.currentTime / audio.duration) * 100;
      progressInner.style.width = progressPercent + '%';
      playerCurrent.textContent = formatTime(audio.currentTime);
      updateMediaSessionPositionState();
    }
  });
  
  audio.addEventListener('ended', function() {
    // Only handle audio ended events when in audio mode
    if (currentMode !== 'audio') return;
    
    errorCount = 0; // Reset error count on successful play completion
    
    if (repeatMode === 2) {
      // Repeat one
      audio.currentTime = 0;
      audio.play().catch(e => {
        console.error('Error replaying current song:', e);
        showError('Error replaying current song');
      });
    } else if (repeatMode === 1 || isShuffled) {
      // Repeat all or shuffle
      playNext();
    } else {
      // No repeat - stop at end
      isPlaying = false;
      btnPlayPause.textContent = '▶';
      updateMediaSessionPlaybackState();
    }
  });

  audio.addEventListener('play', function() {
    if (currentMode === 'audio') {
      updateMediaSessionPlaybackState();
    }
  });

  audio.addEventListener('pause', function() {
    if (currentMode === 'audio') {
      updateMediaSessionPlaybackState();
    }
  });

  // FIXED: Handle audio errors properly to prevent rapid song changes
  audio.addEventListener('error', function(e) {
    // Only handle audio errors when in audio mode
    if (currentMode !== 'audio') return;
    
    console.error('Audio error:', e);
    errorCount++;
    
    if (errorCount >= MAX_ERRORS) {
      // Stop trying after too many errors
      showError('Unable to play audio. Please try another song.');
      isPlaying = false;
      btnPlayPause.textContent = '▶';
      return;
    }
    
    // Show error message
    const currentSong = currentSongsList[currentSongIndex];
    showError(`Error playing "${currentSong.title}". Trying next song...`);
    
    // Try to play next song after a delay, but not immediately
    setTimeout(() => {
      if (errorCount < MAX_ERRORS) {
        playNext();
      }
    }, 2000);
  });
}

// Progress Bar Drag Functions
function startDrag(e) {
  if (!audio.duration || currentMode !== 'audio') return;
  
  isDragging = true;
  progressBar.classList.add('dragging');
  
  // Seek to the position immediately on mousedown/touchstart
  seekAudio(e);
}

function whileDrag(e) {
  if (!isDragging || currentMode !== 'audio') return;
  
  // Prevent default to avoid text selection during drag
  e.preventDefault();
  
  // Update the seek position while dragging
  seekAudio(e);
}

function endDrag() {
  if (!isDragging) return;
  
  isDragging = false;
  progressBar.classList.remove('dragging');
}

// Enhanced Seek Audio function with drag support
function seekAudio(e) {
  if (!audio.duration || currentMode !== 'audio') return;
  
  const rect = progressBar.getBoundingClientRect();
  let clientX;
  
  // Get clientX based on event type (mouse or touch)
  if (e.type.includes('touch')) {
    clientX = e.touches[0].clientX;
  } else {
    clientX = e.clientX;
  }
  
  const percent = (clientX - rect.left) / rect.width;
  const newTime = Math.max(0, Math.min(percent * audio.duration, audio.duration));
  
  // Update audio current time
  audio.currentTime = newTime;
  
  // Update progress bar and time display immediately
  const progressPercent = (newTime / audio.duration) * 100;
  progressInner.style.width = progressPercent + '%';
  playerCurrent.textContent = formatTime(newTime);
  
  // Update Media Session position
  updateMediaSessionPositionState();
}

// Initialize Media Session API with enhanced mobile support
function initMediaSession() {
  // Check if Media Session API is supported
  if ('mediaSession' in navigator) {
    console.log('Media Session API supported');
    
    // Set media session action handlers with better error handling
    try {
      navigator.mediaSession.setActionHandler('play', function() {
        console.log('Media Session: Play action');
        togglePlayPause();
      });

      navigator.mediaSession.setActionHandler('pause', function() {
        console.log('Media Session: Pause action');
        togglePlayPause();
      });

      navigator.mediaSession.setActionHandler('previoustrack', function() {
        console.log('Media Session: Previous track action');
        playPrevious();
      });

      navigator.mediaSession.setActionHandler('nexttrack', function() {
        console.log('Media Session: Next track action');
        playNext();
      });

      // Optional handlers - only set if supported
      try {
        navigator.mediaSession.setActionHandler('seekbackward', function(details) {
          const skipTime = details.seekOffset || 10;
          audio.currentTime = Math.max(audio.currentTime - skipTime, 0);
        });

        navigator.mediaSession.setActionHandler('seekforward', function(details) {
          const skipTime = details.seekOffset || 10;
          audio.currentTime = Math.min(audio.currentTime + skipTime, audio.duration);
        });

        navigator.mediaSession.setActionHandler('seekto', function(details) {
          if (details.fastSeek && 'fastSeek' in audio) {
            audio.fastSeek(details.seekTime);
            return;
          }
          audio.currentTime = details.seekTime;
        });
      } catch (error) {
        console.log('Optional Media Session actions not supported:', error);
      }
    } catch (error) {
      console.error('Error setting Media Session actions:', error);
    }
  } else {
    console.log('Media Session API not supported');
  }
}

// Update Media Session Playback State
function updateMediaSessionPlaybackState() {
  if ('mediaSession' in navigator) {
    try {
      navigator.mediaSession.playbackState = isPlaying ? 'playing' : 'paused';
      console.log('Media Session playback state updated:', navigator.mediaSession.playbackState);
    } catch (error) {
      console.error('Error updating Media Session playback state:', error);
    }
  }
}

// Update Media Session Position State
function updateMediaSessionPositionState() {
  if ('mediaSession' in navigator && 'setPositionState' in navigator.mediaSession) {
    try {
      navigator.mediaSession.setPositionState({
        duration: audio.duration,
        playbackRate: audio.playbackRate,
        position: audio.currentTime
      });
    } catch (error) {
      console.error('Error updating Media Session position state:', error);
    }
  }
}

// Enhanced Media Session Metadata with better image handling
function updateMediaSessionMetadata(song) {
  if ('mediaSession' in navigator) {
    try {
      // Create artwork array with multiple sizes for better compatibility
      const artwork = [];
      const sizes = ['96x96', '128x128', '192x192', '256x256', '384x384', '512x512'];
      
      // Use the song's cover image for all sizes
      // The browser will automatically choose the best size
      sizes.forEach(size => {
        artwork.push({
          src: song.cover,
          sizes: size,
          type: getImageMimeType(song.cover) // Dynamically detect image type
        });
      });

      // Update media session metadata
      navigator.mediaSession.metadata = new MediaMetadata({
        title: song.title || 'Unknown Title',
        artist: song.artist || 'Unknown Artist',
        album: song.album || 'Unknown Album',
        artwork: artwork
      });
      
      console.log('Media Session metadata updated for:', song.title);
    } catch (error) {
      console.error('Error updating Media Session metadata:', error);
    }
  }
}

// Helper function to detect image MIME type from URL
function getImageMimeType(imageUrl) {
  if (!imageUrl) return 'image/jpeg';
  
  const extension = imageUrl.split('.').pop().toLowerCase();
  const mimeTypes = {
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'png': 'image/png',
    'gif': 'image/gif',
    'webp': 'image/webp',
    'svg': 'image/svg+xml',
    'bmp': 'image/bmp'
  };
  
  return mimeTypes[extension] || 'image/jpeg';
}

// Enhanced image loading with fallback
function loadImageWithFallback(imgElement, src, fallbackSrc = 'https://via.placeholder.com/300/1a1a1a/ffffff?text=No+Image') {
  const img = new Image();
  
  img.onload = function() {
    imgElement.src = src;
    imgElement.style.display = 'block';
  };
  
  img.onerror = function() {
    console.warn('Failed to load image:', src, 'Using fallback');
    imgElement.src = fallbackSrc;
    imgElement.style.display = 'block';
  };
  
  img.src = src;
}

// Load Section Content
function loadSection(section) {
  let content = '';
  
  switch(section) {
    case 'home':
      content = `
        <div class="section-header">
          <h1 class="section-title">Welcome to Musiv</h1>
          <p class="section-subtitle">Your premium music streaming experience</p>
        </div>
        <div class="music-cards" id="music-cards-container">
          ${renderMusicCards(songs)}
        </div>
      `;
      currentSongsList = songs;
      break;
      
    case 'search':
      content = `
        <div class="section-header">
          <h1 class="section-title">Search</h1>
          <p class="section-subtitle">Find your favorite songs and artists</p>
        </div>
        <div class="music-cards" id="music-cards-container">
          ${renderMusicCards(songs)}
        </div>
      `;
      currentSongsList = songs;
      break;
      
    case 'trending':
      content = `
        <div class="section-header">
          <h1 class="section-title">Trending Now</h1>
          <p class="section-subtitle">The hottest tracks right now</p>
        </div>
        <div class="music-cards" id="music-cards-container">
          ${renderMusicCards(songs.slice().sort(() => 0.5 - Math.random()).slice(0, 6))}
        </div>
      `;
      currentSongsList = songs.slice().sort(() => 0.5 - Math.random()).slice(0, 6);
      break;
      
    case 'playlists':
      content = `
        <div class="section-header">
          <h1 class="section-title">Your Playlists</h1>
          <p class="section-subtitle">Collections of your favorite music</p>
        </div>
        <div class="music-cards" id="music-cards-container">
          <div class="music-card playlist-card" onclick="loadPlaylist('Chill Vibes')">
            <div class="music-card-cover" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center;">
              <span style="font-size: 2rem;">❤</span>
            </div>
            <div class="music-card-info">
              <div class="music-card-title">Chill Vibes</div>
              <div class="music-card-artist">${playlists['Chill Vibes'].length} songs</div>
            </div>
          </div>
          <div class="music-card playlist-card" onclick="loadPlaylist('Workout Mix')">
            <div class="music-card-cover" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); display: flex; align-items: center; justify-content: center;">
              <span style="font-size: 2rem;">⚡</span>
            </div>
            <div class="music-card-info">
              <div class="music-card-title">Workout Mix</div>
              <div class="music-card-artist">${playlists['Workout Mix'].length} songs</div>
            </div>
          </div>
          <div class="music-card playlist-card" onclick="loadPlaylist('Road Trip')">
            <div class="music-card-cover" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); display: flex; align-items: center; justify-content: center;">
              <span style="font-size: 2rem;">🚗</span>
            </div>
            <div class="music-card-info">
              <div class="music-card-title">Road Trip</div>
              <div class="music-card-artist">${playlists['Road Trip'].length} songs</div>
            </div>
          </div>
        </div>
      `;
      break;
      
    case 'genres':
      const genres = [...new Set(songs.map(song => song.genre))];
      content = `
        <div class="section-header">
          <h1 class="section-title">Genres</h1>
          <p class="section-subtitle">Explore music by genre</p>
        </div>
        <div class="mb-3">
          ${genres.map(genre => `
            <span class="genre-chip" onclick="filterByGenre('${genre}')">${genre}</span>
          `).join('')}
        </div>
        <div class="music-cards" id="music-cards-container">
          ${renderMusicCards(songs)}
        </div>
      `;
      currentSongsList = songs;
      break;
      
    case 'library':
      content = `
        <div class="section-header">
          <h1 class="section-title">Your Library</h1>
          <p class="section-subtitle">Your saved music and playlists</p>
        </div>
        <div class="music-cards" id="music-cards-container">
          ${renderMusicCards(songs.slice(0, 4))}
        </div>
      `;
      currentSongsList = songs.slice(0, 4);
      break;

    case 'favorites':
      content = `
        <div class="section-header">
          <h1 class="section-title">Your Favorites</h1>
          <p class="section-subtitle">Your loved tracks</p>
        </div>
        <div class="music-cards" id="music-cards-container">
          ${favorites.length > 0 ? renderMusicCards(favorites) : '<p class="text-center">No favorite songs yet. Start adding some!</p>'}
        </div>
      `;
      currentSongsList = favorites;
      break;
      
    default:
      content = `
        <div class="section-header">
          <h1 class="section-title">Welcome to Musiv</h1>
          <p class="section-subtitle">Your premium music streaming experience</p>
        </div>
        <div class="music-cards" id="music-cards-container">
          ${renderMusicCards(songs)}
        </div>
      `;
      currentSongsList = songs;
  }
  
  sectionArea.innerHTML = content;
  
  // Reattach event listeners to music cards
  setTimeout(() => {
    const musicCards = document.querySelectorAll('.music-card');
    musicCards.forEach((card, index) => {
      card.addEventListener('click', function() {
        playSong(index, currentSongsList);
      });
    });
    
    // Lazy load images
    lazyLoadImages();
  }, 0);
}

// Enhanced Render Music Cards with favorite and playlist buttons
function renderMusicCards(songsArray) {
  return songsArray.map(song => `
    <div class="music-card" data-id="${song.id}">
      <div class="music-card-cover">
        <img src="" data-src="${song.cover}" alt="${song.album}" class="lazy-image" onerror="this.src='https://via.placeholder.com/300/1a1a1a/ffffff?text=No+Image'">
        ${song.youtubeId ? '<div class="video-indicator" title="Video available">▶</div>' : ''}
      </div>
      <div class="music-card-info">
        <div class="music-card-title">${song.title}</div>
        <div class="music-card-artist">${song.artist}</div>
        <div class="music-card-album">${song.album}</div>
      </div>
      <div class="music-card-actions">
        <button class="music-card-btn download-btn" onclick="downloadSong(${JSON.stringify(song).replace(/"/g, '&quot;')}, event)">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
          </svg>
          Download
        </button>
        <button class="music-card-btn favorite-btn ${favorites.some(fav => fav.id === song.id) ? 'active' : ''}" onclick="toggleFavorite(${JSON.stringify(song).replace(/"/g, '&quot;')}, event)">
          ❤
        </button>
        <button class="music-card-btn" onclick="showPlaylistDropdown(this, ${JSON.stringify(song).replace(/"/g, '&quot;')})">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </button>
      </div>
    </div>
  `).join('');
}

// Show Playlist Dropdown
function showPlaylistDropdown(button, song) {
  // Remove any existing dropdowns
  const existingDropdown = document.querySelector('.playlist-dropdown');
  if (existingDropdown) {
    existingDropdown.remove();
  }

  const dropdown = document.createElement('div');
  dropdown.className = 'playlist-dropdown';
  dropdown.innerHTML = `
    <div class="playlist-option" onclick="addToPlaylist('Chill Vibes', ${JSON.stringify(song).replace(/"/g, '&quot;')}, event)">Chill Vibes</div>
    <div class="playlist-option" onclick="addToPlaylist('Workout Mix', ${JSON.stringify(song).replace(/"/g, '&quot;')}, event)">Workout Mix</div>
    <div class="playlist-option" onclick="addToPlaylist('Road Trip', ${JSON.stringify(song).replace(/"/g, '&quot;')}, event)">Road Trip</div>
  `;

  button.parentNode.appendChild(dropdown);

  // Close dropdown when clicking outside
  const closeDropdown = function(e) {
    if (!dropdown.contains(e.target)) {
      dropdown.remove();
      document.removeEventListener('click', closeDropdown);
    }
  };

  setTimeout(() => {
    document.addEventListener('click', closeDropdown);
  }, 0);
}

// Load Playlist
function loadPlaylist(playlistName) {
  const playlistSongs = playlists[playlistName] || [];
  currentSongsList = playlistSongs;
  
  const container = document.getElementById('music-cards-container');
  if (container) {
    container.innerHTML = renderMusicCards(playlistSongs);
    
    // Lazy load images for filtered results
    setTimeout(lazyLoadImages, 0);
    
    // Reattach event listeners
    setTimeout(() => {
      const musicCards = document.querySelectorAll('.music-card');
      musicCards.forEach((card, index) => {
        card.addEventListener('click', function() {
          playSong(index, playlistSongs);
        });
      });
    }, 0);
  }
}

// Lazy load images after rendering
function lazyLoadImages() {
  const lazyImages = document.querySelectorAll('.lazy-image');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        loadImageWithFallback(img, img.getAttribute('data-src'));
        imageObserver.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => imageObserver.observe(img));
}

// Filter Songs
function filterSongs(query) {
  const filteredSongs = songs.filter(song => 
    song.title.toLowerCase().includes(query.toLowerCase()) ||
    song.artist.toLowerCase().includes(query.toLowerCase()) ||
    song.album.toLowerCase().includes(query.toLowerCase()) ||
    song.genre.toLowerCase().includes(query.toLowerCase())
  );
  
  currentSongsList = filteredSongs;
  
  const container = document.getElementById('music-cards-container');
  if (container) {
    container.innerHTML = renderMusicCards(filteredSongs);
    
    // Lazy load images for filtered results
    setTimeout(lazyLoadImages, 0);
    
    // Reattach event listeners
    setTimeout(() => {
      const musicCards = document.querySelectorAll('.music-card');
      musicCards.forEach((card, index) => {
        card.addEventListener('click', function() {
          playSong(index, filteredSongs);
        });
      });
    }, 0);
  }
}

// Filter by Genre
function filterByGenre(genre) {
  const filteredSongs = songs.filter(song => song.genre === genre);
  currentSongsList = filteredSongs;
  
  const container = document.getElementById('music-cards-container');
  if (container) {
    container.innerHTML = renderMusicCards(filteredSongs);
    
    // Lazy load images for filtered results
    setTimeout(lazyLoadImages, 0);
    
    // Reattach event listeners
    setTimeout(() => {
      const musicCards = document.querySelectorAll('.music-card');
      musicCards.forEach((card, index) => {
        card.addEventListener('click', function() {
          playSong(index, filteredSongs);
        });
      });
    }, 0);
  }
}

// Enhanced Play Song function
function playSong(index, songsArray = songs) {
  try {
    currentSongIndex = index;
    const song = songsArray[index];
    
    if (!song) {
      console.error('No song found at index:', index);
      showError('No song found to play');
      return;
    }
    
    console.log('Playing song:', song.title);
    
    // Switch to audio mode and stop video if playing
    currentMode = 'audio';
    if (isVideoOpen && youtubePlayer) {
      youtubePlayer.stopVideo();
      isVideoOpen = false;
      youtubePanel.style.display = 'none';
      btnVideo.classList.remove('active');
    }
    
    // Reset error count when starting a new song
    errorCount = 0;
    
    // Update player UI with enhanced image loading
    loadImageWithFallback(playerCover, song.cover);
    playerTitle.textContent = song.title;
    playerArtist.textContent = song.artist;
    
    // Update blurred background
    updateBackgroundCover(song.cover);
    
    // Set audio source with error handling
    audio.src = song.audio;
    audio.load();
    
    // Update Media Session Metadata
    updateMediaSessionMetadata(song);
    
    // Update video button state
    btnVideo.classList.toggle('active', !!song.youtubeId);
    
    // Play the song with better error handling
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise.then(() => {
        isPlaying = true;
        btnPlayPause.textContent = '⏸';
        updateMediaSessionPlaybackState();
        console.log('Audio playback started successfully');
      }).catch(error => {
        console.error('Error playing audio:', error);
        showError('Error playing audio. Please try again.');
        isPlaying = false;
        btnPlayPause.textContent = '▶';
      });
    }
    
    // Highlight playing card
    const musicCards = document.querySelectorAll('.music-card');
    musicCards.forEach(card => card.classList.remove('playing'));
    
    if (musicCards[index]) {
      musicCards[index].classList.add('playing');
    }
    
  } catch (error) {
    console.error('Error in playSong:', error);
    showError('Error playing song. Please try another one.');
  }
}

// Toggle Play/Pause
function togglePlayPause() {
  if (currentMode === 'audio') {
    // Handle audio play/pause
    if (!audio.src) {
      playSong(0);
      return;
    }
    
    if (isPlaying) {
      audio.pause();
      btnPlayPause.textContent = '▶';
    } else {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          btnPlayPause.textContent = '⏸';
        }).catch(error => {
          console.error('Error playing audio:', error);
          showError('Error playing audio');
        });
      }
    }
    
    isPlaying = !isPlaying;
    updateMediaSessionPlaybackState();
    
  } else if (currentMode === 'video') {
    // Handle video play/pause
    if (isVideoOpen && youtubePlayer) {
      if (isPlaying) {
        youtubePlayer.pauseVideo();
        btnPlayPause.textContent = '▶';
      } else {
        youtubePlayer.playVideo();
        btnPlayPause.textContent = '⏸';
      }
      isPlaying = !isPlaying;
    }
  }
}

// Play Previous Song
function playPrevious() {
  if (isShuffled) {
    currentSongIndex = Math.floor(Math.random() * currentSongsList.length);
  } else {
    currentSongIndex = (currentSongIndex - 1 + currentSongsList.length) % currentSongsList.length;
  }
  
  // Always switch to audio mode when changing songs
  currentMode = 'audio';
  if (isVideoOpen && youtubePlayer) {
    youtubePlayer.stopVideo();
    isVideoOpen = false;
    youtubePanel.style.display = 'none';
    btnVideo.classList.remove('active');
  }
  
  playSong(currentSongIndex, currentSongsList);
}

// Play Next Song
function playNext() {
  if (isShuffled) {
    currentSongIndex = Math.floor(Math.random() * currentSongsList.length);
  } else {
    currentSongIndex = (currentSongIndex + 1) % currentSongsList.length;
  }
  
  // Always switch to audio mode when changing songs
  currentMode = 'audio';
  if (isVideoOpen && youtubePlayer) {
    youtubePlayer.stopVideo();
    isVideoOpen = false;
    youtubePanel.style.display = 'none';
    btnVideo.classList.remove('active');
  }
  
  playSong(currentSongIndex, currentSongsList);
}

// Toggle Shuffle
function toggleShuffle() {
  isShuffled = !isShuffled;
  btnShuffle.classList.toggle('active', isShuffled);
  showNotification(isShuffled ? 'Shuffle enabled' : 'Shuffle disabled', 'info');
}

// Toggle Repeat
function toggleRepeat() {
  repeatMode = (repeatMode + 1) % 3;
  updateRepeatButton();
  
  const repeatMessages = ['Repeat off', 'Repeat all', 'Repeat one'];
  showNotification(repeatMessages[repeatMode], 'info');
}

// Format Time (seconds to MM:SS)
function formatTime(seconds) {
  if (isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return mins + ':' + (secs < 10 ? '0' : '') + secs;
}

// Initialize lazy loading after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(lazyLoadImages, 1000);
});