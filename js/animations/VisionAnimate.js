const animationScaleElement = (elemento) => {
  gsap.to(elemento, {
    scale: 1.5,
    repeat: -1,
    yoyo: true,
    duration: 2,
  });
};

const animateTitleFate = () => {
  const tlOcult = gsap.timeline({ defaults: { duration: 0.033 } });

  tlOcult.to("#vision-ocult-1", {
    delay: 4,
    opacity: 1,
  });
  tlOcult.to("#vision-show-1", {
    opacity: 1,
  });
  tlOcult.to("#vision-ocult-1", {
    opacity: 0,
    display: "none",
  });

  tlOcult.to("#vision-ocult-2", {
    opacity: 1,
  });
  tlOcult.to("#vision-show-2", {
    opacity: 1,
  });
  tlOcult.to("#vision-ocult-2", {
    opacity: 0,
    display: "none",
  });

  tlOcult.to("#vision-ocult-3", {
    opacity: 1,
  });
  tlOcult.to("#vision-show-3", {
    opacity: 1,
  });
  tlOcult.to("#vision-ocult-3", {
    opacity: 0,
    display: "none",
  });

  tlOcult.to("#vision-ocult-4", {
    opacity: 1,
  });
  tlOcult.to("#vision-show-4", {
    opacity: 1,
  });
  tlOcult.to("#vision-ocult-4", {
    opacity: 0,
    display: "none",
  });

  tlOcult.to("#vision-ocult-5", {
    opacity: 1,
  });
  tlOcult.to("#vision-show-5", {
    opacity: 1,
  });
  tlOcult.to("#vision-ocult-5", {
    opacity: 0,
    display: "none",
  });

  tlOcult.to("#vision-ocult-6", {
    opacity: 1,
  });
  tlOcult.to("#vision-show-6", {
    opacity: 1,
  });
  tlOcult.to("#vision-ocult-6", {
    opacity: 0,
    display: "none",
  });

  tlOcult.to("#vision-ocult-7", {
    opacity: 1,
  });
  tlOcult.to("#vision-show-7", {
    opacity: 1,
  });
  tlOcult.to("#vision-ocult-7", {
    opacity: 0,
    display: "none",
  });

  tlOcult.to("#vision-ocult-8", {
    opacity: 1,
  });
  tlOcult.to("#vision-show-8", {
    opacity: 1,
  });
  tlOcult.to("#vision-ocult-8", {
    opacity: 0,
    display: "none",
  });

  tlOcult.to("#vision-show-9", {
    opacity: 1,
  })

  tlOcult.to("#vision-ocult-10", {
    opacity: 1,
  });
  tlOcult.to("#vision-show-10", {
    opacity: 1,
  });
  tlOcult.to("#vision-ocult-10", {
    opacity: 0,
    display: "none",
  });

  tlOcult.to("#vision-ocult-11", {
    opacity: 1,
  });
  tlOcult.to("#vision-show-11", {
    opacity: 1,
  });
  tlOcult.to("#vision-ocult-11", {
    opacity: 0,
    display: "none",
  });

  tlOcult.to("#vision-ocult-12", {
    opacity: 1,
  });
  tlOcult.to("#vision-show-12", {
    opacity: 1,
  });
  tlOcult.to("#vision-ocult-12", {
    opacity: 0,
    display: "none",
  });

  tlOcult.to("#vision-ocult-13", {
    opacity: 1,
  });
  tlOcult.to("#vision-show-13", {
    opacity: 1,
  });
  tlOcult.to("#vision-ocult-13", {
    opacity: 0,
    display: "none",
  });

  tlOcult.to("#vision-ocult-14", {
    opacity: 1,
  });
  tlOcult.to("#vision-show-14", {
    opacity: 1,
  });
  tlOcult.to("#vision-ocult-14", {
    opacity: 0,
    display: "none",
  });

  tlOcult.to("#vision-ocult-15", {
    opacity: 1,
  });
  tlOcult.to("#vision-show-15", {
    opacity: 1,
  });
  tlOcult.to("#vision-ocult-15", {
    opacity: 0,
    display: "none",
  });

  tlOcult.to("#vision-ocult-16", {
    opacity: 1,
  });
  tlOcult.to("#vision-show-16", {
    opacity: 1,
  });
  tlOcult.to("#vision-ocult-16", {
    opacity: 0,
    display: "none",
  });

  tlOcult.to("#vision-ocult-17", {
    opacity: 1,
  });
  tlOcult.to("#vision-show-17", {
    opacity: 1,
  });
  tlOcult.to("#vision-ocult-17", {
    opacity: 0,
    display: "none",
  });

  tlOcult.to("#vision-ocult-18", {
    opacity: 1,
  });
  tlOcult.to("#vision-show-18", {
    opacity: 1,
  });
  tlOcult.to("#vision-ocult-18", {
    opacity: 0,
    display: "none",
  });

  tlOcult.to("#vision-ocult-19", {
    opacity: 1,
  });
  tlOcult.to("#vision-show-19", {
    opacity: 1,
  });
  tlOcult.to("#vision-ocult-19", {
    opacity: 0,
    display: "none",
  });

  tlOcult.to("#vision-ocult-20", {
    opacity: 1,
  });
  tlOcult.to("#vision-show-20", {
    opacity: 1,
  });
  tlOcult.to("#vision-ocult-20", {
    opacity: 0,
    display: "none",
  });

  tlOcult.to("#vision-ocult-21", {
    opacity: 1,
  });
  tlOcult.to("#vision-show-21", {
    opacity: 1,
  });
  tlOcult.to("#vision-ocult-21", {
    opacity: 0,
    display: "none",
  });

};

const animationSectionEntry = (e) => {
  gsap
    .timeline({ defaults: { duration: 1, ease: "back.inOut(1)" } })
    .to(".video-html5 ", {
      opacity: 0,
    })
    .to(".video-html5", {
      opacity: 1,
    });

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
  animateTitleFate();
};

animationSectionEntry();
animationScaleElement("#circle-line-one");

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
