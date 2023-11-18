gsap.registerPlugin(ScrollTrigger);

// LOGO
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

// IMG PAINTBALL
gsap.set(".paintball-img", {
  filter: "blur(5px)",
  scale: 0.5,
  opacity: 0.1,
});
gsap.to(".paintball-img", {
  filter: "blur(0px)",
  scale: 1,
  opacity: 1,
  duration: 1,
  ease: "slow(0.3,0.1,false)",
});

// CARD GAMES SECTION
gsap.set(".card-games", {
  x: "-100%",
  opacity: 0,
});

gsap.to(".card-games", {
  scrollTrigger: ".card-slider-games",
  duration: 2,
  x: "0%",
  opacity: 1,
});

gsap.set(".imagen-group-games", {
  scale: 0.5,
  opacity: 0.1,
});

gsap.to(".imagen-group-games", {
  scrollTrigger: ".card-slider-games",
  scale: 1,
  opacity: 1,
  duration: 1,
  ease: "slow(0.3,0.1,true)",
});

// SECTION MOONFLIP

const tlMoonflipImg = gsap.timeline({
  scrollTrigger: {
    trigger: "#MoonflipImg",
    start: "top-=5% top+=65%",
    end: "bottom top+=80%",
    scrub: true,
  },
  defaults: { duration: 2 },
});
gsap.set("#MoonflipImg", {
  scale: 0.5,
});
tlMoonflipImg.to("#MoonflipImg", {
  scale: 1,
  ease: "slow(0.3,0.1,false)",
});

gsap.set("#Moonflip", {
  y: "-100%",
  opacity: 0,
});

gsap.to("#Moonflip", {
  scrollTrigger: "#Moonflip",
  y: "0%",
  opacity: 1,
  duration: 1,
  ease: "slow(0.3,0.1,true)",
});

gsap.set("#img-gall-1", {
  position: "absolute",
  top: 0,
  left: 0,
  opacity: 1,
});
gsap.set("#img-gall-2", {
  position: "absolute",
  top: 0,
  left: 0,
});
gsap.set("#img-gall-3", {
  position: "absolute",
  top: 0,
  left: 0,
});
gsap.set("#img-gall-4", {
  position: "absolute",
  top: 0,
  left: 0,
});

const tlImgGall = gsap.timeline({
  defaults: {
    duration: 0.5,
    ease: "slow(0.3,0.1,false)",
  },
  scrollTrigger: "#Moonflip",
});

tlImgGall.to("#img-gall-1", {
  left: "0%",
});
tlImgGall.to("#img-gall-2", {
  left: "25%",
});
tlImgGall.to("#img-gall-3", {
  left: "50%",
});
tlImgGall.to("#img-gall-4", {
  left: "75%",
});

// SECTION ELEMENT

const tlElementImg = gsap.timeline({
  scrollTrigger: {
    trigger: "#ElementImg",
    start: "top-=5% top+=65%",
    end: "bottom top+=80%",
    scrub: true,
  },
  defaults: { duration: 2 },
});
gsap.set("#ElementImg", {
  scale: 0.5,
});
tlElementImg.to("#ElementImg", {
  scale: 1,
  ease: "slow(0.3,0.1,false)",
});

gsap.set("#Element", {
  y: "-100%",
  opacity: 0,
});

gsap.to("#Element", {
  scrollTrigger: "#Element",
  y: "0%",
  opacity: 1,
  duration: 1,
  ease: "slow(0.3,0.1,true)",
});

gsap.set("#img-elem-1", {
  y: "-100%",
  left: 0,
  opacity: 1,
});
gsap.set("#img-elem-2", {
  y: "-100%",
});
gsap.set("#img-elem-3", {
  y: "-100%",
});
gsap.set("#img-elem-4", {
  y: "-100%",
});

const tlImgElem = gsap.timeline({
  defaults: {
    duration: 0.5,
    ease: "slow(0.3,0.1,false)",
  },
  scrollTrigger: "#Element",
});

tlImgElem.to("#img-elem-1", {
  y: "0%",
});
tlImgElem.to("#img-elem-2", {
  y: "0%",
});
tlImgElem.to("#img-elem-3", {
  y: "0%",
});
tlImgElem.to("#img-elem-4", {
  y: "0%",
});

// NEBULA SECTION
const tlNebulaImg = gsap.timeline({
  scrollTrigger: {
    trigger: "#NebulaImg",
    start: "top-=5% top+=65%",
    end: "bottom top+=80%",
    scrub: true,
  },
  defaults: { duration: 2 },
});
gsap.set("#NebulaImg", {
  scale: 0.5,
});
tlNebulaImg.to("#NebulaImg", {
  scale: 1,
  ease: "slow(0.3,0.1,false)",
});

