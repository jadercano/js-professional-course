import MediaPlayer from "@jader.cano/platzimediaplayer";
import AutoPlay from "@jader.cano/platzimediaplayer/lib/plugins/AutoPlay";
import AutoPause from "@jader.cano/platzimediaplayer/lib/plugins/AutoPause";
import AdsPlugin from "@jader.cano/platzimediaplayer/lib/plugins/Ads/AdsPlugin";

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [ new AutoPlay(), new AutoPause(), new AdsPlugin() ] });

const btnPlay: HTMLElement = document.querySelector('#btnPlay');
btnPlay.onclick = () => player.togglePlay();

const btnMute: HTMLElement = document.querySelector('#btnMute');
btnMute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../sw.js').catch(error => {
    console.log(error.message);
  });
}