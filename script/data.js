const playlist = [
    {
        name: "All The Stars",
        cover: "https://images.genius.com/bd3eb1cc914cca2ea8cad1f301b6b88b.1000x1000x1.png",
        artist: "Kendrick Lamar | SZA",
        audio:
            "https://dl.sndup.net/g9ds/All%20The%20Stars.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Pray For Me",
        cover: "https://m.media-amazon.com/images/I/918mX9aiWmL.jpg",
        artist: "The Weeknd | Kendrick Lamar",
        audio:
            "https://dl.sndup.net/py94/Pray%20For%20Me.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Last Breath",
        cover: "https://i1.sndcdn.com/artworks-000506100843-y0h335-t500x500.jpg",
        artist: "Future",
        audio:
            "https://dl.sndup.net/59bj/Last%20Breath.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Runnin",
        cover: "https://images.genius.com/a482d648c4b21447ae97b6918b1210bd.1000x1000x1.jpg",
        artist: "A$AP Rocky| A$AP Ferg | Nicki Minaj",
        audio:
            "https://dl.sndup.net/6vy2/Runnin.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Dil Galti Kar Baitha hai",
        cover:
            "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/c7/83/bd/c783bd16-31bf-6980-72bc-3b82ad79b9f9/source/600x600bb.jpg",
        artist: "JalRaj",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1638806016/Songs/X2Download.com_-_Dil_Galti_Kar_Baitha_hai_Reprise_-_JalRaj_-_Latest_Hindi_Cover_2021_-REUPLOAD-_128_kbps_wmewm8.mp3",
        color: ["#F7CBE2", "#D34156"],
        liked: false,
    },
    {
        name: "Nazm Nazm",
        cover:
            "https://a10.gaanacdn.com/images/song/25/22348025/crop_480x480_1516002143.jpg",
        artist: "Ayushmann Khurrana ",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1638805635/Songs/Nazm_Nazm_Feat._Ayushmann_Khurrana_Bareilly_Ki_Barfi_320_Kbps_nwbsh8.mp3",
        color: ["#978B51", "#CFCAAD"],
        liked: false,
    },
    {
        name: "Phir Miloge Na - Single",
        cover:
            "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/7f/1a/7e/7f1a7e96-226b-a140-43db-6718ab872d2b/source/600x600bb.jpg",
        artist: "JalRaj",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1638805239/Songs/X2Download.com_-_Phir_Miloge_Na_-_JalRaj_-_Official_Video_-_New_Original_Songs_2021_128_kbps_cl1m74.mp3",
        color: ["#512522", "#192E43"],
        liked: false,
    },
    {
        name: "Chidiya Reprise",
        cover: "https://i.scdn.co/image/ab67616d0000b273fafed6d05f8e2836e0a2a483",
        artist: "JalRaj",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1638793780/Songs/X2Download.com_-_Chidiya_Reprise_-_JalRaj_-_Vilen_-_Latest_cover_2021_Hindi_128_kbps_jo8ctj.mp3",
        color: ["#C09B6E", "#3F4018"],
        liked: false,
    },
    {
        name: "Yeh Pyaar Nahi Toh Kya Hai",
        cover:
            "https://sgdccdnems03.cdnsrv.jio.com/c.saavncdn.com/663/Ye-Pyar-Nahi-to-Kya-Hai-Unplugged-Version--Hindi-2020-20200330092223-500x500.jpg",
        artist: "Rahul Jain",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1638793306/Songs/X2Download.com_-_Yeh_Pyar_Nahi_To_Kya_Hai_-_Title_Song_-_Rahul_Jain_-_Full_Song_-_Sony_TV_Serial_320_kbps_r7a5az.mp3",
        color: ["#363636", "#7E3666"],
        liked: false,
    },
    {
        name: "Kabhii Tumhhe",
        cover:
            "https://pagalnew.com/coverimages/album/shershaah-2021-500-500.jpg",
        artist: "Darshan Raval",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1638792776/Songs/Kabhii_Tumhhe_Shershaah_320_Kbps_i5f6qq.mp3",
        color: ["#715639", "#010101"],
        liked: false,
    },
    {
        name: "Mann Bharryaa",
        cover:
            "https://pagalnew.com/coverimages/mann-bharryaa-2.0-shershaah-500-500.jpg",
        artist: "B Praak",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1638792632/Songs/Mann_Bharryaa_2.0_Shershaah_320_Kbps_o9u3f5.mp3",
        color: ["#166E9C", "#0C304A"],
        liked: false,
    },
    {
        name: "Ranjha",
        cover: "https://pagalnew.com/coverimages/ranjha-shershaah-500-500.jpg",
        artist: "Jasleen Royal | B Praak",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1638792374/Songs/Ranjha_Shershaah_320_Kbps_kiq4dl.mp3",
        color: ["#7E392A", "#9C9288"],
        liked: false,
    },
    {
        name: "Raataan Lambiyan",
        cover:
            "https://pagalnew.com/coverimages/album/shershaah-2021-500-500.jpg",
        artist: "Jubin Nautiyal | Asees Kaur ",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1638792281/Songs/Raataan_Lambiyan_Shershaah_320_Kbps_bfpkmh.mp3",
        color: ["#715639", "#010101"],

        liked: false,
    },
    {
        name: "Yeh Tune Kya Kiya",
        cover:
            "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/73/69/1c/73691c70-8d52-312b-a6b8-6be8267613e2/source/600x600bb.jpg",
        artist: "Pritam | Javed Bashir",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1638806403/Songs/Yeh_Tune_Kya_Kiya_Song_Once_upon_A_Time_In_Mumbaai_Dobara_-_Pritam_-_Akshay_Kumar_Sonakshi_Sinha_zji6uy.mp4",
        color: ["#BB2129", "#100F15"],

        liked: false,
    },
    {
        name: "Kabhi Kabhi Aditi",
        cover:
            "https://pagalnew.com/coverimages/Kabhi-Kabhi-Aditi-Zindagi-Jaane-Tu..-Ya-Jaane-Na-500-500.jpg",
        artist: "Rashid Ali",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1638807873/Songs/Kabhi_Kabhi_Aditi_Zindagi_Jaane_Tu.._Ya_Jaane_Na_320_Kbps_zcl3hm.mp3",
        color: ["#E2F63C", "#D22A2A"],

        liked: false,
    },
    {
        name: "Are Are",
        cover:
            "https://sgdccdnems04.cdnsrv.jio.com/c.saavncdn.com/038/Makkhi-2012-500x500.jpg",
        artist: "K.K. | G Sahithi",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1638808658/Songs/Are_Are_Are_g0wjip.mp4",
        color: ["#E8C02B", "#EE2E2D"],

        liked: false,
    },
    {
        name: "Love Me Like You Do",
        cover:
            "https://is1-ssl.mzstatic.com/image/thumb/Music5/v4/05/8c/85/058c8521-0001-4eee-efa6-3ef0176bdfa4/source/600x600bb.jpg",
        artist: "Ellie Goulding",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1638808912/Songs/Ellie_Goulding_-_Love_Me_Like_You_Do_Official_Video_dpb5yd.mp4",
        color: ["#060606", "#565654"],

        liked: false,
    },
    {
        name: "On My Way",
        cover:
            "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/30/2c/62/302c62b2-13b0-1c13-cd0e-56bcd08c520a/source/600x600bb.jpg",
        artist: "Alan Walker | Sabrina Carpenter & Farruko",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1638809150/Songs/Alan_Walker_Sabrina_Carpenter_Farruko_-_On_My_Way_Lyrics_winflu.mp4",
        color: ["#47D7F1", "#233E73"],

        liked: false,
    },
    {
        name: "Ab Tere Dil Mein To",
        cover:
            "https://a10.gaanacdn.com/images/albums/22/8222/crop_480x480_8222.jpg",
        artist: "Kumar Sanu | Alka Yagnik | Anu Malik",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1638816826/Songs/Ab_Tere_Dil_Mein_To_-_Aarzoo_-_Akshay_Kumar_Madhuri_Dixit_Saif_Ali_Khan_-_Kumar_Sanu_Alka_Yagnik_ypxjwa.mp4",
        color: ["#2975AF", "#FBC972"],

        liked: false,
    },
    {
        name: "Kasam Ki Kasam",
        cover:
            "https://pagalnew.com/coverimages/kasam-ki-kasam-main-prem-ki-diwani-hoon-500-500.jpg",
        artist: "Shaan | K. S. Chithra ",
        audio: "https://pagalnew.com/download320/11163",
        color: ["#F13D40", "#D9D4D8"],

        liked: false,
    },
    {
        name: "Tu Jaan Hai Armaan Hai",
        cover:
            "https://pagalsong.in/uploads//thumbnails/300x300/id3Picture_1310175250.jpg",
        artist: "Alka Yagnik | Sonu Nigam | Karisma Kapoor ",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1638817327/Songs/Tu_jaan_hai_armaan_hai_Mere_pyaar_ki_pehchan_hai_xie16o.mp4",
        color: ["#CF8C7B", "#EEC643"],

        liked: false,
    },
    {
        name: "Main Zindagi Ka Saath Nibhata Chala",
        cover:
            "https://pagalnew.com/coverimages/Main-Zindagi-Ka-Saath-Nibhata-Chala-Gaya-Hum-Dono-500-500.jpg",
        artist: "Mohammed Rafi",
        audio: "https://pagalnew.com/download320/1044",
        color: ["#959595", "#C1E5F5"],

        liked: false,
    },
    {
        name: "Mann Mera (Reprise)",
        cover: "https://i.scdn.co/image/ab6761610000e5eb41d0a40b84280ac087e7b7ec",
        artist: "JalRaj | Gajendra Verma",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1638875736/Songs/Mann_Mera_Reprise__192_PagalWorld.com.se_bhoixc.mp3",
        color: ["#FEFEFE", "#000000"],

        liked: false,
    },
    {
        name: "Dil Chahte Ho",
        cover:
            "https://pagalnew.com/coverimages/Dil-Chahte-Ho-Jubin-Nautiyal-500-500.jpg",
        artist: "Jubin Nautiyal | Payal Dev ",
        audio: "https://pagalnew.com/download320/2031",
        color: ["#CE9FC9", "#6A352D"],

        liked: false,
    },
    {
        name: "Bewafa Tera Masoom Chehra",
        cover:
            "https://pagalnew.com/coverimages/Bewafa-Tera-Masoom-Chehra-Jubin-Nautiyal-500-500.jpg",
        artist: "Jubin Nautiyal | Rochak Kohli",
        audio: "https://pagalnew.com/download320/2225",
        color: ["#F2CA08", "#4CC3E5"],

        liked: false,
    },
    {
        name: "Kaabil Hoon",
        cover:
            "https://pagalnew.com/coverimages/Kaabil-Hoon-Jubin-Nautiyal-500-500.jpg",
        artist: "Jubin Nautiyal, Palak Muchhal ",
        audio: "https://pagalnew.com/download320/3339",
        color: ["#44A47F", "#DED68D"],

        liked: false,
    },
    {
        name: "Lut Gaye",
        cover:
            "https://pagalnew.com/coverimages/lut-gaye-jubin-nautiyal-500-500.jpg",
        artist: "Jubin Nautiyal ",
        audio: "https://pagalnew.com/download320/3796",
        color: ["#21130A", "#D78644"],

        liked: false,
    },
    {
        name: "Tujhe Kitna Chahein Aur",
        cover: "https://i1.sndcdn.com/artworks-000578543999-vql626-t500x500.jpg",
        artist: "Mithoon |Jubin",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1638893761/Songs/Full_Song-_Tujhe_Kitna_Chahein_Aur_Film_Version_-_Kabir_Singh_-_Shahid_K_Kiara_A_-_Mithoon_-Jubin_zvubg8.mp4",
        color: ["#DCD5C5", "#181C39"],

        liked: false,
    },
    {
        name: "Humnava Mere",
        cover:
            "https://a10.gaanacdn.com/images/albums/84/2148984/crop_480x480_1527061885_2148984.jpg",
        artist: "Jubin Nautiyal",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1638894848/Songs/Humnava_Mere_192_PagalWorld.com.se_ytj61v.mp3",
        color: ["#64E1E3", "#FCE7E4"],

        liked: false,
    },
    {
        name: "Kaun Tujhe",
        cover:
            "https://pagalnew.com/coverimages/Kaun-Tujhe-M.S.-Dhoni---The-Untold-Story-500-500.jpg",
        artist: "Palak Muchhal",
        audio: "https://pagalnew.com/download320/4057",
        color: ["#E9EAD8", "#286B7E"],

        liked: false,
    },
    {
        name: "Jab Tak",
        cover:
            "https://pagalnew.com/coverimages/Kaun-Tujhe-M.S.-Dhoni---The-Untold-Story-500-500.jpg",
        artist: "Armaan Malik ",
        audio: "https://pagalnew.com/download320/4058",
        color: ["#E9EAD8", "#286B7E"],

        liked: false,
    },
    {
        name: "Phir Kabhi",
        cover:
            "https://pagalnew.com/coverimages/Kaun-Tujhe-M.S.-Dhoni---The-Untold-Story-500-500.jpg",
        artist: "Arijit Singh",
        audio: "https://pagalnew.com/download320/4059",
        color: ["#E9EAD8", "#286B7E"],

        liked: false,
    },
    {
        name: "Woh Din",
        cover: "https://pagalnew.com/coverimages/Woh-Din-Chhichhore-500-500.jpg",
        artist: "Arijit Singh",
        audio: "https://pagalnew.com/download320/2631",
        color: ["#95918E", "#E4B330"],

        liked: false,
    },

    {
        name: "Khairiyat",
        cover: "https://pagalnew.com/coverimages/Woh-Din-Chhichhore-500-500.jpg",
        artist: "Arijit Singh",
        audio: "https://pagalnew.com/download320/2632",
        color: ["#95918E", "#E4B330"],

        liked: false,
    },
    {
        name: "Emptiness",
        cover:
            "https://i.pinimg.com/564x/cf/95/dc/cf95dc62b809224461b025cbbc14e544--lyrics-book-jacket.jpg",
        artist: "Gajendra Verma",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1639218767/Songs/Rohan_Rathore_-_Emptiness_Originial_xw26pc.mp4",
        color: ["#95918E", "#F3FAF2"],

        liked: false,
    },
    {
        name: "Duniyaa",
        cover: "https://i.scdn.co/image/ab67616d0000b2737b93fd8b0ade33ceb9d536de",
        artist: "Akhil, Dhvani Bhanushali",
        audio: "https://pagalnew.com/download320/11285",
        color: ["#433F3E", "#007EE6"],

        liked: false,
    },
    {
        name: "Tu Laung Main Elaachi",
        cover:
            "https://pagalsong.in/uploads//thumbnails/300x300/id3Picture_110637043.jpg",
        artist: "Mannat Noor",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1640090985/Songs/Laung_Laachi_-_Title_Song_Laung_Laachi_320_Kbps_lbdybf.mp3",
        color: ["#FAEEA6", "#675024"],

        liked: false,
    },
    {
        name: "Dil Ibaadat",
        cover:
            "https://c.saavncdn.com/316/Tum-Mile-Hindi-2009-20190617160526-500x500.jpg",
        artist: "K.K",
        audio: "https://pagalnew.com/download320/7075",
        color: ["#6D4722", "#F89752"],

        liked: false,
    },
    {
        name: "Pehli Nazar Mein",
        cover:
            "https://sklktcdnems07.cdnsrv.jio.com/c.saavncdn.com/663/Pehli-Nazar-Hindi-2019-20191130091130-500x500.jpg",
        artist: "Pritam, Atif Aslam",
        audio: "https://pagalnew.com/download320/8904",
        color: ["#020202", "#76CBC6"],

        liked: false,
    },
    {
        name: "Bulleya",
        cover:
            "https://c.saavncdn.com/272/Bulleya-Tropical-Mix-By-Aqeel-Ali-From-Ae-Dil-Hai-Mushkil--Hindi-2016-500x500.jpg",
        artist: "Papon | Vishal-Shekhar | Irshad Kamil",
        audio: "https://pagalnew.com/download320/3977",
        color: ["#CE8A75", "#47B133"],

        liked: false,
    },
    {
        name: "Alizeh",
        cover: "https://m.media-amazon.com/images/I/61BYhIMm6WL._SS500_.jpg",
        artist: "Pritam | Arijit Singh",
        audio: "https://pagalnew.com/download320/4102",
        color: ["#2A174F", "#810DA4"],

        liked: false,
    },
    {
        name: "Ladki Kyon Na Jane Kyon",
        cover:
            "https://sdlhivkcdnems04.cdnsrv.jio.com/c.saavncdn.com/442/Ladki-Kyon-Hit-Songs-By-Shaan-2013-500x500.jpg",
        artist: "Shaan | Alka Yagnik",
        audio: "https://pagalnew.com/download320/12166",
        color: ["#2BA3F1", "#416960"],

        liked: false,
    },
    {
        name: "My Dil Goes Mmm",
        cover: "https://c.saavncdn.com/911/Hey-Shona-Hits-Of-Saif-Ali-Khan-2013-500x500.jpg",
        artist: "Shaan | Gayatri Iyer",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1640197706/Songs/03._My_Dil_Goes_Mmm_dsueye.mp3",
        color: ["#353A4D", "#F76379"],

        liked: false,
    },
    {
        name: "Tu Hi Yaar Mera",
        cover:
            "https://i1.sndcdn.com/artworks-eO9FYzcslsVpMg6z-7nn2bA-t500x500.jpg",
        artist: "Arijit Singh | Neha Kakkar | Rochak Kohli",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1640198052/Songs/Tu_Hi_Yaar_Mera_-_Pati_Patni_Aur_Woh_babzim.mp3",
        color: ["#DCE3B0", "#E8F2F3"],

        liked: false,
    },
    {
        name: "Humsafar",
        cover: "https://i1.sndcdn.com/artworks-000222162123-kjuo2n-t500x500.jpg",
        artist: "Akhil Sachdeva",
        audio: "https://pagalnew.com/download320/3395",
        color: ["#B01E71", "#BF6A7F"],

        liked: false,
    },
    {
        name: "Samjhawan Unplugged",
        cover: "https://i.scdn.co/image/ab67616d0000b27390cfe35710a2c7e764306202",
        artist: "Alia Bhatt",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1640198852/Songs/Samjhawan_-_Unplugged_-_Humpty_Sharma_Ki_Dulhania_128_Kbps_rizszw.mp3",
        color: ["#2A6956", "#C9CE33"],

        liked: false,
    },
    {
        name: "Aa To Sahii",
        cover: "https://i1.sndcdn.com/artworks-000242957876-7r7bjo-t500x500.jpg",
        artist: "Meet Bros | Neha Kakkar",
        audio: "https://pagalnew.com/download320/3647",
        color: ["#05075A", "#763462"],

        liked: false,
    },
    {
        name: "Give Me Some Sunshine",
        cover:
            "https://c-cl.cdn.smule.com/rs-s80/arr/b5/5a/9acbca39-faa2-4205-a120-7dc4494db937_1024.jpg",
        artist: "Suraj Jagan",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1640627070/Songs/MP3DOWNLOAD.TO_%E4%B8%89%E5%80%8B%E5%82%BB%E7%93%9C_3_idiots_-_Give_me_some_sunshine-320k_srabhv.mp3",
        color: ["#945A11", "#000000"],

        liked: false,
    },
    {
        name: "Behti Hawa Sa Tha Woh",
        cover:
            "https://pagalnew.com/coverimages/behti-hawa-sa-tha-woh-500-500.jpg",
        artist: "Shaan",
        audio: "https://pagalnew.com/download320/8456",
        color: ["#C2C2C2", "#060606"],

        liked: false,
    },
    {
        name: "Laree Choote",
        cover:
            "https://i1.sndcdn.com/artworks-Tflizwf2THxPMlqJ-l2nE0g-t500x500.jpg",
        artist: "Xulfi",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1640455399/Songs/Laree_Choote_-_Ek_Chalis_Ki_Last_Local_fpheo6.mp3",
        color: ["#3C4C63", "#5C4849"],

        liked: false,
    },
    {
        name: "Tennu Le Kejo Na",
        cover:
            "https://is3-ssl.mzstatic.com/image/thumb/Music30/v4/39/2c/0f/392c0fb3-5fc5-d44f-4992-5d510d709090/8903431533357_cover.jpg/400x400cc.jpg",
        artist: "Bappi Lahiri | Omer Inayat",
        audio: "https://pagalnew.com/download320/8234",
        color: ["#902827", "#AF683A"],

        liked: false,
    },
    {
        name: "Jiya Dhadak Dhadak Jaye",
        cover:
            "https://pagalfree.com/images/128Jiya%20Dhadak%20Dhadak%20Jaye%20-%20Kalyug%20128%20Kbps.jpg",
        artist: "Rohail Hyatt | Faisal Rafi",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1640455933/Songs/Jiya_Dhadak_Dhadak_Jaye_-_Kalyug_nv0mqx.mp3",
        color: ["#010101", "#B5773A"],

        liked: false,
    },
    {
        name: "Maula Mere Maula",
        cover:
            "https://i1.wp.com/99lyricstore.com/wp-content/uploads/2021/04/Maula2BMere2BMaula2BLyrics2BRoop2BKumar2BRathod.jpg?w=700&ssl=1",
        artist: "Roopkumar Rathod",
        audio: "https://pagalnew.com/download320/9108",
        color: ["#0A4F08", "#D72E2E"],

        liked: false,
    },
    {
        name: "Bol Na Halke Halke",
        cover:
            "https://is2-ssl.mzstatic.com/image/thumb/Music6/v4/d4/a5/12/d4a512f4-9602-4277-380d-b32c86852d7c/Gulzar-Cover.jpg/400x400cc.jpg",
        artist: "Rahat Fateh Ali Khan | Mahalakshmi Iyer",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1640456346/Songs/Bol-Na-Halke-Halke-_pagalworldsongs.co.in_oln44k.mp3",
        color: ["#CF2C25", "#FFC03E"],

        liked: false,
    },
    {
        name: "Ya Ali",
        cover:
            "https://i1.sndcdn.com/artworks-0brduk0iNyz0bdLY-oNDoyw-t500x500.jpg",
        artist: "Zubeen Garg",
        audio: "https://pagalnew.com/download320/9663",
        color: ["#EBB33C", "#5B4432"],

        liked: false,
    },
    {
        name: "Humnava",
        cover:
            "https://a10.gaanacdn.com/images/albums/99/588699/crop_480x480_588699.jpg",
        artist: "Mithoon, Papon",
        audio: "https://pagalnew.com/download320/4677",
        color: ["#332C34", "#CA2863"],

        liked: false,
    },
    {
        name: "Hasi Male Version",
        cover: "https://i1.sndcdn.com/artworks-000138859805-b957w7-t500x500.jpg",
        artist: "Ami Mishra",
        audio: "https://pagalnew.com/download320/4678",
        color: ["#FD678A", "#8D1D55"],

        liked: false,
    },
    {
        name: "Hasi Female Version",
        cover: "https://m.media-amazon.com/images/I/616XAAYSpuL.jpg",
        artist: "Shreya Ghoshal",
        audio: "https://pagalnew.com/download320/4679",
        color: ["#E5A67D", "#D19444"],

        liked: false,
    },
    {
        name: "Subhanallah",
        cover:
            "https://pagalnew.com/coverimages/Subhanallah-Yeh-Jawaani-Hai-Deewani-500-500.jpg",
        artist: "Pritam | Sreerama Chandra | Shilpa Rao",
        audio: "https://pagalnew.com/download320/6104",
        color: ["#DDC446", "#EE2E43"],

        liked: false,
    },
    {
        name: "Ilahi",
        cover:
            "https://pagalnew.com/coverimages/Subhanallah-Yeh-Jawaani-Hai-Deewani-500-500.jpg",
        artist: "Pritam | Arijit Singh",
        audio: "https://pagalnew.com/download320/6101",
        color: ["#DDC446", "#EE2E43"],

        liked: false,
    },
    {
        name: "Khairiyat",
        cover: "https://i1.sndcdn.com/artworks-000632688865-s2rdla-t500x500.jpg",
        artist: "Arijit Singh",
        audio: "https://pagalnew.com/download320/2632",
        color: ["#1F2E29", "#B0A726"],

        liked: false,
    },
    {
        name: "Waalian",
        cover:
            "https://a10.gaanacdn.com/images/albums/24/4734224/crop_480x480_4734224.jpg",
        artist: "Harnoor",
        audio: "https://pagalnew.com/download320/17129",
        color: ["#CFB7C5", "#98B0B2"],

        liked: false,
    },
    {
        name: "Hothon Se Chhulo Tum",
        cover:
            "https://sdlhivkcdnems02.cdnsrv.jio.com/c.saavncdn.com/025/Hothon-Se-Chhu-Lo-Tum-Romantic-Ghazals-Hindi-2014-20190924060934-500x500.jpg",
        artist: "Jagjit Singh",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1640626807/Songs/Hothon_Se_Chhu_Lo_Tum_From_Prem_Geet_-_Prem_Geet_320_Kbps_ii0euk.mp3",
        color: ["#4E1121", "#E64682"],

        liked: false,
    },
    {
        name: "Mera Mann Kehne Laga",
        cover: "https://i1.sndcdn.com/artworks-000055885590-j9h3t8-t500x500.jpg",
        artist: "Falak Shabir",
        audio: "https://pagalnew.com/download320/6002",
        color: ["#B51426", "#B58672"],

        liked: false,
    },
    {
        name: "Tere Bin",
        cover: "https://i1.sndcdn.com/artworks-000022433251-hnsmbo-t500x500.jpg",
        artist: "Yasir Jaswal",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1640871899/Songs/02_Tere_Bin_Nahi_Laage_Uzair_Jaswal_Ek_Paheli_Leela_190kbps_kdcteb.mp3",
        color: ["#6B6B6B", "#83777B"],

        liked: false,
    },
    {
        name: "Feelings",
        cover:
            "https://i1.sndcdn.com/artworks-3A1GnE9Ymzf2JpMG-TZNCSA-t500x500.jpg",
        artist: "Vatsala",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1640871649/Songs/Feelings_-_Vatsala_Female_Version_lbcbur.mp3",
        color: ["#362A10", "#DDB182"],

        liked: false,
    },
    {
        name: "Mere Samne Wali Khidki Mein",
        cover: "https://i1.sndcdn.com/artworks-000562270875-fbz48q-t500x500.jpg",
        artist: "Ashish Patil",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1640872393/Songs/MP3DOWNLOAD.TO_Mere_Samne_Wali_Khidki_Mein_-_Ashish_Patil_-_Padosan_-_Kishore_Kumar_-_Cover_-_2018_HD-320k_nwrg3l.mp3",
        color: ["#213430", "#D3AB77"],

        liked: false,
    },
    {
        name: "Ve Maahi",
        cover: "https://pagalnew.com/coverimages/Ve-Maahi-Kesari-500-500.jpg",
        artist: "Asees Kaur | Arijit Singh",
        audio: "https://pagalnew.com/download320/2319",
        color: ["#ECEA47", "#FC7B27"],

        liked: false,
    },
    {
        name: "Teri Mitti",
        cover: "https://pagalnew.com/coverimages/Ve-Maahi-Kesari-500-500.jpg",
        artist: "B Praak",
        audio: "https://pagalnew.com/download320/2320",
        color: ["#ECEA47", "#FC7B27"],

        liked: false,
    },
    {
        name: "Sakhiyaan",
        cover:
            "https://a10.gaanacdn.com/images/albums/68/2249968/crop_480x480_1540031665_2249968.jpg",
        artist: "Maninder Buttar",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1640872876/Songs/Sakhiyaan_-_Maninder_Buttar_l05eby.mp3",
        color: ["#F0F1AB", "#DFC4A7"],

        liked: false,
    },
    {
        name: "Pehla Nasha",
        cover:
            "https://direct.rhapsody.com/imageserver/images/alb.199765156/600x600.jpg",
        artist: "Sadhana Sargam | Udit Narayan",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1640873738/Songs/Pehla_Nasha_slowed_qrgfjd.mp3",
        color: ["#6F3D00", "#911D1E"],

        liked: false,
    },
    {
        name: "Main Rang Sharboton Ka",
        cover: "https://i1.sndcdn.com/artworks-000177278203-qh76iz-t500x500.jpg",
        artist: "Atif Aslam, Chinmayi Sripada",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1640873297/Songs/Main_Rang_Sharbaton_Ka_Arijit_Singh_Slowed_And_Reverb_t3hpkm.mp3",
        color: ["#E1E680", "#89EEE0"],

        liked: false,
    },
    {
        name: "Jaan Ban Gaye",
        cover: "https://i.scdn.co/image/ab67616d0000b273bb448da1ca2deeadd6813bf0",
        artist: "Mithoon, Vishal Mishra, Asees Kaur",
        audio: "https://pagalnew.com/download320/1910",
        color: ["#EDD9A7", "#C17158"],

        liked: false,
    },
    {
        name: "Haye Mera Dil",
        cover: "https://i.scdn.co/image/ab67616d00001e02b9bea7fcfcc928cb79c872c4",
        artist: "Alfaaz | Yo Yo Honey Singh",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1641060043/Songs/Alfaaz_Haye_Mera_Dil_ft_Yo_Yo_Honey_Singh_whu5jf.mp3",
        color: ["#E9001D", "#251518"],

        liked: false,
    },
    {
        name: "Breakup Party Yo Yo",
        cover:
            "https://a10.gaanacdn.com/images/albums/57/2021357/crop_480x480_2021357.jpg",
        artist: "Yo Yo Honey Singh",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1641059874/Songs/Breakup_Party_ft_Leo_Yo_Yo_Honey_Singh_m5pdai.mp3",
        color: ["#8D470B", "#F02504"],

        liked: false,
    },
    {
        name: "Blue Eyes",
        cover: "https://i1.sndcdn.com/artworks-000062209442-u4qy0y-t500x500.jpg",
        artist: "Singer | Yo Yo Honey Singh",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1641060377/Songs/Blue_Eyes_-_Yo_Yo_Honey_Singh_PagalWorld.com_ryfuh0.mp3",
        color: ["#19444D", "#B69A8E"],

        liked: false,
    },
    {
        name: "Channa Mereya",
        cover: "https://i1.sndcdn.com/artworks-000191733455-q82j8w-t500x500.jpg",
        artist: "Singer - Arijit Singh",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1641224733/Songs/07_Channa_Mereya_-_Arijit_Singh_190Kbps_uezdi1.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Ik Lamha",
        cover: "https://c.saavncdn.com/905/Ik-Lamha-Hindi-2021-20211224024607-500x500.jpg",
        artist: "Azaan Salim Khan",
        audio:
            "https://dl.sndup.net/rrn8/Aaram%20Aata%20Hai%20Deedar%20Se%20Tere%20Lyrics.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Aatma Rama",
        cover: "https://is3-ssl.mzstatic.com/image/thumb/Music116/v4/41/ef/0e/41ef0e30-1ab4-34e3-8695-ef330ed13bf5/artwork.jpg/1200x1200bf-60.jpg",
        artist: "Brodha V",
        audio:
            "https://dl.sndup.net/gs28/Brodha%20V%20-%20Aathma%20Raama%20[Music%20Video].mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Kana Yaari",
        cover: "https://i.scdn.co/image/ab67616d0000b2730407e4b278400d17970a38af",
        artist: "Eva B | Kaifi Khalil",
        audio:
            "https://dl.sndup.net/vzhp/Coke%20Studio%20%20Season%2014%20%20Kana%20Yaari.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Dil nu",
        cover: "https://www.pagalwoird.com/wp-content/uploads/2022/10/maxresdefault-22__01.jpg",
        artist: "AP Dhillon",
        audio:
            "https://dl.sndup.net/vj32/Dil%20Nu(Lyrics)%20-%20AP%20Dhillon.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Ek Radha Ek Meera",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuonTw--zs3-_4rPnbeEhOUkK9VnAHgjD1Cg&usqp=CAU",
        artist: "Swati Mehul",
        audio:
            "https://dl.sndup.net/qypx/Ek%20Radha%20Ek%20Meera.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Enchanted",
        cover: "https://i.scdn.co/image/ab67616d0000b273e11a75a2f2ff39cec788a015",
        artist: "Taylor Swift",
        audio:
            "https://dl.sndup.net/crym/Enchanted.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Beete Lamhe (Slowed)",
        cover: "https://i1.sndcdn.com/artworks-RPz3cYg32Kjns8NQ-Z9BPHA-t500x500.jpg",
        artist: "KK",
        audio:
            "https://dl.sndup.net/g67d/KK%20-%20Beetein%20Lamhein.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Labon Ko (Slowed)",
        cover: "https://i1.sndcdn.com/artworks-RPz3cYg32Kjns8NQ-Z9BPHA-t500x500.jpg",
        artist: "KK",
        audio:
            "https://dl.sndup.net/mj8w/Labon%20Ko.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "O Sanam",
        cover: "https://images.genius.com/d57855da6a6000e9683cda0a12089ace.999x999x1.jpg",
        artist: "Lucky Ali",
        audio:
            "https://dl.sndup.net/zffm/O%20Sanam%20Lucky%20Ali.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Tu hi meri shab hai",
        cover: "https://i0.wp.com/99lyricstore.com/wp-content/uploads/2021/04/Tu2Bhi2Bmeri2Bshab2Bhai2BHindi2BLove2BSong2BLyrics252C2BSung2BBy2BK.K.jpg",
        artist: "KK",
        audio:
            "https://dl.sndup.net/vk6t/Tu%20Hi%20Meri%20Shab%20Hai.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Ram Siya Ram (Reverbed)",
        cover: "https://i1.sndcdn.com/artworks-Lgdaig9D73SzDpv3-RvGJJQ-t500x500.jpg",
        artist: "Paras Sharma",
        audio:
            "https://dl.sndup.net/gfzv/Ram%20Siya%20Ram.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Ranjha Ranjha",
        cover: "https://c.saavncdn.com/249/Raavan-Hindi-2010-20221211095418-500x500.jpg",
        artist: "Rekha Bhardwaj",
        audio:
            "https://dl.sndup.net/pdbm/RANJHA%20RANJHA.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Shikdum",
        cover: "https://a10.gaanacdn.com/gn_img/albums/0wrb4qNKLg/wrb4L0ybLg/size_l.jpg",
        artist: "Shreya Ghoshal | Shaan",
        audio:
            "https://dl.sndup.net/xkjz/Shikdum.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Feel me",
        cover: "https://pbs.twimg.com/media/ERRlPWqUEAIycti.jpg",
        artist: "Selena Gomez",
        audio:
            "https://dl.sndup.net/nm68/Feel%20Me.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Fetish",
        cover: "https://images.genius.com/6046e607826f1c36f2d089a1ec1b121f.1000x1000x1.png",
        artist: "Selena Gomez",
        audio:
            "https://dl.sndup.net/2f7p/Fetish.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Kinda Crazy",
        cover: "https://images.genius.com/de9ff0f6370f2171757a9cdd2aa484bf.680x680x1.jpg",
        artist: "Selena Gomez",
        audio:
            "https://dl.sndup.net/h4nx/Kinda%20Crazy.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Souvenir",
        cover: "https://images.genius.com/de9ff0f6370f2171757a9cdd2aa484bf.680x680x1.jpg",
        artist: "Selena Gomez",
        audio:
            "https://dl.sndup.net/g8m6/Souvenir.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Sober",
        cover: "https://i1.sndcdn.com/artworks-000133092739-p5rarl-t500x500.jpg",
        artist: "Selena Gomez",
        audio:
            "https://dl.sndup.net/dgkd/Sober.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Moth to A Flame",
        cover: "https://i.redd.it/op2ybwfjhnv71.jpg",
        artist: "The Weeknd",
        audio:
            "https://dl.sndup.net/r47d/Moth%20To%20A%20Flame.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Nothing Compares | Final Lullaby (Slowed)",
        cover: "https://i.redd.it/op2ybwfjhnv71.jpg",
        artist: "The Weeknd",
        audio:
            "https://dl.sndup.net/ty8h/Nothing%20Compares%20%20Final%20Lullaby.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Creepin",
        cover: "https://i.scdn.co/image/ab67616d0000b273fac968e3a62f56e030b3931d",
        artist: "The Weeknd | Diddy",
        audio:
            "https://dl.sndup.net/fr4f/Creepin'.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Starboy",
        cover: "https://i.seadn.io/gae/fy0EYmpeGXjFLu-eZ0uP8Zcl9_II0mxb9SYuRP7RZ4O06dRn3udf83dAxuySOtnfL_68zheKzsG-XT0l5e8R9dJ93b0Kw_MEzKO-ow?auto=format&w=1000",
        artist: "The Weeknd | Daft Punk",
        audio:
            "https://dl.sndup.net/wcyt/Starboy.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Escape from LA",
        cover: "https://images.genius.com/4455a314edfff1a63c30f03d9d135c64.1000x1000x1.jpg",
        artist: "The Weeknd",
        audio:
            "https://dl.sndup.net/hyh4/The%20Weeknd%20-%20Escape%20From%20LA%20(Audio).mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "I Feel It Coming",
        cover: "https://f4.bcbits.com/img/a3646466332_65",
        artist: "The Weeknd",
        audio:
            "https://dl.sndup.net/ms9z/I%20Feel%20It%20Coming.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "In The Night",
        cover: "https://i.scdn.co/image/ab67616d0000b273aac98daa18e4edf54d7a0a70",
        artist: "The Weeknd",
        audio:
            "https://dl.sndup.net/mzmm/In%20The%20Night.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Reminder",
        cover: "https://m.media-amazon.com/images/M/MV5BYTJlOTRhZTItOTg5Zi00Mzc3LWE2M2ItYTRiOWE5YzQ5MzM4XkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg",
        artist: "The Weeknd",
        audio:
            "https://dl.sndup.net/fh77/Reminder.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Secrets",
        cover: "https://i.redd.it/hf5roqmk1pvx.png",
        artist: "The Weeknd | Daft Punk",
        audio:
            "https://dl.sndup.net/k7kw/Secrets.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Try Me",
        cover: "https://i1.sndcdn.com/artworks-0UHHMfsqPdq358Xx-40y7QA-t500x500.jpg",
        artist: "The Weeknd",
        audio:
            "https://dl.sndup.net/9b49/Try%20Me.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Wicked Games",
        cover: "https://i.scdn.co/image/ab67616d0000b273274b406a7e18acebcf743079",
        artist: "The Weeknd",
        audio:
            "https://dl.sndup.net/svw9/Wicked%20Games.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "The Zone",
        cover: "https://live.staticflickr.com/6191/6066984877_99d28aa453_b.jpg",
        artist: "The Weeknd | Drake",
        audio:
            "https://dl.sndup.net/mf38/The%20Zone.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Too Late | Hardest To Love",
        cover: "https://i.redd.it/t5phsjz13wg31.jpg",
        artist: "The Weeknd",
        audio:
            "https://dl.sndup.net/p5v7/Too%20late%20%20Hardest%20To%20Love.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Love Me Harder",
        cover: "https://i.scdn.co/image/ab67616d0000b273deec12a28d1e336c5052e9aa",
        artist: "Ariana Grande & The Weeknd",
        audio:
            "https://dl.sndup.net/mdqz/Love%20Me%20Harder.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Die For You",
        cover: "https://images.genius.com/5964711b238e9f03cfe27921c92f28aa.736x736x1.png",
        artist: "The Weeknd",
        audio:
            "https://dl.sndup.net/kp7m/Die%20For%20You.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Nothing without you",
        cover: "https://i1.sndcdn.com/artworks-000504769563-ectoyh-t500x500.jpg",
        artist: "The Weeknd",
        audio:
            "https://dl.sndup.net/jmtz/Nothing%20Without%20You.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Often",
        cover: "https://i.pinimg.com/originals/03/8b/a9/038ba90656d982900046f7e518554f96.jpg",
        artist: "The Weeknd",
        audio:
            "https://dl.sndup.net/6w2y/Often.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Alone Again",
        cover: "https://preview.redd.it/m2gtz1fut2161.png?auto=webp&s=7c6b4c6f312be28f555dd4d3edf96870940e78fe",
        artist: "The Weeknd",
        audio:
            "https://dl.sndup.net/dbvg/Alone%20Again.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Ordinary Life",
        cover: "https://i.redd.it/kxeqgg6dvua01.jpg",
        artist: "The Weeknd",
        audio:
            "https://dl.sndup.net/dv9g/Ordinary%20Life.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Double Fantasy",
        cover: "https://static.stereogum.com/uploads/2023/04/342225457_165735042750477_5599342028108595311_n-1682020525.jpg",
        artist: "The Weeknd | Future",
        audio:
            "https://dl.sndup.net/b7f2/Double%20Fantasy.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Twenty Eight",
        cover: "https://i1.sndcdn.com/artworks-000033072590-kefukl-t500x500.jpg",
        artist: "The Weeknd",
        audio:
            "https://dl.sndup.net/d2jz/Twenty%20Eight.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Some Way",
        cover: "https://i1.sndcdn.com/artworks-000533692155-o5q08r-t500x500.jpg",
        artist: "NAV ft. The Weeknd",
        audio:
            "https://dl.sndup.net/k8tw/Some%20Way.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Kiss Land",
        cover: "https://f4.bcbits.com/img/a1384361635_10.jpg",
        artist: "The Weeknd",
        audio:
            "https://dl.sndup.net/bckp/Kiss%20Land.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Low Life",
        cover: "https://f4.bcbits.com/img/a2054744171_65",
        artist: "Future ft. The Weeknd",
        audio:
            "https://dl.sndup.net/qtbv/Low%20Life.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Lost In Fire",
        cover: "https://karencivil.com/wp-content/uploads/2019/01/IMG_A2C8AFCA632F-1.jpeg",
        artist: "Gesaffelstein & The Weeknd",
        audio:
            "https://dl.sndup.net/q3fn/Lost%20in%20the%20Fire.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Faith",
        cover: "https://i.redd.it/4zyp9m9fab451.png",
        artist: "The Weeknd",
        audio:
            "https://dl.sndup.net/cs4q/Faith.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    }
]

export default playlist;