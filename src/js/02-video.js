import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
console.log(Player);

const iframe = document.querySelector('iframe');
const player = new Player('vimeo-player');
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

// ==== saving time ====

onPlay = data => localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
player.on('timeupdate', throttle(onPlay, 1000));

// player.on('timeupdate', throttle(data => {
//     localStorage.setItem('videoplayer-current-time', data.seconds);
// }));

// ==== PLAY ====
player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY) || 0);
