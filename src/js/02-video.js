import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
    const player = new Player(iframe);


    let timeLocal = localStorage.getItem('videoplayer-current-time');
    timeLocal = timeLocal ? timeLocal : 0
   
        player.setCurrentTime(timeLocal).then(function(seconds) {
            // seconds = the actual time that the player seeked to
        }).catch(function(error) {
            switch (error.name) {
                case 'RangeError':
                    // the time was less than 0 or greater than the video’s duration
                   break;
        
                default:
                    // some other error occurred
                    break;
            }
        });

    

    player.on('timeupdate', throttle(data => saveTimePlayer(data), 1000)
    ) ;

  function saveTimePlayer(data) {
    console.log(data)
    localStorage.setItem('videoplayer-current-time', data['seconds'] )
  }