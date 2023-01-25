const videoElement = document.getElementById("video")
const button = document.getElementById("button")

// promot to select media stream pass to video element

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadeddata = () => {
            videoElement.play()
        }
    } catch (error) {

    }

}

button.addEventListener("click", async () => {
    // disable the button
    button.disabled = true
    // start pip
    await videoElement.requestPictureInPicture()
    // 
    button.disabled = false
})

selectMediaStream()