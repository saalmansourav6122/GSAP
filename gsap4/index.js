const main = document.querySelector(".main");
console.log(main);

main.addEventListener("mousemove", function (dots) {
  gsap.to(".cursor", {
    x: dots.x,
    y: dots.y,
    duration: 1,
    ease: "back.out",
  });
});
