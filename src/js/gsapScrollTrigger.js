//Welcome Heading
gsap.to('.intro-welcome', {
  scrollTrigger: {
    trigger: '.intro-welcome',
    start: 'top 45%',
    end: '+=50%',
    pin: true,
    scrub: true,
    //markers: true,
    toggleActions: 'restart pause reverse reset', //PLAY PAUSE RESUME REVERSE RESTART RESET COMPLETE NONE
  },
  scaleX: 3,
  scaleY: 3,
  opacity: 0,
});

//billingual
gsap.to('.second-container', {
  scrollTrigger: {
    trigger: '.second-container',
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

//10 years
gsap.to('.third-container', {
  scrollTrigger: {
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

//Dark Quadruple Threat
gsap.to('.forth-container', {
  scrollTrigger: {
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
    trigger: '.fifth-container',
    start: 'top 45%',
    end: '+=30%',
    scrub: true,
    markers: true,
    toggleActions: 'restart pause reverse reset', //PLAY PAUSE RESUME REVERSE RESTART RESET COMPLETE NONE
  },
  x: 0,
  duration: 0.7,
  opacity: 1,
  scaleX: 1,
  scaleY: 1,
});
