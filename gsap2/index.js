gsap.from(".box1 .gsap_box1", {
  duration: 1,
  delay: 1,
  scale: 0,
  rotate: 360,
});

gsap.from(".box2 .gsap_box2", {
  duration: 3,
  delay: 1,
  y: -40,
  opacity: 0,
  rotate: -360,
  scrollTrigger: {
    trigger: ".box2 .gsap_box2",
    start: "top 35%",
    end: "bottom 50%",
    scrub: 2,
  },
});

gsap.to(".box3 h2", {
  x: "-150%", // Use x instead of transform for better performance
  scrollTrigger: {
    trigger: ".box3",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});
