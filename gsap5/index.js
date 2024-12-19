let hamburger = document.querySelector(".nav i");
let cross = document.querySelector("ul i");
let tl = gsap.timeline();

tl.to("ul", {
  right: 0,
});
tl.from("ul li", {
  x: 100,
  duration: 0.3,
  stagger: 0.2,
  opacity: 0,
});
tl.pause();
hamburger.addEventListener("click", () => {
  tl.play();
});
cross.addEventListener("click", () => {
  tl.reverse();
});
