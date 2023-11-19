gsap.registerPlugin(ScrollTrigger);

const animateTitle = () => {
  gsap.set(".icon-logo", {
    x: -100,
    opacity: 0,
    clipPath: "inset(0 80% 0% 0%)",
  });
  gsap
    .timeline()
    .to(".icon-logo", {
      duration: 1,
      x: 0,
      opacity: 1,
    })
    .to(".icon-logo", {
      clipPath: "inset(0 0% 0% 0%)",
      duration: 1,
      ease: "slow(0.1,0.1,false)",
    });

  const tlTitle = gsap.timeline({ defaults: { duration: 1.5 } });
  tlTitle.set(".title", {
    y: -100,
    x: -52,
    opacity: 0,
    rotate: "-8deg",
  });
  tlTitle.to(".title", {
    y: 0,
    x: 0,
    opacity: 1,
    rotate: "0deg",
    ease: "slow(0.1,0.1,true)",
  });

  gsap.set(".btn-parent", {
    scale: 0.5,
    opacity: 0,
  });

  gsap.to(".btn-parent", {
    duration: 5,
    ease: "elastic",
    scale: 1,
    opacity: 1,
  });
};

const animateCardsSkills = () => {
  gsap.set("#skill-1", {
    opacity: 0,
    x: "-50%",
  });

  gsap.set("#skill-2", {
    opacity: 0,
    y: "50%",
  });

  gsap.set("#skill-3", {
    opacity: 0,
    y: "-50%",
  });

  gsap.set("#skill-4", {
    opacity: 0,
    x: "50%",
  });

  const tlSkill = gsap.timeline({
    scrollTrigger: {
      trigger: ".skills-hearts",
      start: "top-=50% top+=50%",
      end: "bottom bottom-=60%",
      scrub: true,
    },
  });

  tlSkill.to("#skill-1", {
    opacity: 1,
    x: "0%",
  });

  tlSkill.to("#skill-2", {
    opacity: 1,
    y: "0%",
  });

  tlSkill.to("#skill-3", {
    opacity: 1,
    y: "0%",
  });

  tlSkill.to("#skill-4", {
    opacity: 1,
    x: "0%",
  });
};

const animateCardHearts = () => {
  gsap.set("#cardH-1", {
    rotateY: "180deg",
  });

  gsap.set("#cardH-2", {
    rotateY: "180deg",
  });
  gsap.set("#cardH-3", {
    rotateY: "180deg",
  });
  gsap.set("#cardH-4", {
    rotateY: "180deg",
  });

  const tlHearts = gsap.timeline({
    scrollTrigger: {
      trigger: ".cards-btns",
      start: "top-=150% top+=45%",
      end: "bottom bottom-=35%",
      scrub: true,
    },
  });

  tlHearts.to("#cardH-1", {
    duration: 0.5,
    rotateY: "0deg",
  });

  tlHearts.to("#cardH-2", {
    duration: 0.5,
    rotateY: "0deg",
  });

  tlHearts.to("#cardH-3", {
    duration: 0.5,
    rotateY: "0deg",
  });

  tlHearts.to("#cardH-4", {
    duration: 0.5,
    rotateY: "0deg",
  });
};

animateTitle();
animateCardsSkills();
animateCardHearts();

// ANIMATION FOOTER
gsap.set(".footer", {
  scale: 0.8,
  transform: "skew(10deg, 2deg)",
});
const footerTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer",
    start: "top 80%",
    end: "bottom 100%",
    scrub: 2,
  },
});
footerTl.to(".footer", {
  scale: 1,
  transform: "skew(0deg, 0deg)",
});
