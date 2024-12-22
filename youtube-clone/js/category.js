const filterButtons = document.querySelectorAll(".category-btn");

filterButtons.forEach(function (button) {
    button.addEventListener("click", showVideos);
});

function showVideos(event) {
    const button = event.target;
    const category = button.getAttribute("data-category").toLowerCase();
    const videos = document.querySelectorAll(".video-card");
    const { videosToHide, videosToShow } = filterVideos(category, videos)

    activeButton(button);
    changeVideosDisplay(videosToShow, "block");
    changeVideosDisplay(videosToHide, "none");
}

function filterVideos(category, videos) {
    let videosToShow = [];
    let videosToHide = [];

    for (const video of videos) {
        const videoCategory = video.getElementsByTagName("p")[1].innerHTML.toLowerCase();
        if (category === "all" || videoCategory === category) {
            videosToShow.push(video)
        } else {
            videosToHide.push(video);
        }

    }
    return { videosToShow, videosToHide };

}


function changeVideosDisplay(videos, displayValue) {
    for (const video of videos) {
        video.style.display = displayValue;
    }
}
function activeButton(button) {
    filterButtons.forEach(function (b) {
        b.classList.remove("active");
    });

    button.classList.add("active")
}