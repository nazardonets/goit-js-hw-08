import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let playbackCurrentSecond;

player.on(
   'timeupdate',
   throttle(data => {
      playbackCurrentSecond = parseInt(data.seconds);
      localStorage.setItem(
         'videoplayer-current-time',
         `${playbackCurrentSecond}`
      );
   }, 1000)
);

player.on('loaded', () => {
   player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
});
