let song = document.querySelector(".song-name");
let song_details = document.querySelector(".song-detail")
let close_btn = document.querySelector(".close-btn");
song.addEventListener("click", () => {
    song_details.classList.toggle("hide");
});
close_btn.addEventListener("click",()=>{
    song_details.classList.toggle("hide");
})