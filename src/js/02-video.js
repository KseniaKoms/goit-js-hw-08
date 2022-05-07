import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

getLocalstorageValue();

player.on('timeupdate', throttle(onTimeUpdate, 1000));
player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

function onTimeUpdate(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data)); 
};

function getLocalstorageValue() {
    const value = localStorage.getItem("videoplayer-current-time");
    const itemValue = JSON.parse(value);

    if (itemValue) {
        player.setCurrentTime(itemValue.seconds)
     .then(function (seconds) {
            console.log(seconds)
         })
            .catch(function (error) {
    switch (error.name) {
        case 'RangeError': 
            console.log('The time was less than 0 or greater than the video’s duration');    
            break;
        default:
            console.log('Some other error occurred')
            break;
    }});
    }; 
}


