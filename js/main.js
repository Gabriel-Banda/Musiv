    const songs = [
      {
        id: 1,
        title: "Circadian Rhythm",
        artist: "Drake",
        album: "100 Gigs",
        genre: "Pop",
        cover: "https://tse4.mm.bing.net/th/id/OIP.zkoY_Iq9AIVWLXWInR9_8QHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Circadian Rhythm.mp3",
        duration: 200
      },
      {
        id: 2,
        title: "3 AM",
        artist: "Leo Shimmey ft Don Toliver",
        album: "Rockstar Junkie",
        genre: "Hip Pop",
        cover: "https://images.genius.com/4f8f15f3f9a174ed5cd5fdf7a819aa8f.1000x1000x1.png",
        audio: "Songs/3am.mp3",
        youtubeId: "2ub5lOODSD4",
        duration: 200
      },
      {
        id: 3,
        title: "Him",
        artist: "DaBaby ft Big Boogie",
        album: "Single",
        genre: "Hip Hop",
        cover: "https://tse3.mm.bing.net/th/id/OIP.7I7mA2_vvabcyDdI0fsMQQHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/DaBaby-HIM-Ft-Big-Boogie-(HipHopKit.com).mp3",
        duration: 200
      },
      {
        id: 4,
        title: "Ima Hoe Too",
        artist: "DaBaby ft Yung Miami",
        album: "Single",
        genre: "Hip Hop",
        cover: "https://tse1.explicit.bing.net/th/id/OIP.p6BNsu3Oa8udFKvHwAjIUwHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/DaBaby-IMA-HOE-TOO-Ft-Yung-Miami-(HipHopKit.com).mp3",
        youtubeId: "uc0fD6hEVxw",
        duration: 200
      },
      {
        id: 5,
        title: "In A Minute",
        artist: "DaBaby",
        album: "HOW TF IS THIS A MIXTAPE?",
        genre: "Hip Hop",
        cover: "https://images.genius.com/9fb553bf8e3ee97bdbd79155d5cc5f3b.1000x1000x1.png",
        audio: "Songs/DaBaby-In-a-Minute-Intro-(HipHopKit.com).mp3",
        youtubeId: "s6IqWD-DWKU",
        duration: 200
      },
      {
        id: 6,
        title: "PHAT",
        artist: "DaBaby",
        album: "HOW TF IS THIS A MIXTAPE?",
        genre: "Hip Hop",
        cover: "https://images.genius.com/9fb553bf8e3ee97bdbd79155d5cc5f3b.1000x1000x1.png",
        audio: "Songs/DaBaby-PHAT-(HipHopKit.com).mp3",
        youtubeId: "",
        duration: 200
      },
      {
        id: 7,
        title: "God Did",
        artist: "DJ Khaled ft Rick Ross, Lil Wayne, Jay Z, John Legend & Fridayy",
        album: "God Did",
        genre: "Hip hop · urban gospel · R&B",
        cover: "https://static.stereogum.com/uploads/2022/08/300836415_119694174028719_3040686577807116223_n-1661282175-1000x1000.jpg",
        audio: "Songs/DJ-Khaled-GOD-DID-New-Song-ft-Rick-Ross-Lil-Wayne-Jay-Z-John-Legend-Fridayy-(HipHopKit.com).mp3",
        duration: 200
      },
      {
        id: 8,
        title: "Juice WRLD Did",
        artist: "DJ Khaled ft Juice WRLD",
        album: "God Did",
        genre: "Hip Hop",
        cover: "https://static.stereogum.com/uploads/2022/08/300836415_119694174028719_3040686577807116223_n-1661282175-1000x1000.jpg",
        audio: "Songs/DJ-Khaled-Juice-WRLD-DID-ft-Juice-WRLD-(HipHopKit.com).mp3",
        duration: 200
      },
      {
        id: 9,
        title: "Let's Pray",
        artist: "DJ Khaled ft Don Toliver & Travis Scott",
        album: "Single",
        genre: "Hip Hop",
        cover: "https://static.stereogum.com/uploads/2022/08/300836415_119694174028719_3040686577807116223_n-1661282175-1000x1000.jpg",
        audio: "Songs/DJ-Khaled-LETS-PRAY-ft-Don-Toliver-Travis-Scott-(HipHopKit.com).mp3",
        duration: 200
      },
      {
        id: 10,
        title: "Brother Stone",
        artist: "Don Toliver ft Kodak Black",
        album: "Hardstone Psycho",
        genre: "Hip Hop",
        cover: "https://tse1.mm.bing.net/th/id/OIP.Duw-ulcdw7ewlXDQ7B9rmAHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Don-Toliver-BROTHER-STONE-Ft-Kodak-Black.mp3",
        duration: 200
      },
      {
        id: 11,
        title: "Life Is Good (Remix)",
        artist: "Future ft Drake, DaBaby & Lil Baby",
        album: "Single",
        genre: "Hip Hop",
        cover: "https://tse1.mm.bing.net/th/id/OIP.Md1cS2iSV5q9niQYGjpESwHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Future-Ft-Drake-DaBaby-Lil-Baby-Life-Is-Good-Remix-(HipHopKit.com).mp3",
        duration: 200
      },
      {
        id: 1,
        title: "Circadian Rhythm",
        artist: "Drake",
        album: "100 Gigs",
        genre: "Pop",
        cover: "https://tse4.mm.bing.net/th/id/OIP.zkoY_Iq9AIVWLXWInR9_8QHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Circadian Rhythm.mp3",
        duration: 200
      },
      {
        title: "Miss My Dog",
        artist: "Young Thug",
        album: "Single",
        genre: "Hip Hop / Rap",
        cover: "https://images.genius.com/07406019e5dbcd843638d340669dd539.1000x1000x1.jpg",
        audio: "Songs/Young Thug - Miss My Dogs.mp3",
      },
      {
        title: "Imma Shoot",
        artist: "Kodak Black",
        album: "Imma Shoot",
        genre: "Hip Hop/Rap",
        cover: "https://th.bing.com/th/id/OSK.XYzfmHFomjMtGmYaI0dIdUBMO0hpD078kSrLp5jwd-c?w=102&h=102&c=7&o=6&pid=SANGAM",
        audio: "Songs/Kodak Black - Imma Shoot.mp3",
      },
      {
        title: "2Step",
        artist: "Ed Sheeran ft Lil Baby",
        album: "=",
        genre: "Pop",
        cover: "https://tse1.mm.bing.net/th/id/OIP.vRTLZcORFXOftxKd64c0bgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Ed_Sheeran_-_2step_(feat._Lil_Baby)_-_[Official_Video](MP3_160K).mp3",
      },
      {
        title: "Sorround Sound",
        artist: "JID ft 21 Savage & Baby Tate",
        album: "The Forever Story",
        genre: "Hip Hop . Trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.hC7i5NGJ6djBVZLYa_y1eAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/JID - Surround Sound ft. 21 Savage Baby Tate.mp3",
      },
      {
        title: "Ramen & OJ",
        artist: "Joyner Lucas ft Lil Baby",
        album: "Single",
        genre: "Hip Hop",
        cover: "https://tse4.mm.bing.net/th/id/OIP.j4wtYcXWqewD2N2Fr1zcsQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Joyner Lucas - Ramen OJ (Lyrics) ft. Lil Baby.mp3",
      },
      {
        title: "California Breeze",
        artist: "Lil Baby",
        album: "It's Only Me",
        genre: "Hip Hop/Rap",
        cover: "https://tse1.mm.bing.net/th/id/OIP.glfzFFAi_cM-TlBt1HQXfgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Baby - California Breeze (Official Video).m4a",
      },
      {
        title: "Complicated Love",
        artist: "Lil Baby ft Fridayy",
        album: "",
        genre: "Hip Hop/Rap",
        cover: "https://tse1.mm.bing.net/th/id/OIP.glfzFFAi_cM-TlBt1HQXfgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Baby - Complicated Love ft. Fridayy (Music Video).mp3",
      },
      {
        title: "Drugs Talking",
        artist: "Lil Baby",
        album: "WHAM",
        genre: "Hip Hop/Rap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.bgGo63nL18dAvBPKUgrBVQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Baby - Drugs Talkin (Official Visualizer).mp3",
      },
      {
        title: "Dum,Dumb Dumber",
        artist: "Lil Baby ft Future & Young Thug",
        album: "WHAM",
        genre: "Hip Hop/Rap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.bgGo63nL18dAvBPKUgrBVQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Baby - Dum dumb dumber feat Young Thug Future (Official Visualizer).mp3",
      },
      {
        title: "Emotionally Scarred",
        artist: "Lil Baby",
        album: "My Turn",
        genre: "Hip Hop/Rap",
        cover: "https://grungecake.com/wp-content/uploads/2020/01/lil-baby-my-turn-grungecake-thumbnail-1536x1536.jpeg",
        audio: "Songs/Lil Baby - Emotionally Scarred.mp3",
      },
      {
        title: "Tobey",
        artist: "Eminem ft Big Sean & BabyTron",
        album: "The Death Of Slim Shady",
        genre: "Hip Hop/Rap",
        cover: "https://t2.genius.com/unsafe/258x258/https%3A%2F%2Fimages.genius.com%2F69b9cdd3f8662a30bcfb6fd21bc751b4.1000x1000x1.png",
        audio: "Songs/Eminem - Tobey (feat. Big Sean Babytron) Official Audio.mp3",
      },
      {
        title: "Heyy",
        artist: "Lil Baby",
        album: "It's Only Me",
        genre: "Hip Hop/Rap",
        cover: "https://tse1.mm.bing.net/th/id/OIP.glfzFFAi_cM-TlBt1HQXfgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Baby - Heyy (Official Video).mp3",
      },
      {
        title: "In A Minute",
        artist: "Lil Baby",
        album: "In A Minute",
        genre: "Hip Hop/Rap",
        cover: "https://tse2.mm.bing.net/th/id/OIP.XS1Bg6ll9q2cMEew0DG7dAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Baby - In A Minute (Official Video).mp3",
      },
      {
        title: "Merch Madness",
        artist: "Lil Baby",
        album: "Merch Madness",
        genre: "Hip Hop/Rap",
        cover: "https://th.bing.com/th/id/OSK.jCZV48isXlL7yAVuBYes3WYY1AVJJcIuIHfSYbzI-kk?w=200&h=200&c=12&o=6&pid=SANGAM",
        audio: "Songs/Lil Baby - Merch Madness.mp3",
      },
      {
        title: "Outfit",
        artist: "Lil Baby ft 21 Savage",
        album: "WHAM",
        genre: "Hip Hop/Rap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.bgGo63nL18dAvBPKUgrBVQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Baby - Outfit Feat 21 Savage (Official Visualizer).mp3",
      },
      {
        title: "So Sorry",
        artist: "Lil Baby",
        album: "WHAM",
        genre: "Hip Hop/Rap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.bgGo63nL18dAvBPKUgrBVQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Baby - So Sorry (Official Visualizer).mp3",
      },
      {
        title: "The Bigger Picture",
        artist: "Lil Baby",
        album: "My Turn (Deluxe)",
        genre: "Hip Hop/Rap",
        cover: "https://tse2.mm.bing.net/th/id/OIP.FZ99Mq3Ebs0DdstxFncY0QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Baby - The Bigger Picture (Official Music Video).mp3",
      },
      {
        title: "We Paid",
        artist: "Lil Baby ft 42 Dugg",
        album: "My Turn (Deluxe)",
        genre: "Hip Hop/Rap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.T2ellUZ8xRXUxTXk5dmcLwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Baby - We Paid (Lyrics) ft. 42 Dugg.mp3",
      },
      {
        title: "Woah",
        artist: "Lil Baby",
        album: "Woah",
        genre: "Hip Hop/Rap",
        cover: "https://tse2.mm.bing.net/th/id/OIP.qlDp8sLX1GqimjQFyWIRcgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Baby - Woah (Official Audio).mp3",
      },
      {
        title: "Freestyle",
        artist: "Lil Baby",
        album: "Too Hard",
        genre: "Hip Hop/Rap",
        cover: "https://th.bing.com/th/id/OSK.hTzrQwAC4Gm6lRwC0P6zM6KhwRhOFPIvGHoxJDrown8?w=200&h=200&c=12&o=6&pid=SANGAM",
        audio: "Songs/Lil Baby Freestyle Official Music Video.mp3",
      },
      {
        title: "Lying",
        artist: "Lil Baby & Lil Durk",
        album: "The Voice Of The Heroes",
        genre: "Hip Hop/Rap",
        cover: "https://hiphop-n-more.com/wp-content/uploads/2021/06/voice-of-the-heroes.jpg",
        audio: "Songs/Lil Baby Lil Durk - Lying (Official Audio).mp3",
      },
      {
        title: "Medical",
        artist: "Lil Baby & Lil Durk",
        album: "The Voice Of The Heroes",
        genre: "Hip Hop/Rap",
        cover: "https://hiphop-n-more.com/wp-content/uploads/2021/06/voice-of-the-heroes.jpg",
        audio: "Songs/Lil Baby Lil Durk - Medical (Official Audio).mp3",
      },
      {
        title: "Voice Of The Heroes",
        artist: "Lil Baby & Lil Durk",
        album: "The Voice Of The Heroes",
        genre: "Hip Hop/Rap",
        cover: "https://hiphop-n-more.com/wp-content/uploads/2021/06/voice-of-the-heroes.jpg",
        audio: "Songs/Lil Baby Lil Durk - Voice of the Heroes (Official Video).mp3",
      },
      {
        title: "Forever",
        artist: "Lil Baby ft Fridayy",
        album: "It's Only Me",
        genre: "Hip Hop/RnB",
        cover: "https://tse1.mm.bing.net/th/id/OIP.glfzFFAi_cM-TlBt1HQXfgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Baby, Fridayy - Forever (Official Music Video).mp3",
      },
      {
        title: "Drip Too Hard",
        artist: "Lil Baby & Gunna",
        album: "Drip Harder",
        genre: "Hip Hop/Rap",
        cover: "https://th.bing.com/th/id/R.91897057007a9c5009bd5cfc1552c9c7?rik=Dj1tMz5HvTY2Ng&pid=ImgRaw&r=0",
        audio: "Songs/Lil Baby, Fridayy - Forever (Official Music Video).mp3",
      },
      {
        title: "Close Friends",
        artist: "Lil Baby & Gunna",
        album: "Drip Harder",
        genre: "Hip Hop/Rap",
        cover: "https://th.bing.com/th/id/R.91897057007a9c5009bd5cfc1552c9c7?rik=Dj1tMz5HvTY2Ng&pid=ImgRaw&r=0",
        audio: "Songs/Lil Baby, Fridayy - Forever (Official Music Video).mp3",
      },
      {
        title: "Spin",
        artist: "Kodak Black",
        album: "Kutthroat Bill: Vol. 1",
        genre: "Hip Hop/Rap",
        cover: "https://tse2.mm.bing.net/th/id/OIP.78cnBzTKHYB_khUeAQdTlgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Kodak Black - Spin.mp3",
      },
      {
        title: "Walk",
        artist: "Kodak Black",
        album: "Kutthroat Bill: Vol. 1",
        genre: "Hip Hop/Rap",
        cover: "https://tse2.mm.bing.net/th/id/OIP.78cnBzTKHYB_khUeAQdTlgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Kodak Black - Walk.mp3",
      },
      {
        title: "Hit Stick",
        artist: "Kodak Black",
        album: "Single",
        genre: "Hip Hop / Rap",
        cover: "https://tse1.mm.bing.net/th/id/OIP.DXIcyUIPVdxCWRDSrBQDVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Kodak Black - Hit Stick (Lyrics).mp3",
      },
      {
        title: "Last Day In",
        artist: "Kodak Black",
        album: "Single",
        genre: "Hip Hop / Rap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.SAOuyg08CdoNEWPxgI9TRAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Kodak Black - Last Day In Official Music Video.mp3",
      },
      {
        title: "Super Gremlin",
        artist: "Kodack Black",
        album: "Back For Everything",
        genre: "Hio Hop / Rap",
        cover: "https://tse2.mm.bing.net/th/id/OIP.O5bBIVkEFEzgwgAaKYw0jgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Kodak Black - Super Gremlin (Lyrics).mp3",
      },
      {
        title: "300 Blackout",
        artist: "Kodak Black",
        album: "Kuttthroat Bill Vol 1.",
        genre: "Hip Hop / Rap",
        cover: "https://th.bing.com/th/id/R.057950fb90b7d9a48523ae0199dd264c?rik=cHcMC5FT%2b9ubow&pid=ImgRaw&r=0",
        audio: "Songs/Kodak-Black-300-Blackout-(HipHopKit.com).mp3",
      },
      {
        title: "Feelin' Peachy",
        artist: "Kodak Black",
        album: "Happy Birthday Kodak",
        genre: "Hip Hop /  Rap",
        cover: "https://tse2.mm.bing.net/th/id/OIP.hSYLJC9MzD0K3JGvvOkfvAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Kodak-Black-Feelin-Peachy-(HipHopKit.com).mp3",
      },
      {
        title: "Purple Stamp",
        artist: "Kodack Black",
        album: "Back For Everthing",
        genre: "Hip Hop / Rap",
        cover: "https://tse2.mm.bing.net/th/id/OIP.O5bBIVkEFEzgwgAaKYw0jgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Kodak-Black-Purple-Stamp-(HipHopKit.com).mp3",
      },
      {
        title: "Apex",
        artist: "Lil Tjay",
        album: "Single",
        genre: "Hip Hop / Rap",
        cover: "https://th.bing.com/th/id/OIP.4aOD6Lu8D0o0cqn6GmKCWwHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Tjay - Apex.mp3",
      },
      {
        title: "Brothers",
        artist: "Lil Tjay",
        album: "True 2 Myself",
        genre: "Hip Hop / Rap",
        cover: "https://th.bing.com/th/id/OIP.DJZecn_2FRR0-GII9wG1ogHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Tjay - Brothers.mp3",
      },
      {
        title: "Brothers (Remix)",
        artist: "Lil Tjay ft Lil Durk",
        album: "True 2 Myself",
        genre: "Hip Hop / Rap",
        cover: "https://th.bing.com/th/id/OIP.DJZecn_2FRR0-GII9wG1ogHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Tjay - Brothers (Remix) (Feat Lil Durk).mp3",
      },
      {
        title: "Decline",
        artist: "Lil Tjay ft Lil Baby",
        album: "True 2 Myself",
        genre: "Hip Hop / Rap",
        cover: "https://th.bing.com/th/id/OIP.DJZecn_2FRR0-GII9wG1ogHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Tjay - Decline (Feat Lil Baby).mp3",
      },
      {
        title: "FN",
        artist: "Lil Tjay",
        album: "True 2 Myself",
        genre: "Hip Hop / Rap",
        cover: "https://th.bing.com/th/id/OIP.DJZecn_2FRR0-GII9wG1ogHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Tjay - FN.mp3",
      },
      {
        title: "Hold On",
        artist: "Lil Tjay",
        album: "True 2 Myself",
        genre: "Hip Hop / Rap",
        cover: "https://th.bing.com/th/id/OIP.DJZecn_2FRR0-GII9wG1ogHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Tjay - Hold On.mp3",
      },
      {
        title: "No No",
        artist: "Lil Tjay",
        album: "Single",
        genre: "Hip Hop / Rap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.Odv_TWvL9DHH1Mx6rvu9owHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Tjay - No No.mp3",
      },
      {
        title: "One Take",
        artist: "Lil Tjay",
        album: "True 2 Myself",
        genre: "Hip Hop / Rap",
        cover: "https://th.bing.com/th/id/OIP.DJZecn_2FRR0-GII9wG1ogHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Tjay - One Take.mp3",
      },
      {
        title: "Ruthless",
        artist: "Lil Tjay",
        album: "True 2 Myself",
        genre: "Hip Hop / Rap",
        cover: "https://th.bing.com/th/id/OIP.DJZecn_2FRR0-GII9wG1ogHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Tjay - Ruthless (Feat Jay Critch).mp3",
      },
      {
        title: "Sex Sounds",
        artist: "Lil Tjay",
        album: "True 2 Myself",
        genre: "Hip Hop / Rap",
        cover: "https://th.bing.com/th/id/OIP.DJZecn_2FRR0-GII9wG1ogHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Tjay - Sex Sounds.mp3",
      },
      {
        title: "Angel Pt. 1",
        artist: "Muni Long, NLE Choppa, Kodak Black & Jimin of BTS JVKE",
        album: "Fast X Soundtrack",
        genre: "Hip Hop",
        cover: "https://i1.sndcdn.com/artworks-IFPC1B8YhWt0R2NO-r0aKxw-t500x500.jpg",
        audio: "Songs/Lil Tjay - FN.mp3",
      },
      {
        title: "MoshPit",
        artist: "Kodak Black ft Juice WRLD",
        album: "Dying to Live",
        genre: "Hip Hop / Rap",
        cover: "https://th.bing.com/th/id/R.a96fc97f779ce1c5a6b7634d672ef7cd?rik=G9wQAdEQPblqwQ&pid=ImgRaw&r=0",
        audio: "Songs/Lil Tjay - FN.mp3",
      },
      {
        title: "Never Fold",
        artist: "Fox Kid",
        album: "Single",
        genre: "Hip -  Hop",
        cover: "Assets/Images/Fox Kid - Never Fold.png",
        audio: "Songs/fox kid  never fold  official audio.m4a",
      },
      {
        title: "No Return",
        artist: "Fox Kid",
        album: "Single",
        genre: "Afro",
        cover: "Assets/Images/Fox Kid - No Return.png",
        audio: "Songs/fox kid  no return .m4a",
      },
      {
        title: "Leaving",
        artist: "Fox Kid",
        album: "Single",
        genre: "Drill",
        cover: "Assets/Images/Fox Kid - Leaving.png",
        audio: "Songs/- fox kid  leaving  audio  2025-02-22 10_29.m4a",
      },
      {
        title: "Extravagant",
        artist: "Nasty C ft Case Klowzed",
        album: "Single",
        genre: "Hip Hop/Rap",
        cover: "https://th.bing.com/th/id/OSK.1zzFbqHFVWk5RMEnXoEarS5LhKWNTv7qsJ4ZO9zH61o?w=128&h=128&c=7&o=6&pid=SANGAM",
        audio: "Songs/Nasty C - Extravagant ft. Case-Klowzed.mp3",
      },
      {
        title: "Mad At You",
        artist: "King Von ft Dreezy",
        album: "Welcome to O'Block",
        genre: "	Hip hop . drill . gangsta rap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/King_Von_-_Welcome_to_O%27Block.png/250px-King_Von_-_Welcome_to_O%27Block.png",
        audio: "Songs/King Von - Mad At You (Feat Dreezy).mp3"
      },
      {
        title: "The Code",
        artist: "King Von ft Polo G",
        album: "Welcome to O'Block",
        genre: "Hip hop . drill . gangsta rap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/King_Von_-_Welcome_to_O%27Block.png/250px-King_Von_-_Welcome_to_O%27Block.png",
        audio: "Songs/King Von - The Code (Feat Polo G).mp3"
      },
      {
        title: "Mine Too",
        artist: "King Von",
        album: "Welcome to O'Block",
        genre: "Hip hop . drill . gangsta rap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/King_Von_-_Welcome_to_O%27Block.png/250px-King_Von_-_Welcome_to_O%27Block.png",
        audio: "Songs/King Von - Mine Too.mp3",
      },
      {
        title: "I Am What I Am",
        artist: "King Von ft Fivio Foreign",
        album: "Welcome to O'Block",
        genre: "Hip hop . drill . gangsta rap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/King_Von_-_Welcome_to_O%27Block.png/250px-King_Von_-_Welcome_to_O%27Block.png",
        audio: "Songs/King Von - I Am What I Am (Feat Fivio Foreign).mp3",
      },
      {
        title: "Gleesh Place",
        artist: "King Von",
        album: "Welcome to O'Block",
        genre: "Hip hop . drill . gangsta rap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/King_Von_-_Welcome_to_O%27Block.png/250px-King_Von_-_Welcome_to_O%27Block.png",
        audio: "Songs/King Von - Gleesh Place.mp3",
      },
      {
        title: "Can't Relate",
        artist: "King Von",
        album: "Welcome to O'Block",
        genre: "Hip hop . drill . gangsta rap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/King_Von_-_Welcome_to_O%27Block.png/250px-King_Von_-_Welcome_to_O%27Block.png",
        audio: "Songs/King Von - Can't Relate.mp3",
      },
      {
        title: "Back Again",
        artist: "King Von ft Lil Durk & Prince Dre",
        album: "Welcome To O'Block",
        genre: "Hip hop . drill . gangsta rap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/King_Von_-_Welcome_to_O%27Block.png/250px-King_Von_-_Welcome_to_O%27Block.png",
        audio: "Songs/King Von - Back Again (Feat Lil Durk & Prince Dre).mp3",
      },
      {
        title: "All These Niggas",
        artist: "King Von ft Lil Durk",
        album: "Welcome To O'Block",
        genre: "Hip hop . drill . gangsta rap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/King_Von_-_Welcome_to_O%27Block.png/250px-King_Von_-_Welcome_to_O%27Block.png",
        audio: "Songs/King Von - All These Niggas (Feat Lil Durk).mp3",
      },
      {
        title: "Ain't See It Coming",
        artist: "King Von ft Moneybagg Yo",
        album: "Welcome To O'Block",
        genre: "Hip hop . drill . gangsta rap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/King_Von_-_Welcome_to_O%27Block.png/250px-King_Von_-_Welcome_to_O%27Block.png",
        audio: "Songs/King Von - Ain't See It Coming (Feat Moneybagg Yo).mp3",
      },
      {
        title: "Changes",
        artist: "XXXTentacion",
        album: "?",
        genre: "Hip Hop/Rap · Rap",
        cover: "https://th.bing.com/th/id/R.ef1a9e1278f7683742e4775489d8a501?rik=IlbHvhkt3m1o7A&pid=ImgRaw&r=0",
        audio: "Songs/xxxtentacion - Changes(Lyrics).mp3"
      },
      {
        title: "Jocelyn Flores",
        artist: "XXXTentacion",
        album: "?",
        genre: "Alternative hip hop · emo rap · lofi hip hop",
        cover: "https://th.bing.com/th/id/R.ef1a9e1278f7683742e4775489d8a501?rik=IlbHvhkt3m1o7A&pid=ImgRaw&r=0",
        audio: "Songs/XXXTENTACION - Jocelyn Flores (lyrics).mp3"
      },
      {
        title: "Moonlight",
        artist: "XXXTentacion",
        album: "?",
        genre: "Hip Hop/Rap · Rap",
        cover: "https://th.bing.com/th/id/R.ef1a9e1278f7683742e4775489d8a501?rik=IlbHvhkt3m1o7A&pid=ImgRaw&r=0",
        audio: "Songs/XXXTENTACION - Moonlight (Lyrics).mp3"
      },
      {
        title: "Everybody Dies In Their Nightmares",
        artist: "XXXTentacion",
        album: "17",
        genre: "Hip Hop/Rap · Rap",
        cover: "https://tse4.mm.bing.net/th/id/OIP.V-l5rrbcUvSFm-ZcuwVWogHaHa?w=600&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/XXXTENTACION - Everybody Dies In Their Nightmares (Lyrics).mp3"
      },
      {
        title: "Ex Bitch",
        artist: "XXXTentacion",
        album: "Bad Vibe's Forever",
        genre: "Hip Hop/Rap · Rap",
        cover: "https://tse1.mm.bing.net/th/id/OIP.csUZO8VoWrbaaeEOZfX1ugHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/XXXTENTACION - Ex Bitch (Audio).mp3"
      },
      {
        title: "Fuck Love",
        artist: "XXXTentacion",
        album: "17",
        genre: "Hip Hop/Rap · Rap",
        cover: "https://tse4.mm.bing.net/th/id/OIP.V-l5rrbcUvSFm-ZcuwVWogHaHa?w=600&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/XXXTENTACION - Fck Love Lyrics (with Trippie Redd).mp3",
      },
      {
        title: "Hope",
        artist: "XXXTentacion",
        album: "?",
        genre: "Emo rap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Hope_-_XXXTentacion.png/250px-Hope_-_XXXTentacion.png",
        audio: "Songs/XXXTENTACION - Hope Lyrics.mp3",
      },
      {
        title: "Look At Me!",
        artist: "XXXTentacion",
        album: "Revenge",
        genre: "Trap metal · lo-fi",
        cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Look_at_Me%21.jpg/250px-Look_at_Me%21.jpg",
        audio: "Songs/XXXTENTACION - Look At Me (Audio).mp3",
      },
      {
        title: "Revenge",
        artist: "XXXTentacion",
        album: "17",
        genre: "Alternative rock · folk pop",
        cover: "https://upload.wikimedia.org/wikipedia/en/7/7e/Revenge_Single_Cover.jpg",
        audio: "Songs/XXXTENTACION - Revenge (Lyrics) Ive dug two graves for us my dear.mp3",
      },
      {
        title: "The Remedy for a Broken Heart (Why Am I So in Love)",
        artist: "XXXTentacion",
        album: "?",
        genre: "Hip Hop/Rap · Rap",
        cover: "https://th.bing.com/th/id/R.ef1a9e1278f7683742e4775489d8a501?rik=IlbHvhkt3m1o7A&pid=ImgRaw&r=0",
        audio: "Songs/XXXTENTACION - the remedy for the broken heart (Lyrics).mp3"
      },
      {
        title: "Pretty Little Fears",
        artist: "6LACK, J Cole",
        album: "East Atlanta Love Letter",
        genre: "R&B/Soul",
        cover: "https://th.bing.com/th/id/OIP.Fw0xqEk3fo1Npi2Wh1sSYwHaHa?w=165&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
        audio: "Songs/6LACK, J. Cole - Pretty Little Fears (Lyrics).mp3"
      },
      {
        title: "A Lot",
        artist: "21 Savage, J Cole",
        album: "i am > i was",
        genre: "Hip Hop/Rap · Rap",
        cover: "https://th.bing.com/th/id/OSK.h8161fJR73Xh0jLwBuWBW3jjvawEL7dVizKg-YArP9I?w=200&h=200&c=12&o=7&cb=thws4&pid=SANGAM&rm=3",
        audio: "Songs/21 Savage - a lot (Official Video) ft. J. Cole.mp3"
      },
      {
        title: "Bank Account",
        artist: "21 Savage",
        album: "ISSA",
        genre: "Hip hop · trap",
        cover: "https://th.bing.com/th/id/OIP.5Hlzh8-UV2kKeoBE2mwAuQHaHa?w=120&h=120&c=8&rs=1&qlt=80&o=6&cb=thwsc4&pid=3.1",
        audio: "Songs/21 Savage - Bank Account (Lyrics).mp3"
      },
      {
        title: "Dangerous",
        artist: "21 Savage ft Lil Durk",
        album: "American Dream",
        genre: "Hip-hop · trap",
        cover: "https://th.bing.com/th/id/OIP.XCudU2JLCJk5_y_pSy3bKAHaHa?w=198&h=198&c=7&r=0&o=7&pid=1.7&rm=3",
        audio: "Songs/21 Savage - Dangerous (Lyrics) Feat. Lil Durk Metro Boomin.mp3"
      },
       {
        title: "Knife Talk",
        artist: "Drake ft 21 Savage & Project Pat",
        album: "Certified Lover Boy",
        genre: "Horrorcore · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Drake_-_Certified_Lover_Boy.png/250px-Drake_-_Certified_Lover_Boy.png",
        audio: "Songs/Drake ft 21-Savage Project Pat - Knife Talk.mp3"
      },
       {
        title: "Gun Smoke",
        artist: "21 Savage",
        album: "i am > i was",
        genre: "Hip Hop/Rap · Rap",
        cover: "https://th.bing.com/th/id/OSK.h8161fJR73Xh0jLwBuWBW3jjvawEL7dVizKg-YArP9I?w=200&h=200&c=12&o=7&cb=thws4&pid=SANGAM&rm=3",
        audio: "Songs/21 Savage - Gun Smoke (Official Audio).mp3"
      },
      {
        title: "Redrum",
        artist: "21 Savage",
        album: "American Dream",
        genre: "Hip-hop · trap",
        cover: "https://th.bing.com/th/id/OIP.XCudU2JLCJk5_y_pSy3bKAHaHa?w=198&h=198&c=7&r=0&o=7&pid=1.7&rm=3",
        audio: "Songs/21 Savage - redrum (Lyrics).mp3"
      }, 
      {
        title: "Call Me Revenge",
        artist: "21 Savage ft D4VD",
        album: "Call of Duty - Soundtrack",
        genre: "Hip-hop · trap",
        cover: "https://tse2.mm.bing.net/th/id/OIP.gvE2mTIy1HqKmVf_NaWxlQHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/21 Savage, d4vd - Call Me Revenge (Call of Duty Modern Warfare 3 - Official Game Video).mp3",
      },
      {
        title: "Glock On My Lap",
        artist: "21 Savage ft Future",
        album: "Savage Mode II",
        genre: "Hip-hop · trap",
        cover: "https://i1.sndcdn.com/artworks-IcSkqtF4TJgL-0-t500x500.jpg",
        audio: "Songs/21_savage_metro_boomin_glock_in_my_lap_official_music_video_mp3_47896.mp3",
      },
      {
        title: "X",
        artist: "21 Savage ft Future",
        album: "Savage Mode II",
        genre: "Hip-hop · trap",
        cover: "https://i.scdn.co/image/ab67616d00001e02aa57907bf0cb2ca0c8cc74bc",
        audio: "Songs/21_savage_metro_boomin_x_ft_future_official_music_video_mp3_26751.mp3",
      },
      {
        title: "Family Ties",
        artist: "Baby Keem ft Kendrick Lamar",
        album: "Melodic Blues",
        genre: "Hip-hop · trap",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0CcyYafFpAPfVqy6vuRNij_WJRDfZeI_gzQ&s",
        audio: "Songs/Baby Keem, Kendrick Lamar - family ties (Official Video).mp3",
      },
      {
        title: "Neé Nah",
        artist: "21 Savage ft Metro Boomin & Travis Scott",
        album: "American Dream",
        genre: "Hip-hop · trap",
        cover: "https://th.bing.com/th/id/OIP.XCudU2JLCJk5_y_pSy3bKAHaHa?w=198&h=198&c=7&r=0&o=7&pid=1.7&rm=3",
        audio: "Songs/21-Savage-n-e-nah-Ft-Travis-Scott-Metro-Boomin-(HipHopKit.com).mp3",
      },
      {
        title: "Pop Ur Sh*t",
        artist: "21 Savage ft Metro Boomin & Young Thug",
        album: "American Dream",
        genre: "Hip-hop · trap",
        cover: "https://th.bing.com/th/id/OIP.XCudU2JLCJk5_y_pSy3bKAHaHa?w=198&h=198&c=7&r=0&o=7&pid=1.7&rm=3",
        audio: "Songs/21-Savage-pop-ur-shit-Ft-Young-Thug-Metro-Boomin-(HipHopKit.com).mp3",
      },
      {
        title: "Prove It",
        artist: "21 Savage ft Summer Walker",
        album: "American Dream",
        genre: "Hip-hop · trap",
        cover: "https://th.bing.com/th/id/OIP.XCudU2JLCJk5_y_pSy3bKAHaHa?w=198&h=198&c=7&r=0&o=7&pid=1.7&rm=3",
        audio: "Songs/21-Savage-prove-it-Ft-Summer-Walker-(HipHopKit.com).mp3",
      },
      {
        title: "Eastside",
        artist: "Benny Blanco ft Khalid & Halsey",
        album: "Friends Keep Secrets",
        genre: "Pop . Hip-hop",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Benny_Blanco_%E2%80%93_Friends_Keep_Secrets.png/250px-Benny_Blanco_%E2%80%93_Friends_Keep_Secrets.png",
        audio: "Songs/benny blanco, Halsey Khalid Eastside (official video).mp3",
      },
      {
        title: "Uptown",
        artist: "Bex",
        album: "Uptown",
        genre: "Pop",
        cover: "https://thvnext.bing.com/th/id/OSK.3mS9bUizDHuCgpntQ8AFc5hDXN2RmUHtGTGYw2KB__I?w=200&h=200&c=12&o=7&cb=thws4&pid=SANGAM&rm=3&ucfimg=1",
        audio: "Songs/Bex - Uptown (Lyric Video).mp3",
      },
      {
        title: "Bitch Don't Kill My Vibe",
        artist: "Kendrick Lamar ft Jay-Z",
        album: "good kid, m.A.A.d city (Deluxe)",
        genre: "Gangsta Rap · Hardcore Rap · Hip Hop/Rap · Rap · West Coast Rap",
        cover: "https://th.bing.com/th/id/R.b6d9fcb7be80d1fc841a3eb9ed3f8d17?rik=5j11%2fTlpQ4nkvQ&pid=ImgRaw&r=0",
        audio: "Songs/Bitch Dont Kill My Vibe (Remix) ft. Jay Z - Kendrick Lamar (good kid m.A.A.d city Deluxe).mp3",
      },
      {
        title: "Blood",
        artist: "Kendrick Lamar",
        album: "DAMN",
        genre: "Conscious hip-hop",
        cover: "https://assets.fontsinuse.com/static/use-media-items/52/51196/full-1500x1500/58f577f9/C9H8-PWUIAAzbQ2-jpg-large-e.jpeg",
        audio: "Songs/BLOOD - Kendrick Lamar (DAMN).mp3",
      },
      {
        title: "If I'm Lying",
        artist: "Burna Boy",
        album: "I Told Them",
        genre: "African · Afro-fusion",
        cover: "https://th.bing.com/th/id/ODL.eb26fad43e187fa641b854fe95fc6ac2?w=298&h=298&c=10&rs=1&o=6&pid=AlgoBlockDebug",
        audio: "Songs/Burna Boy - If Im Lying Official Audio.mp3",
      },
      {
        title: "Want It All",
        artist: "Burna Boy ft Polo G",
        album: "Want It All",
        genre: "African · Afro-fusion",
        cover: "https://tse1.mm.bing.net/th/id/OIP.FFGH8H_t5oMsZUkhwQd2GQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Burna Boy - Want It All (Lyrics) ft. Polo G.mp3",
      },
      {
        title: "GBP",
        artist: "Central Cee ft 21 Savage",
        album: "Can't Rush Greatness",
        genre: "Hip-hop · trap",
        cover: "https://th.bing.com/th/id/OSK.h5uidxxtcy7IEVXQ90Cf9qLUOQ-loyFl2BkZWZObP3g?w=64&h=64&c=7&o=6&pid=SANGAM",
        audio: "Songs/Central Cee - GBP (Lyrics) ft. 21 Savage.mp3",
      },
      {
        title: "Many Nights",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/01-Gunna-many-nights-(HipHopKit.com).mp3",
      },
      {
        title: "Let That Sink In",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/02-Gunna-let-that-sink-in-(HipHopKit.com).mp3",
      },
      {
        title: "Just Say Dat",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/03-Gunna-just-say-dat-(HipHopKit.com).mp3",
      },
      {
        title: "gp",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/04-Gunna-gp-(HipHopKit.com).mp3",
      },
      {
        title: "Sakpase",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/05-Gunna-sakpase-(HipHopKit.com).mp3",
      },
      {
        title: "At My Purest",
        artist: "Gunna ft Offset",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/06-Gunna-at-my-purest-Ft-Offset-(HipHopKit.com).mp3",
      },
      {
        title: "Bitting My Game",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/07-Gunna-biting-my-game-(HipHopKit.com).mp3",
      },
      {
        title: "Prototype",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/08-Gunna-prototype-(HipHopKit.com).mp3",
      },
      {
        title: "WGFT",
        artist: "Gunna ft Burna Boy",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/09-Gunna-wgft-ft-Burna-Boy-(HipHopKit.com).mp3",
      },
      {
        title: "Forever Be Mine",
        artist: "Gunna ft Wizkid",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/10-Gunna-forever-be-mine-ft-Wizkid-(HipHopKit.com).mp3",
      },
      {
        title: "Again",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/11-Gunna-again-(HipHopKit.com).mp3",
      },
      {
        title: "Endless",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/12-Gunna-endless-(HipHopKit.com).mp3",
      },
      {
        title: "I Can't Feel My Face",
        artist: "Gunna ft Nechie",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/13-Gunna-i-can-t-feel-my-face-Ft-Nechie-(HipHopKit.com).mp3",
      },
      {
        title: "Podcast",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/14-Gunna-podcast-(HipHopKit.com).mp3",
      },
      {
        title: "Club House",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/15-Gunna-club-house-(HipHopKit.com).mp3",
      },
      {
        title: "Satisfaction",
        artist: "Gunna  ft Asake",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/16-Gunna-satisfaction-ft-Asake-(HipHopKit.com).mp3",
      },
      {
        title: "Soda Pop",
        artist: "Juice WRLD ft Roddy Ricch",
        album: "Single",
        genre: "Hip - Hop",
        cover: "https://tse3.mm.bing.net/th/id/OIP.Qvk2UsIT6F7NSE44NzjvYwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Juice WRLD - Soda Pop Ft. Roddy Ricch (Unreleased).mp3",
      },
      {
        title: "Fame & Riches",
        artist: "Polo G ft Roddy Ricch",
        album: "Hall of Fame",
        genre: "Hip - hop . rap",
        cover: "https://th.bing.com/th/id/OIP.ox2dPp2wtX07yQKwr4kaYAHaHa?w=185&h=185&c=7&r=0&o=7&pid=1.7&rm=3",
        audio: "Songs/Polo_G_-_Fame_Riches_(Official_Audio)_ft._Roddy_Ricch.mp3",
      },
      {
        title: "Down Below",
        artist: "Roddy Ricch",
        album: "Feed Tha Streets",
        genre: "Hip - hop . rap",
        cover: "https://images.genius.com/2816d8999b08609b866ff07083f7d330.1000x1000x1.png",
        audio: "Songs/Roddy Ricch - Down Below (Lyrics).mp3",
      },
      {
        title: "The Box",
        artist: "Roddy Ricch",
        album: "Please Excuse Me for Being Antisocial",
        genre: "Hip - hop . rap",
        cover: "https://wallpapercave.com/wp/wp5638300.jpg",
        audio: "Songs/Polo_G_-_Fame_Riches_(Official_Audio)_ft._Roddy_Ricch.mp3",
      },
      {
        title: "Fuck Witcha Boy",
        artist: "Gunna ft Nechie",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/17-Gunna-fuck-witcha-boy-(HipHopKit.com).mp3",
      },
      {
        title: "On Me",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/18-Gunna-on-me-(HipHopKit.com).mp3",
      },
      {
        title: "Rare Occassion",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/19-Gunna-rare-occasion-(HipHopKit.com).mp3",
      },
      {
        title: "Made For This Shit",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/20-Gunna-made-for-this-shit-(HipHopKit.com).mp3",
      },
      {
        title: "CFWM",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/21-Gunna-cfwm-(HipHopKit.com).mp3",
      },
      {
        title: "What They Thinking",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/22-Gunna-what-they-thinking-(HipHopKit.com).mp3",
      },
      {
        title: "Showed 'Em",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/23-Gunna-showed-em-(HipHopKit.com).mp3",
      },
      {
        title: "Won't Stop",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/24-Gunna-Won-t-Stop-(HipHopKit.com).mp3",
      },
      {
        title: "Him All Along",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/25-Gunna-1-HIM-ALL-ALONG-(HipHopKit.com).mp3",
      },
      {
        title: "Different Species",
        artist: "Offset ft Gunna",
        album: "KIARI",
        genre: "Hip-hop · trap",
        cover: "https://supraphonline.cz/cover/200/8/5/8/901229.jpg?1756878331",
        audio: "Songs/Offset-Different-Species-ft-Gunna-(HipHopKit.com).mp3",
      },
      {
        title: "Angel Numbers (Ten Toes)",
        artist: "Chris Brown",
        album: "11:11",
        genre: "R&B/Soul",
        cover: "https://ratedrnb.com/cdn/2023/10/chris-brown-11-11-album-cover-scaled.jpg",
        audio: "Songs/Chris Brown - Angel Numbers Ten Toes (Official Video).mp3",
      },
      {
        title: "Meet You At The Graveyard",
        artist: "Cleffy",
        album: "Meet You At The Graveyard",
        genre: "Pop",
        cover: "https://images.genius.com/6543eadbb849af34186e3a6d4e0799ec.1000x1000x1.png",
        audio: "Songs/Cleffy - Meet you at the Graveyard (Lyrics).mp3",
      },
      {
        title: "Ball If I Want To",
        artist: "DaBaby",
        album: "Single",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/DaBaby_-_Ball_If_I_Want_To.png/250px-DaBaby_-_Ball_If_I_Want_To.png",
        audio: "Songs/DaBaby - BALL IF I WANT TO (Official Music Video).mp3",
      },
      {
        title: "Lonely",
        artist: "DaBaby ft Lil Wayne",
        album: "Baby on Baby 2",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/d/de/DaBaby_and_Lil_Wayne_-_Lonely.png/250px-DaBaby_and_Lil_Wayne_-_Lonely.png",
        audio: "Songs/DaBaby - Lonely (with Lil Wayne) Official Video.mp3",
      },
      {
        title: "Red Light Green Light",
        artist: "DaBaby",
        album: "Single",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/38/DaBaby_-_Red_Light_Green_Light.png/250px-DaBaby_-_Red_Light_Green_Light.png",
        audio: "Songs/DaBaby - Red Light Green Light Official Music Video.mp3",
      },
      {
        title: "Rockstar",
        artist: "DaBaby ft Roddy Ricch",
        album: "Blame It On Baby",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Rockstar_Remix_%28Official_Single_Cover%29_-_DaBaby_featuring_Roddy_Ricch.png/250px-Rockstar_Remix_%28Official_Single_Cover%29_-_DaBaby_featuring_Roddy_Ricch.png",
        audio: "Songs/DaBaby ROCKSTAR FT RODDY RICCH Audio.mp3",
      },
      {
        title: "Suge (Yea Yea)",
        artist: "DaBaby",
        album: "Baby on Baby",
        genre: "Hip-hop",
        cover: "https://tse4.mm.bing.net/th/id/OIP.vyKeLwCNJoVCcMc268p2bgAAAA?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Dababy - Suge (Yea Yea) Official Music Video.mp3",
      },
      {
        title: "Today (Remix)",
        artist: "DaBaby ft Lil Baby",
        album: "Single",
        genre: "Hip-hop · trap",
        cover: "https://i1.sndcdn.com/artworks-DAEkwqpaIrpzyNc0-z4XYyQ-t500x500.jpg",
        audio: "Songs/DaBaby - Today (remix) ft. Lil Baby.mp3",
      },
      {
        title: "Location",
        artist: "Dave ft Burna Boy",
        album: "Psychodrama",
        genre: "Afrobeats . British Hip-hop",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Dave_Psychodrama.jpeg/250px-Dave_Psychodrama.jpeg",
        audio: "Songs/Dave - Location (ft. Burna Boy).mp3",
      },
      {
        title: "Storyteller",
        artist: "DDG",
        album: "Single",
        genre: "Hip-hop · trap",
        cover: "https://tse2.mm.bing.net/th/id/OIP.CIsysZaHtkHbF3N0tMouGgHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/DDG - Storyteller (Official Audio).mp3",
      },
      {
        title: "Bodies",
        artist: "Offset ft JID",
        album: "KIARI",
        genre: "Hip-hop · trap",
        cover: "https://supraphonline.cz/cover/200/8/5/8/901229.jpg?1756878331",
        audio: "Songs/Offset-Bodies-Ft-JID-(HipHopKit.com).mp3",
      },
      {
        title: "Calories",
        artist: "Offset",
        album: "KIARI",
        genre: "Hip-hop · trap",
        cover: "https://supraphonline.cz/cover/200/8/5/8/901229.jpg?1756878331",
        audio: "Songs/Offset-Calories-(HipHopKit.com).mp3",
      },
      {
        title: "Checkmate (Smooth)",
        artist: "Offset",
        album: "KIARI",
        genre: "Hip-hop · trap",
        cover: "https://supraphonline.cz/cover/200/8/5/8/901229.jpg?1756878331",
        audio: "Songs/Offset-Checkmate-Smooth-(HipHopKit.com).mp3",
      },
      {
        title: "Favorite Girl",
        artist: "Offset ft Ty Dolla $ign",
        album: "KIARI",
        genre: "Hip-hop · trap",
        cover: "https://supraphonline.cz/cover/200/8/5/8/901229.jpg?1756878331",
        audio: "Songs/Offset-Favorite-Girl-Ft-Ty-Dolla-ign-(HipHopKit.com).mp3",
      },
      {
        title: "Pills",
        artist: "Offset ft YoungBoy Never Broke Again",
        album: "KIARI",
        genre: "Hip-hop · trap",
        cover: "https://supraphonline.cz/cover/200/8/5/8/901229.jpg?1756878331",
        audio: "Songs/Offset-Pills-Ft-YoungBoy-Never-Broke-Again-(HipHopKit.com).mp3",
      },
      {
        title: "Proffessional",
        artist: "Offset",
        album: "KIARI",
        genre: "Hip-hop · trap",
        cover: "https://supraphonline.cz/cover/200/8/5/8/901229.jpg?1756878331",
        audio: "Songs/Offset-Professional-(HipHopKit.com).mp3",
      },
      {
        title: "Churchhill Downs",
        artist: "Jack Harlow ft Drake",
        album: "Come Home The Kids Miss You",
        genre: "Hip-hop · trap",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/cf/9a/0e/cf9a0ee1-3b03-c511-cf7c-4929265e261c/075679745118.jpg/208x208bb.webp",
        audio: "Songs/Jack Harlow - Churchill Downs (Lyrics) feat. Drake.mp3",
      },
      {
        title: "Tyler Herro",
        artist: "Jack Harlow",
        album: "Come Home The Kids Miss You",
        genre: "Hip-hop · trap",
        cover: "https://tse4.mm.bing.net/th/id/OIP.CFlS7Xwk6IBPFXLfD1_gKwHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Jack Harlow - Tyler Herro (Lyrics).mp3",
      },
      {
        title: "What's Poppin",
        artist: "Jack Harlow ft DaBaby, Tory Lanez & Lil Wayne",
        album: "Come Home The Kids Miss You",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.SPGKRTSvxdLTOr2c1WuHfwHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Jack Harlow - WHATS POPPIN feat. Dababy, Tory Lanez, Lil Wayne Official Video.mp3",
      },
      {
        title: "Empty Out Your Pockets",
        artist: "Juice WRLD",
        album: "The Party Never Ends",
        genre: "Hip-hop · trap",
        cover: "https://tse1.mm.bing.net/th/id/OIP.atkyzUt1w6ZHyfnSH2xxYQHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Juice WRLD - Empty Out Your Pockets (Lyrics).mp3",
      },
      {
        title: "Fighting Demons",
        artist: "Juice WRLD",
        album: "Fighting Demons",
        genre: "Hip-hop · trap",
        cover: "https://tse4.mm.bing.net/th/id/OIP.eQ7zNqk-K2YqitVjLASzPwHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Juice WRLD - Fighting Demons (Official Audio).mp3",
      },
      {
        title: "Flaws And Sins",
        artist: "Juice WRLD",
        album: "Death Race For Love",
        genre: "Hip-hop · trap",
        cover: "https://tse2.mm.bing.net/th/id/OIP.l0WYurtjteAjUBwIN49LkwHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Juice WRLD - Flaws and Sins (Official Audio).mp3",
      },
      {
        title: "In My Head",
        artist: "Juice WRLD",
        album: "Death Race For Love",
        genre: "Hip-hop · trap",
        cover: "https://tse2.mm.bing.net/th/id/OIP.l0WYurtjteAjUBwIN49LkwHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Juice WRLD - In My Head.mp3",
      },
      {
        title: "Tell Me U Luv Me",
        artist: "Juice WRLD ft Trippe Redd",
        album: "Legends Never Die",
        genre: "Hip-hop · trap",
        cover: "https://th.bing.com/th/id/R.bac957ae86204ba802e5c82e014ac3e9?rik=3sp7iBBzwAR86g&pid=ImgRaw&r=0",
        audio: "Songs/Juice WRLD - Tell Me U Luv Me ft. Trippie Redd (Official Music Video).mp3",
      },
      {
        title: "Titanic",
        artist: "Juice WRLD",
        album: "Legends Never Die",
        genre: "Hip-hop · trap",
        cover: "https://th.bing.com/th/id/R.bac957ae86204ba802e5c82e014ac3e9?rik=3sp7iBBzwAR86g&pid=ImgRaw&r=0",
        audio: "Songs/Juice WRLD - Titanic (Official Audio).mp3",
      },
      {
        title: "Campfire (Freestyle)",
        artist: "Juice WRLD",
        album: "Single",
        genre: "Hip-hop · trap",
        cover: "https://tse1.mm.bing.net/th/id/OIP.2zc_PmkCCANfUOkWkexmYAHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Juice WRLD freestyle sur Reine de Dadju Campfire Song official.mp3",
      },
      {
        title: "Life's A Mess",
        artist: "Juice WRLD ft Halsey",
        album: "Legends Never Die",
        genre: "Hip-hop · trap",
        cover: "https://th.bing.com/th/id/R.bac957ae86204ba802e5c82e014ac3e9?rik=3sp7iBBzwAR86g&pid=ImgRaw&r=0",
        audio: "Songs/Juice WRLD ft. Halsey - Lifes A Mess (Official Visualizer).mp3",
      },
      {
        title: "Come And Go",
        artist: "Juice WRLD & Marshmello",
        album: "Legends Never Die",
        genre: "Hip-hop · trap",
        cover: "https://th.bing.com/th/id/R.bac957ae86204ba802e5c82e014ac3e9?rik=3sp7iBBzwAR86g&pid=ImgRaw&r=0",
        audio: "Songs/Juice WRLD ft. Marshmello - Come Go (Official Audio).mp3",
      },
      {
        title: "Moonlight",
        artist: "Juice WRLD",
        album: "JuiceWrld 9 9 9",
        genre: "Hip-hop · trap",
        cover: "https://th.bing.com/th/id/R.2d0a15c79a1c53e4c12a277f0861b351?rik=uIJJKe%2ftA3GpEA&pid=ImgRaw&r=0",
        audio: "Songs/Juice WRLD Moonlight (Official Audio).mp3",
      },
      {
        title: "All Girls Are The Same 2 (Insecurities)",
        artist: "Juice WRLD ft Nicky Minaj",
        album: "The Party Never Ends",
        genre: "Hip-hop · trap",
        cover: "https://tse1.mm.bing.net/th/id/OIP.atkyzUt1w6ZHyfnSH2xxYQHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Juice WRLD Nicki Minaj - AGATS2 (Insecure) (Official Audio).mp3",
      },
      {
        title: "Comportement (Freestyle)",
        artist: "Juice WRLD",
        album: "Single",
        genre: "Hip-hop · trap",
        cover: "https://imgs.search.brave.com/wee8heypgtn_-o4yYfpuQ3ZgdagBaPIU6oxMgtaJQSE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/d2hhdHMtdGhlLWhh/cmRlc3QtanVpY2Ut/d3JsZC1waWMteW91/dmUtc2Vlbi12MC1w/eDFqZW5sdHc2ZWUx/LmpwZWc_d2lkdGg9/ODI4JmZvcm1hdD1w/anBnJmF1dG89d2Vi/cCZzPTM2ODYwYTUy/NmEzMjYwMjJiYWI0/NDM3ZDBkNThlNjUx/NzA2YzJkZWE",
        audio: "Songs/Juice wrld- COMPORTEMENT Freestyle.mp3",
      },
      {
        title: "Euphoria",
        artist: "Kendrick Lamar",
        album: "Single",
        genre: "Hip-hop · trap",
        cover: "https://tse2.mm.bing.net/th/id/OIP.Wbtd4r6Q-AsqiJBuwMelogHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Kendrick Lamar - Euphoria (Lyrics) (Drake Diss).mp3",
      },
      {
        title: "Humble",
        artist: "Kendrick Lamar",
        album: "DAMN",
        genre: "Hip-hop · trap",
        cover: "https://tse4.mm.bing.net/th/id/OIP.hI1D5LhVJE8-T5m69SJUjAHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Kendrick Lamar - HUMBLE..mp3",
      },
      {
        title: "Reincarneted",
        artist: "Kendrick Lamar",
        album: "GNX",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.mN_4C9DCqvlM-oHkoKk0rwHaHa?cb=ucfimg2ucfimg=1&w=600&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Kendrick Lamar - reincarnated (Official Audio).mp3",
      },
      {
        title: "Rich Sprit",
        artist: "Kendrick Lamar",
        album: "Mr. Morale And The Big Steppers",
        genre: "Hip-hop · Rap",
        cover: "https://t2.genius.com/unsafe/258x258/https%3A%2F%2Fimages.genius.com%2F2f8cae9b56ed9c643520ef2fd62cd378.1000x1000x1.png",
        audio: "Songs/Kendrick Lamar - Rich Spirit.mp3",
      },
      {
        title: "Savior",
        artist: "Kendrick Lamar ft Baby Keem & Sam Dew",
        album: "Mr. Morale And The Big Steppers",
        genre: "Hip-hop · Rap",
        cover: "https://t2.genius.com/unsafe/258x258/https%3A%2F%2Fimages.genius.com%2F2f8cae9b56ed9c643520ef2fd62cd378.1000x1000x1.png",
        audio: "Songs/Kendrick Lamar - Savior ft. Baby Keem Sam Dew (Official Audio).mp3",
      },
      {
        title: "Silent Hill",
        artist: "Kendrick Lamar ft Kodack Black",
        album: "Mr. Morale And The Big Steppers",
        genre: "Hip-hop · Rap",
        cover: "https://t2.genius.com/unsafe/258x258/https%3A%2F%2Fimages.genius.com%2F2f8cae9b56ed9c643520ef2fd62cd378.1000x1000x1.png",
        audio: "Songs/Kendrick Lamar - Silent Hill ft. Kodak Black (Official Audio).mp3",
      },
      {
        title: "Squabble Up",
        artist: "Kendrick Lamar",
        album: "GNX",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.mN_4C9DCqvlM-oHkoKk0rwHaHa?cb=ucfimg2ucfimg=1&w=600&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Kendrick Lamar - squabble up (Lyrics).mp3",
      },
      {
        title: "The Heart Part 5",
        artist: "Kendrick Lamar",
        album: "Single",
        genre: "Conscious hip-hop · soul · jazz rap",
        cover: "https://th.bing.com/th/id/R.fe8b7dea5e5630175cdfe21a04d84df7?rik=%2b44oPzl5FYI2Kg&pid=ImgRaw&r=0",
        audio: "Songs/Kendrick Lamar - The Heart Part 5.mp3",
      },
      {
        title: "Alright",
        artist: "Kendrick Lamar",
        album: "To Pimp A Butterfly",
        genre: "Hip-hop · Rap",
        cover: "https://th.bing.com/th/id/R.55cc61e937a642b4e57056e7cbb6aefe?rik=2YOo6qB3qYP4WA&pid=ImgRaw&r=0",
        audio: "Songs/Kendrick-Lamar-alright-(HipHopKit.com).mp3",
      },
      {
        title: "Armed And Dangerous",
        artist: "King Von",
        album: "Welcome To O'Block",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/King_Von_-_Welcome_to_O%27Block.png/250px-King_Von_-_Welcome_to_O%27Block.png",
        audio: "Songs/King Von - Armed Dangerous (Official Video).mp3",
      },
      {
        title: "Demon",
        artist: "King Von",
        album: "Welcome To O'Block",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/King_Von_-_Welcome_to_O%27Block.png/250px-King_Von_-_Welcome_to_O%27Block.png",
        audio: "Songs/King Von - Demon (Official Video).mp3",
      },
      {
        title: "How It Go",
        artist: "King Von",
        album: "Welcome To O'Block",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/King_Von_-_Welcome_to_O%27Block.png/250px-King_Von_-_Welcome_to_O%27Block.png",
        audio: "Songs/King Von - How It Go (Official Video).mp3",
      },
      {
        title: "Took Her To The O",
        artist: "King Von",
        album: "Welcome To O'Block",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/King_Von_-_Welcome_to_O%27Block.png/250px-King_Von_-_Welcome_to_O%27Block.png",
        audio: "Songs/King Von - Took Her To The O (Official Video).mp3",
      },
      {
        title: "Don't Want To Be",
        artist: "King Von",
        album: "Levon James",
        genre: "Hip-hop · trap",
        cover: "https://tse4.mm.bing.net/th/id/OIP.t9ov_eQADO-8vowW_GxZcAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/King Von - Dont Want to Be Me (Audio).mp3",
      },
      {
        title: "Don't Miss",
        artist: "King Von",
        album: "Grandson",
        genre: "Hip-hop · trap",
        cover: "https://th.bing.com/th/id/OIP.05cC0YA9Njc8pW0Ohf2jGwHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/King Von - Dont Miss (Official Video).mp3",
      },
      {
        title: "Wayne's Story",
        artist: "King Von",
        album: "Welcome To O'Block",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/King_Von_-_Welcome_to_O%27Block.png/250px-King_Von_-_Welcome_to_O%27Block.png",
        audio: "Songs/King Von - Waynes Story (Official Video).mp3",
      },
      {
        title: "War",
        artist: "King Von",
        album: "What It Means to Be King",
        genre: "Hip hop · drill",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/King_Von_-_What_It_Means_to_Be_King.jpg/250px-King_Von_-_What_It_Means_to_Be_King.jpg",
        audio: "Songs/King Von - War (Official Lyric Video).mp3",
      },
      {
        title: "GTA",
        artist: "King Von",
        album: "Welcome To O'Block",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/King_Von_-_Welcome_to_O%27Block.png/250px-King_Von_-_Welcome_to_O%27Block.png",
        audio: "Songs/King Von - GTA (Lyrics) Tryna be me, tell em do what I do (youd do it).mp3",
      },
      {
        title: "Grandson For President",
        artist: "King Von",
        album: "What It Means to Be King",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/King_Von_-_What_It_Means_to_Be_King.jpg/250px-King_Von_-_What_It_Means_to_Be_King.jpg",
        audio: "Songs/King Von - Grandson for President (Remix) (Official Video).mp3",
      },
      {
        title: "Robberies",
        artist: "King Von",
        album: "Grandson",
        genre: "Hip hop · drill",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/King_Von_-_Robberies.png/250px-King_Von_-_Robberies.png",
        audio: "Songs/King Von - Robberies (Official AUDIO).mp3",
      },
      {
        title: "Think Am A Hoe",
        artist: "King Von",
        album: "Grandson",
        genre: "Hip-hop · trap",
        cover: "https://th.bing.com/th/id/OIP.05cC0YA9Njc8pW0Ohf2jGwHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/King Von - Think Im A Hoe (Official AUDIO).mp3",
      },
      {
        title: "War Wit Us",
        artist: "King Von",
        album: "Grandson Vol. 1",
        genre: "Hip-hop · trap",
        cover: "https://th.bing.com/th/id/OIP.WacUjNS6ij_tnn4MqPgYZwHaHa?w=152&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
        audio: "Songs/King Von - War Wit Us (Official Video) Shot by JerryPHD.mp3",
      },
      {
        title: "When I Die",
        artist: "King Von",
        album: "Grandson",
        genre: "Hip hop · drill",
        cover: "https://tse4.mm.bing.net/th/id/OIP._hE1i6YNFAcYChr7JBVqaAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/King Von - When I Die (Official Visualizer).mp3",
      },
      {
        title: "Why He Told",
        artist: "King Von",
        album: "Welcome To O'Block",
        genre: "Hip hop · drill",
        cover: "https://th.bing.com/th/id/OIP.opDDwWI8pJYaPoTnukaXvgHaHa?w=163&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
        audio: "Songs/King Von - Why He Told (Official Video).mp3",
      },
      {
        title: "Twin Nem",
        artist: "King Von ft Lil Durk",
        album: "Grandson Vol. 1",
        genre: "Hip hop · drill",
        cover: "https://tse2.mm.bing.net/th/id/OIP.z0eoYOgl7zE-sVtlo9FtgQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/King Von (feat. Lil Durk) - Twin Nem (Audio).mp3",
      },
      {
        title: "Champagne Poetry",
        artist: "Drake",
        album: "Certified Lover Boy",
        genre: "Horrorcore · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Drake_-_Certified_Lover_Boy.png/250px-Drake_-_Certified_Lover_Boy.png",
        audio: "Songs/Drake - Champagne Poetry.mp3",
      },
      {
        title: "Way 2 Sexy",
        artist: "Drake ft Future & Young Thug",
        album: "Certified Lover Boy",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Drake_-_Certified_Lover_Boy.png/250px-Drake_-_Certified_Lover_Boy.png",
        audio: "Songs/Drake ft Future Young Thug - Way 2 Sexy.mp3",
        youtubeId: "",
      },
      {
        title: "Girls Want Girls",
        artist: "Drake ft Lil Baby",
        album: "Certified Lover Boy",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Drake_-_Certified_Lover_Boy.png/250px-Drake_-_Certified_Lover_Boy.png",
        audio: "Songs/Drake ft Lil Baby - Girls Want Girls.mp3",
      },
      {
        title: "Fair Trade",
        artist: "Drake ft Travis Scott",
        album: "Certified Lover Boy",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Drake_-_Certified_Lover_Boy.png/250px-Drake_-_Certified_Lover_Boy.png",
        audio: "Songs/Drake ft Travis Scott - Fair Trade.mp3",
      },
      {
        title: "BackOutside Boyz",
        artist: "Drake ft 21 Savage",
        album: "Her Loss",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Drake_and_21_Savage_-_Her_Loss.png/250px-Drake_and_21_Savage_-_Her_Loss.png",
        audio: "Songs/Drake-BackOutsideBoyz-ft-21-Savage-(HipHopKit.com).mp3",
      },
      {
        title: "Rich Flex",
        artist: "Drake & 21 Savage",
        album: "Her Loss",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Drake_and_21_Savage_-_Her_Loss.png/250px-Drake_and_21_Savage_-_Her_Loss.png",
        audio: "Songs/Drake-Rich-Flex-ft-21-Savage-(HipHopKit.com).mp3",
      },
      {
        title: "Broke Boys",
        artist: "Drake & 21 Savage",
        album: "Her Loss",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Drake_and_21_Savage_-_Her_Loss.png/250px-Drake_and_21_Savage_-_Her_Loss.png",
        audio: "Songs/Drake-Broke-Boys-ft-21-Savage-(HipHopKit.com).mp3",
      },
      {
        title: "Circo Loco",
        artist: "Drake & 21 Savage",
        album: "Her Loss",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Drake_and_21_Savage_-_Her_Loss.png/250px-Drake_and_21_Savage_-_Her_Loss.png",
        audio: "Songs/Drake-Circo-Loco-ft-21-Savage-(HipHopKit.com).mp3",
      },
      {
        title: "Chicargo Freestyle",
        artist: "Drake ft Giveon",
        album: "Dark Lane Demo Tapes",
        genre: "Hip-hop · R&B",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Drake_-_Dark_Lane_Demo_Tapes.png/250px-Drake_-_Dark_Lane_Demo_Tapes.png",
        audio: "Songs/Drake-Chicago-Freestyle-ft-Giveon-(HipHopKit.com).mp3",
      },
      {
        title: "Jumbotron Shit Poppin'",
        artist: "Drake & 21 Savege",
        album: "Her Loss",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Drake_and_21_Savage_-_Her_Loss.png/250px-Drake_and_21_Savage_-_Her_Loss.png",
        audio: "Songs/Drake-Jumbotron-Shit-Poppin-(HipHopKit.com).mp3",
        youtubeId: "Iu9xmEaHwpU",
      },
      {
        title: "Major Distribution",
        artist: "Drake & 21 Savage",
        album: "Her Loss",
        genre: "Hip-hop . trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Drake_and_21_Savage_-_Her_Loss.png/250px-Drake_and_21_Savage_-_Her_Loss.png",
        audio: "Songs/Drake-Major-Distribution-ft-21-Savage-(HipHopKit.com).mp3",
      },
      {
        title: "Privileged Rapper",
        artist: "Drake & 21 Savage",
        album: "Her Loss",
        genre: "Hip-hop . trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Drake_and_21_Savage_-_Her_Loss.png/250px-Drake_and_21_Savage_-_Her_Loss.png",
        audio: "Songs/Drake-Privileged-Rappers-ft-21-Savage-(HipHopKit.com).mp3",
      },
      {
        title: "Pussy & Millions",
        artist: "Drake & 21 Savage",
        album: "Her Loss",
        genre: "Hip-hop . trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Drake_and_21_Savage_-_Her_Loss.png/250px-Drake_and_21_Savage_-_Her_Loss.png",
        audio: "Songs/Drake-Pussy-Millions-ft-21-Savage-Travis-Scott-(HipHopKit.com).mp3",
      },
      {
        title: "Rich Flex",
        artist: "Drake & 21 Savage",
        album: "Her Loss",
        genre: "Hip-hop . trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Drake_and_21_Savage_-_Her_Loss.png/250px-Drake_and_21_Savage_-_Her_Loss.png",
        audio: "Songs/Drake-Rich-Flex-ft-21-Savage-(HipHopKit.com).mp3",
      },
      {
        title: "Toosie Slide",
        artist: "Drake",
        album: "Dark Lane Demo Tapes",
        genre: "Hip-hop . trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Drake_-_Dark_Lane_Demo_Tapes.png/250px-Drake_-_Dark_Lane_Demo_Tapes.png",
        audio: "Songs/Drake-Toosie-Slide-(HipHopKit.com).mp3",
        youtubeId: "xWggTb45brM",
      },
      {
        title: "Wants And Needs",
        artist: "Drake ft Lil Baby",
        album: "Scary Hours 2",
        genre: "Hip-hop . trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Drake_-_Scary_Hours_2.png/250px-Drake_-_Scary_Hours_2.png",
        audio: "Songs/Drake-Wants-and-Needs-feat-Lil-Baby-(HipHopKit.com).mp3",
      },
      {
        title: "What Did I Miss?",
        artist: "Drake",
        album: "Iceman",
        genre: "Hip-hop . trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Drake_-_What_Did_I_Miss.png/250px-Drake_-_What_Did_I_Miss.png",
        audio: "Songs/Drake-What-Did-I-Miss-(HipHopKit.com).mp3",
        youtubeId: "weU76DGHKU0",
      },
      {
        title: "Which One",
        artist: "Drake ft Central Cee",
        album: "Iceman",
        genre: "Hip-hop . trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Drake_-_Which_One.png/250px-Drake_-_Which_One.png",
        audio: "Songs/Drake-Which-One-ft-Central-Cee-(HipHopKit.com).mp3",
      },
      {
        title: "6:16 In LA",
        artist: "Kendrick Lamar",
        album: "Single",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/b/b5/Kendrick_Lamar_-_6-16_in_LA.png",
        audio: "Songs/Kendrick Lamar - 616 in LA (Drake Diss).mp3",
      },
    ];

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
    
  } catch (error) {
    console.error('Error downloading song:', error);
    showError('Error downloading song. Please try again.');
  }
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
  
  // Search functionality
  searchInput.addEventListener('input', function() {
    filterSongs(this.value);
  });
  
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
    alert('Settings saved successfully!');
    settingsPanel.style.display = 'none';
  });
  
  logoutBtn.addEventListener('click', function() {
    if (confirm('Are you sure you want to logout?')) {
      alert('Logged out successfully!');
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
          <h1 class="section-title">Welcome to Xyla</h1>
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
          <div class="music-card">
            <div class="music-card-cover" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center;">
              <span style="font-size: 2rem;">❤</span>
            </div>
            <div class="music-card-info">
              <div class="music-card-title">Liked Songs</div>
              <div class="music-card-artist">Your favorite tracks</div>
            </div>
          </div>
          <div class="music-card">
            <div class="music-card-cover" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); display: flex; align-items: center; justify-content: center;">
              <span style="font-size: 2rem;">🎵</span>
            </div>
            <div class="music-card-info">
              <div class="music-card-title">Chill Vibes</div>
              <div class="music-card-artist">Relaxing tunes</div>
            </div>
          </div>
          <div class="music-card">
            <div class="music-card-cover" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); display: flex; align-items: center; justify-content: center;">
              <span style="font-size: 2rem;">⚡</span>
            </div>
            <div class="music-card-info">
              <div class="music-card-title">Workout Mix</div>
              <div class="music-card-artist">Energy boosters</div>
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
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
          ${genres.map(genre => `
            <div class="music-card" style="text-align: center; padding: 1.5rem 1rem; cursor: pointer;" onclick="filterByGenre('${genre}')">
              <div style="font-size: 2rem; margin-bottom: 0.5rem;">🎵</div>
              <div class="music-card-title">${genre}</div>
            </div>
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
      
    default:
      content = `
        <div class="section-header">
          <h1 class="section-title">Welcome to Xyla</h1>
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

// Enhanced Render Music Cards with download button
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
        <button class="music-card-btn">❤</button>
      </div>
    </div>
  `).join('');
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
}

// Toggle Repeat
function toggleRepeat() {
  repeatMode = (repeatMode + 1) % 3;
  updateRepeatButton();
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

// Add video indicator style
const style = document.createElement('style');
style.textContent = `
  .video-indicator {
    position: absolute;
    top: 5px;
    right: 5px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    z-index: 2;
  }
`;
document.head.appendChild(style);