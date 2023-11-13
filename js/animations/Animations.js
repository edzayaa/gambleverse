gsap.registerPlugin(ScrollTrigger);

const title = document.querySelector(".text-glitch-effect");

export const animationScaleElement = (elemento) => {
  gsap.to(elemento, {
    scale: 1.5,
    repeat: -1,
    yoyo: true,
    duration: 2.5,
    ease: "slow(0.1,2,true)",
  });
};

export const animationTitle = (e) => {

};
