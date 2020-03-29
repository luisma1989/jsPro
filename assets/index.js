import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video')
const button = document.getElementById('playButton')
const player = new MediaPlayer({ 
  el: video, 
  plugins: [
    new AutoPlay()
  ] 
})

button.onclick = () => {
  if (video.paused) {
    return player.play()
  }
  return player.pause()
}

