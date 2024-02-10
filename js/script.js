// Navbar
const menu = document.querySelector('.menu-mobile')
const navbar = document.querySelector('.nav-mobile')

menu.addEventListener('click', () => {
    navbar.classList.toggle('change')
    menu.classList.toggle('change')
})
// End of Navbar

// Slideshow
const slideshowDivs = () => {
    for(let i = 1; i <= 5; i++) {
        const div = document.createElement('div')

        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`

        i === 1 && div.classList.add('change')

        document.querySelector('.slideshow').appendChild(div)
    }
}

slideshowDivs()

const divs = document.querySelectorAll('.slideshow div')

let a = 1

const slideshow = () => {
    setInterval(() => {
        a++

        const div = document.querySelector('.slideshow .change')

        div.classList.remove('change')

        if(a < divs.length) {
            div.nextElementSibling.classList.add('change')
        } else {
            divs[0].classList.add('change')
            a = 1
        }
    }, 10000)
}

slideshow()
// End of Slideshow



// Section 2 Video
/*
const video = document.querySelector('.video')
const btn = document.querySelector('.buttons button i');
const bar = document.querySelector('.video-bar')

const playPause = () => {
    if(video.paused) {
        video.play()
        btn.className = 'far fa-pause-circle'
        video.style.opacity = '.7'
    } else {
        video.pause()
        btn.className = 'far fa-play-circle'
        video.style.opacity = '.3'
    }
}

btn.addEventListener('click', () => {
    playPause()
})

video.addEventListener('timeupdate', () => {
//  console.log(video.currentTime, video.duration)
    const barWidth = video.currentTime / video.duration;
    bar.style.width = `${barWidth * 100}%`
    if(video.ended) {
        btn.className = 'far fa-play-circle'
        video.style.opacity = '.3'
    }
})

*/
// End of Section 2 Video

// Section 3 Pricing Cards
// var swiper = new Swiper('.swiper-container', {
//     effect: 'coverflow',
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: 'auto',
//     coverflowEffect: {
//         rotate: 70,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows: true,
//     },
// });
// End of Section 3 Pricing Cards
