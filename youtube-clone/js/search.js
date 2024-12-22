function searchVideo(event) {
    const search = event.target.value;
    const videos = document.querySelectorAll(".video-card");


    for (const video of videos) {
        const videoinfo = {
            title: video.getElementsByTagName("h3")[0].innerText.toLowerCase(),
            channel: video.getElementsByTagName("p")[0].innerText.toLowerCase(),
            category: video.getElementsByTagName("p")[1].innerText.toLowerCase(),
        };
        

        video.style.display = "revert";
        //Se o termo (search) não bater com o video (VideoInfo) ele SOME com o video
        if (!matches(videoinfo, search)) {
            video.style.display = "none";
        }
    }
}
function matches(videoinfo, searchterm) {
    return (
        videoinfo.title.includes(searchterm) ||
        videoinfo.channel.includes(searchterm) ||
        videoinfo.category.includes(searchterm)
    )
}