let songs = []
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
            video.appendChild(propervideo)

            propervideo.append(mainimgd)
            propervideo.appendChild(videoname)
            propervideo.appendChild(Channelname)
            propervideo.addEventListener("click", () => {
                const current = element
                localStorage.setItem("playingsong", JSON.stringify(element));
                window.location.href = "Player.html";


            })

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