


gsap.registerPlugin(ScrollTrigger);

 

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top", 
    pin: true, 
    pinSpacing:false
     
  });
});

const tl = gsap.timeline({defaults: { ease: "slow"}})

tl.to('.text', {y: "0%",  opacity: 1, duration:2, stagger: 2})
.to('span', {y: "0%",  opacity: 1, duration:2})

 .to('.fir', {y: -90,  scale:1.3,  opacity: 0.1,  duration: 1},"+=1")
 .to('span', {  opacity: 0, duration:1},"-=1")
 .to('.sec', {y: -81,   scale:1.3,  opacity: 0.1,  duration: 1},"-=1")
 .to('.thir', {y: -72,  scale:1.3,  opacity: 0.2,  duration: 1},"-=1")
 
  

  .to('.intro_subtitle_text', {y: -160, x: 350, opacity: 1, scale: 1.5, marginTop: 60, stagger: 2, duration:1},"-=0.5")
  .to('.intro_subtitle_text', {opacity:0}, "+=3")
 
  .to('.cta_text', { opacity: 1, duration: 1, ease: "bounce"})
  .to('.cta_text span', { opacity: 1, duration: 1, ease: "bounce"}, "-=0.2")
  .to('.cta_btn', { opacity: 1, duration: 1, ease: "bounce"}, "+=2")

