let songs = [];
var likedvideo =[];

const firstTime = localStorage.getItem("firstTime") || null;
console.log(firstTime);


if (firstTime !== null) {
    console.log("Not First Time", firstTime);
    likedvideo = JSON.parse(localStorage.getItem("liked"));
    
} else {
    localStorage.setItem("liked", JSON.stringify(likedvideo));
    localStorage.setItem("firstTime", "1");

    console.log("First Time", likedvideo);
}


fetch('songs.json')
    .then(res => res.json())
    .then(data => {
        songs = data
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
            const btndiv=document.createElement("div")
            btndiv.className="btndiv"
            const likebtn=document.createElement("button")
            likebtn.id="likebtn"
            likebtn.className="btns"
            likebtn.textContent="Liked"
            const dlikebtn=document.createElement("button")
            dlikebtn.id="dlikebtn"
            dlikebtn.className="btns"
            dlikebtn.textContent="Disliked"
            
            video.appendChild(propervideo)

            propervideo.append(mainimgd)

            propervideo.appendChild(videoname)
            propervideo.appendChild(Channelname)
            btndiv.appendChild(likebtn)
            btndiv.appendChild(dlikebtn)
            propervideo.appendChild(btndiv)
            mainimgd.addEventListener("click", () => {
                const current = element
                localStorage.setItem("playingsong", JSON.stringify(element));
                window.location.href = "Player.html";


            })

likebtn.addEventListener('click', (e) => {
    e.stopPropagation(); 

    const exist = likedvideo.some(video => video.url === element.url);

    if (exist) {
        alert("This Video is already added in Liked Videos");
    } else {
        likedvideo.push(element);   
        localStorage.setItem("liked", JSON.stringify(likedvideo));
        alert("This Video has been added to Liked Videos");
        console.log(likedvideo);
    }
});

dlikebtn.addEventListener('click', (e) => {
    e.stopPropagation();

    const exist = likedvideo.some(video => video.url === element.url);

    if (exist) {
        likedvideo = likedvideo.filter(obj => obj.url !== element.url);
        localStorage.setItem("liked", JSON.stringify(likedvideo));
        alert("Removed From Liked Playlist");
        console.log(likedvideo);
    } else {
        alert("This Video is not in your Liked Playlist");
    }
});


        });


    }).catch(err => {
        alert("error" + err)
    }
    )
let videosection = document.getElementById("video-section")
const navbtn = document.getElementById("navbtn");
const navasid = document.querySelector(".navasid");
const navasidi = document.getElementById("navasid")
const navli = document.getElementsByClassName("navli");

const navlitext = document.getElementsByClassName("navlitext")

let open = false
let colum = true
navbtn.addEventListener("click", () => {

    const screenWidth = window.innerWidth;

    if (screenWidth <= 600) {
        navasidi.style.display = open ? "none" : "flex";
        navasidi.style.width = open ? "" : "20vw";
        open = !open;
    } else {
        Array.from(navli).forEach(el => {

            el.style.flexDirection = colum ? "row" : "column";
            console.log(colum + "1");

        });
        if (!colum) {

        }
        else {
            Array.from(navli).forEach(ele => {
                ele.style.alignItems = "center";
                ele.style.justifyContent = "start";
                Array.from(navlitext).forEach(t => {
                    t.style.margin = "0";

                    t.style.display = "flex";
                    t.style.alignItems = "center";
                    t.style.marginLeft = "4px";
                });
            });
        }

        colum = !colum;
    }


});
function likedvideopage() {
    window.location.href = "like.html"
}
