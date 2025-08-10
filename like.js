const likedVideos = JSON.parse(localStorage.getItem("liked")) || null;
console.log("thos liked video list"+likedVideos);

if (!likedVideos || likedVideos.length === 0) {
    alert("You did not like any video");
} else {
    const videoGrid = document.getElementById("videoGrid");

    likedVideos.forEach(video => {
        const card = document.createElement("div");
        card.classList.add("video-card");

        card.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}">
            <h3>${video.title}</h3>
        `;

        videoGrid.appendChild(card);
    });
}
