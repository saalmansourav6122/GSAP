var tl = gsap.timeline();
tl.from("nav h1, nav ul li", {
  y: -30,
  opacity: 0,
  delay: 0.5,
  duration: 0.5,
  stagger: 0.2,
});
