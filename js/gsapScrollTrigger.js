//INTRO CONTAINER ANIMATION
//Welcome Heading

gsap.to('.welcome-1', {
  scrollTrigger: {
    scroller: '.intro-container',
    trigger: '.intro-welcome',
    start: 'center center',
    end: '+=50%',
    pin: true,
    scrub: 0.2,
    // markers: true,
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
    scrub: 0.2,
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
    scrub: 0.2,
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
    scrub: 0.2,
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
    // markers: true,
    toggleClass: { targets: '.scroll-down', class: 'flashing' },
    toggleActions: 'play pause reverse resume', //PLAY PAUSE RESUME REVERSE RESTART RESET COMPLETE NONE
  },
  opacity: 0,
  display: 'none',
});

//LANGUAGE-CONTAINER
//billingual
gsap
  .timeline({
    scrollTrigger: {
      scroller: '.intro-container',
      trigger: '.second-container',
      start: 'top center',
      end: '+=100%',
      scrub: 0.2,
      // markers: true,
      // pin: true,
    },
  })
  .to('.second-container', { x: 0, opacity: 1 })
  .to('.second-container', { x: 500, opacity: 0 });

//LOCATION CONTAINER
gsap
  .timeline({
    scrollTrigger: {
      scroller: '.intro-container',
      trigger: '.location-container',
      start: 'top center',
      end: '+=100%',
      scrub: 0.2,
      // markers: true,
      // pin: true,
    },
  })
  .to('.location-container', { x: 0, opacity: 1 })
  .to('.location-container', { x: -500, opacity: 0 });
//EXPERIENCE CONTAINER

gsap
  .timeline({
    scrollTrigger: {
      scroller: '.intro-container',
      trigger: '.experience-container',
      start: 'top center',
      end: '+=100%',
      scrub: 0.2,
      // markers: true,
      // pin: true,
    },
  })
  .to('.experience-text', {
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
  })
  .to('.experience-text', { opacity: 0, scaleX: 3, scaleY: 3 });

//QUADRUPLE CONTAINER
gsap
  .timeline({
    scrollTrigger: {
      scroller: '.intro-container',
      trigger: '.forth-container',
      start: 'top center',
      end: '+=50%',
      scrub: 1,
      markers: true,
      // pin: true,
    },
  })
  .to('.training-title', { opacity: 1 })
  .to('.training-1', { x: 0, duration: 3, opacity: 1 })
  .to('.training-2', { x: 0, duration: 3, opacity: 1 })
  .to('.training-3', { x: 0, duration: 3, opacity: 1 })
  .to('.training-4', { x: 0, duration: 3, opacity: 1 });

// gsap.to('.training-1', {
//   scrollTrigger: {
//     scroller: '.intro-container',
//     trigger: '.forth-container',
//     start: 'top 60%',
//     end: '+=20%',
//     scrub: true,
//     //markers: true,
//     toggleActions: 'restart pause reverse reset', //PLAY PAUSE RESUME REVERSE RESTART RESET COMPLETE NONE
//   },
//   x: 0,
//   duration: 0.7,
//   opacity: 1,
// });
// gsap.to('.training-3', {
//   scrollTrigger: {
//     scroller: '.intro-container',
//     trigger: '.forth-container',
//     start: 'top 60%',
//     end: '+=25%',
//     scrub: true,
//     //markers: true,
//     toggleActions: 'restart pause reverse reset', //PLAY PAUSE RESUME REVERSE RESTART RESET COMPLETE NONE
//   },
//   x: 0,
//   duration: 0.7,
//   opacity: 1,
// });
// gsap.to('.training-2', {
//   scrollTrigger: {
//     scroller: '.intro-container',
//     trigger: '.forth-container',
//     start: 'top 60%',
//     end: '+=20%',
//     scrub: true,
//     //markers: true,
//     toggleActions: 'restart pause reverse reset', //PLAY PAUSE RESUME REVERSE RESTART RESET COMPLETE NONE
//   },
//   x: 0,
//   duration: 0.7,
//   opacity: 1,
// });
// gsap.to('.training-4', {
//   scrollTrigger: {
//     scroller: '.intro-container',
//     trigger: '.forth-container',
//     start: 'top 60%',
//     end: '+=25%',
//     scrub: true,
//     //markers: true,
//     toggleActions: 'restart pause reverse reset', //PLAY PAUSE RESUME REVERSE RESTART RESET COMPLETE NONE
//   },
//   x: 0,
//   duration: 0.7,
//   opacity: 1,
// });

//you need
gsap.to('.fifth-container', {
  scrollTrigger: {
    scroller: '.intro-container',
    trigger: '.fifth-container',
    start: 'top 45%',
    end: '+=30%',
    scrub: 0.2,
    //markers: true,
    toggleActions: 'restart pause reverse reset', //PLAY PAUSE RESUME REVERSE RESTART RESET COMPLETE NONE
  },
  x: 0,
  duration: 0.7,
  opacity: 1,
  scaleX: 1,
  scaleY: 1,
});
