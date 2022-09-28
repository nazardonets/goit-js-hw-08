import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let playbackCurrentSecond;

player.on('timeupdate', data => {
   playbackCurrentSecond = parseInt(data.seconds);
   localStorage.setItem('playbackCurrentSecond', `${playbackCurrentSecond}`);
});

player.on('loaded', () => {
   player.setCurrentTime(localStorage.getItem('playbackCurrentSecond'));
});
