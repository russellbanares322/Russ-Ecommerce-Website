const tl = gsap.timeline({defaults: {ease: "power1.out" } });

tl.to('.text', { y: "0%", duration: 1, stagger: 0.25 });
tl.to('.slider', { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to('.intro', { y: "-100%", duration: 1 }, "-=1");
tl.fromTo('nav', {opacity: 0}, { opacity: 1, duration: 0});
tl.fromTo('.btn', {opacity: 0}, { opacity: 1, duration: 0});
tl.fromTo('.title', {opacity: 0}, { opacity: 1, duration: 0});
tl.fromTo('.big-text', {opacity: 0}, { opacity: 1, duration: 1});
tl.fromTo('.col-2', {opacity: 0}, { opacity: 1, duration: 1, stagger: 0.25});

