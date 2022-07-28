const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select media stream, pass to vdieo element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // catch error here
    }
}

button.addEventListener('click', async() => {
    // disbale button
    button.disabled = true;
    // start pip
    await videoElement.requestPictureInPicture();
    // rest button
    button.disabled = false;
});

// on load
selectMediaStream();