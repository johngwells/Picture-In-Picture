const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch(error) {
    console.log('Whoops', error);
  }
}

button.addEventListener('click', async () => {
  // Disable Button when clicked
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false; // Only happens if the video is a success
});

// On Load
selectMediaStream();