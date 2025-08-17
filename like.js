
let likedVideos=[]

 likedVideos = JSON.parse(localStorage.getItem("liked")) || null;
console.log("thos liked video list"+likedVideos);
let show=document.getElementById("videoGrid")
if(likedVideos===null){
    alert("There is not Video WHich is liked")


}
else
    {
        likedVideos.forEach((element,index) => {
        let maindiv=document.createElement("div")
        maindiv.className="maindiv"
        let thubimg=document.createElement("img")
        thubimg.className="thubimg"
        thubimg.src=element.thumbnail
        let dlikedbtn=document.createElement("button")
        dlikedbtn.className="dlikebtn"
        dlikedbtn.textContent="Dislike"
        maindiv.appendChild(thubimg)
        maindiv.appendChild(dlikedbtn)
        show.appendChild(maindiv)
        thubimg.addEventListener('click',()=>{
              const current = element
                localStorage.setItem("playingsong", JSON.stringify(element));
                window.location.href = "Player.html";


        })
        dlikedbtn.addEventListener('click',()=>{
    likedVideos = likedVideos.filter(v => v.thumbnail !== element.thumbnail);
            maindiv.remove();
            localStorage.setItem("liked",JSON.stringify(likedVideos))

            console.log(likedVideos);
            
        })


        });
        

    

}