gsap.set("#Nebula", {
  y: "-100%",
  opacity: 0,
});

gsap.to("#Nebula", {
  scrollTrigger: "#Nebula",
  y: "0%",
  opacity: 1,
  duration: 1,
  ease: "slow(0.3,0.1,true)",
});

gsap.set("#img-neb-1", {
  y: "+100%",
  left: 0,
  opacity: 1,
});
gsap.set("#img-neb-2", {
  y: "+100%",
});
gsap.set("#img-neb-3", {
  y: "+100%",
});
gsap.set("#img-neb-4", {
  y: "+100%",
});

const tlImgNeb = gsap.timeline({
  defaults: {
    duration: 0.5,
    ease: "slow(0.3,0.1,false)",
  },
  scrollTrigger: "#Nebula",
});

tlImgNeb.to("#img-neb-1", {
  y: "0%",
});
tlImgNeb.to("#img-neb-2", {
  y: "0%",
});
tlImgNeb.to("#img-neb-3", {
  y: "0%",
});
tlImgNeb.to("#img-neb-4", {
  y: "0%",
});

// POKER SECTION
const tlPokerImg = gsap.timeline({
  scrollTrigger: {
    trigger: "#PokerImg",
    start: "top-=5% top+=65%",
    end: "bottom top+=80%",
    scrub: true,
  },
  defaults: { duration: 2 },
});
gsap.set("#PokerImg", {
  scale: 0.5,
});
tlPokerImg.to("#PokerImg", {
  scale: 1,
  ease: "slow(0.3,0.1,false)",
});

gsap.set("#Poker", {
  y: "-100%",
  opacity: 0,
});

gsap.to("#Poker", {
  scrollTrigger: "#Poker",
  y: "0%",
  opacity: 1,
  duration: 1,
  ease: "slow(0.3,0.1,true)",
});

gsap.set("#img-pok-1", {
  x: "-100%",
  left: 0,
  opacity: 1,
});
gsap.set("#img-pok-2", {
  x: "-100%",
});
gsap.set("#img-pok-3", {
  x: "-100%",
});
gsap.set("#img-pok-4", {
  x: "-100%",
});

const tlImgPok = gsap.timeline({
  defaults: {
    duration: 0.5,
    ease: "slow(0.3,0.1,false)",
  },
  scrollTrigger: "#Poker",
});

tlImgPok.to("#img-pok-1", {
  x: "0%",
});
tlImgPok.to("#img-pok-2", {
  x: "0%",
});
tlImgPok.to("#img-pok-3", {
  x: "0%",
});
tlImgPok.to("#img-pok-4", {
  x: "0%",
});

// POKER SECTION
const tlSpaceCraftImg = gsap.timeline({
    scrollTrigger: {
      trigger: "#SpaceCraftImg",
      start: "top-=5% top+=65%",
      end: "bottom top+=80%",
      scrub: true,
    },
    defaults: { duration: 2 },
  });
  gsap.set("#SpaceCraftImg", {
    scale: 0.5,
  });
  tlSpaceCraftImg.to("#SpaceCraftImg", {
    scale: 1,
    ease: "slow(0.3,0.1,false)",
  });
  
  gsap.set("#SpaceCraft", {
    y: "-100%",
    opacity: 0,
  });
  
  gsap.to("#SpaceCraft", {
    scrollTrigger: "#SpaceCraft",
    y: "0%",
    opacity: 1,
    duration: 1,
    ease: "slow(0.3,0.1,true)",
  });
  
  gsap.set("#img-spc-1", {
    y: "-100%",
    left: 0,
    opacity: 1,
  });
  gsap.set("#img-spc-2", {
    y: "-100%",
  });
  gsap.set("#img-spc-3", {
    y: "-100%",
  });
  gsap.set("#img-spc-4", {
    y: "-100%",
  });
  
  const tlImgSpc = gsap.timeline({
    defaults: {
      duration: 0.5,
      ease: "slow(0.3,0.1,false)",
    },
    scrollTrigger: "#SpaceCraft",
  });
  
  tlImgSpc.to("#img-spc-1", {
    y: "0%",
  });
  tlImgSpc.to("#img-spc-2", {
    y: "0%",
  });
  tlImgSpc.to("#img-spc-3", {
    y: "0%",
  });
  tlImgSpc.to("#img-spc-4", {
    y: "0%",
  });

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
