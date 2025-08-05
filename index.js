const songs = [
    {
        title: "Ed Sheeran – Shape of You",
        url: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
        thumbnail: "https://img.youtube.com/vi/JGwWNGJdvx8/hqdefault.jpg"
    },
    {
        title: "Luis Fonsi – Despacito ft. Daddy Yankee",
        url: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
        thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/hqdefault.jpg"
    },

    {
        title: "Ali Sethi – Pasoori",
        url: "https://www.youtube.com/watch?v=5Eqb_-j3FDA",
        thumbnail: "https://img.youtube.com/vi/5Eqb_-j3FDA/hqdefault.jpg"
    },
    {
        title: "Becky G – Shower",
        url: "https://www.youtube.com/watch?v=50-_oTkmF5I",
        thumbnail: "https://img.youtube.com/vi/50-_oTkmF5I/hqdefault.jpg"
    },
    {
        title: "Maroon 5 – Sugar",
        url: "https://www.youtube.com/watch?v=09R8_2nJtjg",
        thumbnail: "https://img.youtube.com/vi/09R8_2nJtjg/hqdefault.jpg"
    },
    {
        title: "The Weeknd – Blinding Lights",
        url: "https://www.youtube.com/watch?v=4NRXx6U8ABQ",
        thumbnail: "https://img.youtube.com/vi/4NRXx6U8ABQ/hqdefault.jpg"
    },
    {
        title: "Dua Lipa – Levitating",
        url: "https://www.youtube.com/watch?v=TUVcZfQe-Kw",
        thumbnail: "https://img.youtube.com/vi/TUVcZfQe-Kw/hqdefault.jpg"
    },
    {
        title: "Taylor Swift – Shake It Off",
        url: "https://www.youtube.com/watch?v=nfWlot6h_JM",
        thumbnail: "https://img.youtube.com/vi/nfWlot6h_JM/hqdefault.jpg"
    },
    {
        title: "Adele – Hello",
        url: "https://www.youtube.com/watch?v=YQHsXMglC9A",
        thumbnail: "https://img.youtube.com/vi/YQHsXMglC9A/hqdefault.jpg"
    },
    {
        title: "Charlie Puth – Attention",
        url: "https://www.youtube.com/watch?v=nfs8NYg7yQM",
        thumbnail: "https://img.youtube.com/vi/nfs8NYg7yQM/hqdefault.jpg"
    },
    {
        title: "Billie Eilish – bad guy",
        url: "https://www.youtube.com/watch?v=DyDfgMOUjCI",
        thumbnail: "https://img.youtube.com/vi/DyDfgMOUjCI/hqdefault.jpg"
    },
    {
        title: "Imagine Dragons – Believer",
        url: "https://www.youtube.com/watch?v=7wtfhZwyrcc",
        thumbnail: "https://img.youtube.com/vi/7wtfhZwyrcc/hqdefault.jpg"
    },
    {
        title: "Selena Gomez – Wolves",
        url: "https://www.youtube.com/watch?v=cH4E_t3m3xM",
        thumbnail: "https://img.youtube.com/vi/cH4E_t3m3xM/hqdefault.jpg"
    },
    {
        title: "Zayn – Dusk Till Dawn ft. Sia",
        url: "https://www.youtube.com/watch?v=tt2k8PGm-TI",
        thumbnail: "https://img.youtube.com/vi/tt2k8PGm-TI/hqdefault.jpg"
    },
    {
        title: "Shawn Mendes – Treat You Better",
        url: "https://www.youtube.com/watch?v=lY2yjAdbvdQ",
        thumbnail: "https://img.youtube.com/vi/lY2yjAdbvdQ/hqdefault.jpg"
    },
    {
        title: "Coldplay – Hymn For The Weekend",
        url: "https://www.youtube.com/watch?v=YykjpeuMNEk",
        thumbnail: "https://img.youtube.com/vi/YykjpeuMNEk/hqdefault.jpg"
    },
    {
        title: "Major Lazer & DJ Snake – Lean On",
        url: "https://www.youtube.com/watch?v=YqeW9_5kURI",
        thumbnail: "https://img.youtube.com/vi/YqeW9_5kURI/hqdefault.jpg"
    }
];
const video = document.getElementById("video")
let navbarval = 0
songs.forEach((element, index) => {
    const propervideo = document.createElement("div")
    propervideo.className = "propervideo"
    const mainimgd = document.createElement("img")
    mainimgd.className = "mainimgd"
    mainimgd.src = element.thumbnail
    const videoname = document.createElement("p")
    videoname.className = "songname"
    videoname.textContent = element.title
    const Channelname = document.createElement("p")
    Channelname.className = "songname"
    Channelname.textContent = "T-Series"
    video.appendChild(propervideo)

    propervideo.append(mainimgd)
    propervideo.appendChild(videoname)
    propervideo.appendChild(Channelname)
    propervideo.addEventListener("click", () => {
        window.location.href = "Player.html";

    })


});
const navbtn = document.getElementById("navbtn");
const navasid = document.querySelector(".navasid");
const navli = document.getElementsByClassName("navli");

let row = true;
let open = true

navbtn.addEventListener("click", () => {
    const screenWidth = window.innerWidth;

    console.log("click ok");


    if (screenWidth <= 560) {
        console.log("560" + "screensize");

        if (open) {
            navasid.style.display = "flex";
            console.log(open);
            open = false


        }
        else {
            navasid.style.display = "none";
            console.log(open);
            open = true

        }

    }
    else {
        if (row) {
            // Expand nav
            navasid.style.width = "135px";

            Array.from(navli).forEach(navlist => {
                navlist.classList.remove("columnnavli");
                navlist.classList.add("rownavli");
            });

            row = false;
        } else {
            // Collapse nav
            navasid.style.width = "100px";

            Array.from(navli).forEach(navlist => {
                navlist.classList.remove("rownavli");
                navlist.classList.add("columnnavli");
            });

            row = true;
        }
    }


});
