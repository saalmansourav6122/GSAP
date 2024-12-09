var tl = gsap.timeline();
tl.from("h1", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.25,
});

tl.from("li", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: -0.3,
});

tl.from(".hero", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 1,
  stagger: -0.3,
});
