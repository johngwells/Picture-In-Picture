const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.onplay();
    }
  } catch(error) {
    console.log('Whoops', error);
  }
}

// On Load
selectMediaStream();