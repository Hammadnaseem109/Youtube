let songs = [];
let firstTime = localStorage.getItem("firstTime") || null;
var likedvideo;
if (firstTime !== null) {
  console.log("not first firstTime");
   likedvideo = JSON.parse(localStorage.getItem("liked"))
} else {
  likedvideo=[]
  localStorage.setItem("liked", JSON.stringify(likedvideo));
  localStorage.setItem("firstTime", "1");
  console.log("firstTime");
}



var playingvideo = document.getElementById("playingvideo")
const current = JSON.parse(localStorage.getItem("playingsong"));
playingvideo.src = current.url
var playingelements=current
const likebtn = document.getElementById("likebtn")
const dislikebtn = document.getElementById("dislikebtn")


fetch("songs.json")
  .then(response => response.json())
  .then(data => {
    songs = data;

    const remainvideos = document.getElementById("remainvideos");

    songs.forEach(element => {
      const lvideo = document.createElement("div");
      lvideo.className = "lvideo";

      const ltvideo = document.createElement("img");
      ltvideo.className = "lvthumnail";
      ltvideo.src = element.thumbnail;

      const nat = document.createElement("div");
      nat.className = "nat";

      const songsname = document.createElement("p");
      songsname.className = "songname";
      songsname.textContent = element.title;

      const songstitle = document.createElement("p");
      songstitle.className = "songname";
      songstitle.textContent = "T-Series";

      lvideo.appendChild(ltvideo);
      lvideo.appendChild(nat);
      nat.appendChild(songsname);
      nat.appendChild(songstitle);

      remainvideos.appendChild(lvideo);
      lvideo.addEventListener('click', () => {
        playingvideo.src = element.url
        console.log(element.url);
        playingelements=element



      })
    });
  })
  .catch(error => {
    alert("Please check the Internet connection or file path");
    console.error(error);
  });
function likedvideosfn(){
  
  const exist=likedvideo.some(video=>video.url===playingelements.url)
  
  
  console.log(exist);
  
  if(exist){
      console.log("yes exist");
      console.log("this array of like video" +likedvideo);
      

    alert("this Video already add in Liked Videos")
  }
  else{
          console.log("not exist");

    likedvideo.push(playingelements)
    console.log(likedvideo);
    
        alert("this Video added in Liked Videos")
        localStorage.setItem("liked",JSON.stringify(likedvideo))

  }
}
function dislikedfn(){
  const exist=likedvideo.some(video=>video.url===playingelements.url)
  if(exist){
    likedvideo=likedvideo.filter(obj=>obj.url !==playingelements.url)
    alert("Removed From Liked Playlist")
    localStorage.setItem(JSON.stringify(likedvideo))

  }
  else{
    alert("This Video is not Added In Your Liked Playlist")
  }
}
  const navbtn = document.getElementById("navbtn");
const navasid = document.querySelector(".navasid");
const navli = document.getElementsByClassName("navli");

let row = true;
let open = true

navbtn.addEventListener("click", () => {
    const screenWidth = window.innerWidth;




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

    


});
function likedvideopage(){
    window.location.href="like.html"
}