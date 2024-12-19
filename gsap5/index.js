let tl = gsap.timeline();
tl.to("ul", {
  right: 0,
  duration: 1,
  delay: 1,
});
tl.from("ul li", {
  x: 150,
  duration: 0.3,
  stagger: 0.8,
  opacity: 0,
});
