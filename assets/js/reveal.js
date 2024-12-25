// srtop.reveal('.social_icons',{delay: 100})

const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true     
})


srtop.reveal('.hero-left',{})
srtop.reveal('.about-info',{})
srtop.reveal('.testomonials-container',{})


/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */


const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.project-cards',{delay: 100})



const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.hero-right',{})
srRight.reveal('.main-slider-container-3d',{})


/* -- ABOUT SKILLS & FORM BOX -- */
const srBottom = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    reset: true
    })
    
srBottom.reveal('.timeline',{})
    