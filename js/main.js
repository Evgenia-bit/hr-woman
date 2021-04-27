
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const mediaQuery = window.matchMedia('(min-width: ' + screenWidth + 'px)')
const mediaQuery2 = window.matchMedia('(max-width: 1023px)')
const mediaQuery3 = window.matchMedia('(max-width: 1024px)')
const whatToExpect = document.querySelector('.what-to-expect')
if (mediaQuery.matches) {
    
    document.querySelector('.wrapper').style.width = screenWidth + 'px';

} else {
    document.querySelector('.wrapper').style.width = '100vw'
}

if (mediaQuery2.matches) {
    document.querySelector('.what-to-expect').style.height = 'auto !important';
} else {
    document.querySelector('.what-to-expect').style.height = document.querySelector('.wrapper').offsetWidth / 2 + 'px';
}
if (mediaQuery3.matches) {
    document.querySelector('.what-to-expect').style.height = '750px';
}

window.addEventListener('resize', () => {

    if (mediaQuery.matches) {
        document.querySelector('.wrapper').style.width = screenWidth + 'px';
    } else {
        document.querySelector('.wrapper').style.width = '100vw';
    }
    if (mediaQuery2.matches) {
        document.querySelector('.what-to-expect').style.height = 'auto';
    } else {
        whatToExpect.style.height = document.querySelector('.wrapper').offsetWidth / 2 + 'px';
    }
    if (mediaQuery3.matches) {
        document.querySelector('.what-to-expect').style.height = '750px';
    }
})

/*кнопки запуска видео*/
const videoButtons = document.querySelectorAll(".video-play");
const videos = document.querySelectorAll("video");
videoButtons.forEach((item, i) => {
    item.addEventListener("click", () => {

        item.style.display = 'none';
        videos[i].play();
    })
})

