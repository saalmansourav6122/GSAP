const main = document.querySelector(".main");
const image = document.querySelector(".image");
const cursor = document.querySelector(".cursor");

main.addEventListener("mousemove", function (dots) {
  gsap.to(cursor, {
    x: dots.x,
    y: dots.y,
    duration: 1,
    ease: "back.out",
  });
});

image.addEventListener("mouseenter", function (dots) {
  cursor.innerHTML = "Enter image";

  gsap.to(cursor, {
    scale: 2,
    duration: 1,
  });
});

image.addEventListener("mouseleave", function (dots) {
  cursor.innerHTML = "Leave image";
  gsap.to(cursor, {
    scale: 1,
    duration: 1,
  });
});
