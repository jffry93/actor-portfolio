//INTRO CONTAINER ANIMATION
//Welcome Heading
gsap.to('.welcome-1', {
  scrollTrigger: {
    scroller: '.intro-container',
    trigger: '.intro-welcome',
    start: 'center center',
    end: '+=50%',
    pin: true,
    scrub: 1,
    markers: true,
    toggleActions: 'play pause reverse resume', //PLAY PAUSE RESUME REVERSE RESTART RESET COMPLETE NONE
  },

  x: -600,
  opacity: 0,
});
//to my
gsap.to('.welcome-2', {
  scrollTrigger: {
    scroller: '.intro-container',
    trigger: '.intro-welcome',
    start: 'center center',
    end: '+=50%',
    pin: true,
    scrub: 1,
    //markers: true,
    toggleActions: 'play pause reverse resume', //PLAY PAUSE RESUME REVERSE RESTART RESET COMPLETE NONE
  },

  x: -800,
  opacity: 0,
});
gsap.to('.welcome-3', {
  scrollTrigger: {
    scroller: '.intro-container',
    trigger: '.intro-welcome',
    start: 'center center',
    end: '+=50%',
    pin: true,
    scrub: 1,
    // markers: true,
    toggleActions: 'play pause reverse resume', //PLAY PAUSE RESUME REVERSE RESTART RESET COMPLETE NONE
  },

  x: 800,
  opacity: 0,
});
gsap.to('.welcome-4', {
  scrollTrigger: {
    scroller: '.intro-container',
    trigger: '.intro-welcome',
    start: 'center center',
    end: '+=50%',
    pin: true,
    scrub: 1,
    // markers: true,
    toggleActions: 'play pause reverse resume', //PLAY PAUSE RESUME REVERSE RESTART RESET COMPLETE NONE
  },
  x: 600,
  opacity: 0,
});
//scroll-down
gsap.to('.scroll-down', {
  scrollTrigger: {
    scroller: '.intro-container',
    trigger: '.intro-welcome',
    start: 'center center',
    end: '+=5%',
    scrub: true,
    pin: true,
    markers: true,
    toggleClass: { targets: '.scroll-down', class: 'flashing' },
    toggleActions: 'play pause reverse resume', //PLAY PAUSE RESUME REVERSE RESTART RESET COMPLETE NONE
  },
  opacity: 0,
  display: 'none',
});

//LANGUAGE-CONTAINER
//billingual
gsap.to('.second-container', {
  scrollTrigger: {
    scroller: '.intro-container',
    trigger: '.second-container',
    start: 'top 80%',
    end: '+=30%',
    scrub: true,
    //markers: true,
    toggleActions: 'restart pause reverse reset', //PLAY PAUSE RESUME REVERSE RESTART RESET COMPLETE NONE
  },
  x: 0,
  //duration: 0.7,
  opacity: 1,
});

//LOCATION CONTAINER
gsap.to('.location-container', {
  scrollTrigger: {
    scroller: '.intro-container',
    trigger: '.location-container',
    start: 'top 80%',
    end: '+=30%',
    scrub: true,
    //markers: true,
    toggleActions: 'restart pause reverse reset', //PLAY PAUSE RESUME REVERSE RESTART RESET COMPLETE NONE
  },
  x: 0,
  duration: 0.7,
  opacity: 1,
});

//EXPERIENCE CONTAINER
gsap.to('.third-container', {
  scrollTrigger: {
    scroller: '.intro-container',
    trigger: '.third-container',
    start: 'top 45%',
    end: '+=30%',
    scrub: true,
    //markers: true,
    toggleActions: 'restart pause reverse reset', //PLAY PAUSE RESUME REVERSE RESTART RESET COMPLETE NONE
  },
  x: 0,
  duration: 0.7,
  opacity: 1,
  scaleX: 1,
  scaleY: 1,
});

//QUADRUPLE CONTAINER
gsap.to('.training-title', {
  scrollTrigger: {
    scroller: '.intro-container',
    trigger: '.forth-container',
    start: 'top 60%',
    end: '+=10%',
    scrub: true,
    //markers: true,
    toggleActions: 'restart pause reverse reset', //PLAY PAUSE RESUME REVERSE RESTART RESET COMPLETE NONE
  },

  opacity: 1,
});
gsap.to('.training-1', {
  scrollTrigger: {
    scroller: '.intro-container',
    trigger: '.forth-container',
    start: 'top 60%',
    end: '+=20%',
    scrub: true,
    //markers: true,
    toggleActions: 'restart pause reverse reset', //PLAY PAUSE RESUME REVERSE RESTART RESET COMPLETE NONE
  },
  x: 0,
  duration: 0.7,
  opacity: 1,
});
gsap.to('.training-3', {
  scrollTrigger: {
    scroller: '.intro-container',
    trigger: '.forth-container',
    start: 'top 60%',
    end: '+=25%',
    scrub: true,
    //markers: true,
    toggleActions: 'restart pause reverse reset', //PLAY PAUSE RESUME REVERSE RESTART RESET COMPLETE NONE
  },
  x: 0,
  duration: 0.7,
  opacity: 1,
});
gsap.to('.training-2', {
  scrollTrigger: {
    scroller: '.intro-container',
    trigger: '.forth-container',
    start: 'top 60%',
    end: '+=20%',
    scrub: true,
    //markers: true,
    toggleActions: 'restart pause reverse reset', //PLAY PAUSE RESUME REVERSE RESTART RESET COMPLETE NONE
  },
  x: 0,
  duration: 0.7,
  opacity: 1,
});
gsap.to('.training-4', {
  scrollTrigger: {
    scroller: '.intro-container',
    trigger: '.forth-container',
    start: 'top 60%',
    end: '+=25%',
    scrub: true,
    //markers: true,
    toggleActions: 'restart pause reverse reset', //PLAY PAUSE RESUME REVERSE RESTART RESET COMPLETE NONE
  },
  x: 0,
  duration: 0.7,
  opacity: 1,
});

//you need
gsap.to('.fifth-container', {
  scrollTrigger: {
    scroller: '.intro-container',
    trigger: '.fifth-container',
    start: 'top 45%',
    end: '+=30%',
    scrub: true,
    //markers: true,
    toggleActions: 'restart pause reverse reset', //PLAY PAUSE RESUME REVERSE RESTART RESET COMPLETE NONE
  },
  x: 0,
  duration: 0.7,
  opacity: 1,
  scaleX: 1,
  scaleY: 1,
});
