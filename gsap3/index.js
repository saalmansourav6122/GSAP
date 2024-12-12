var initialPath = "M 10 100 Q 500 100 990 100";
var finalPath = "M 10 100 Q 500 100 990 100";

var main = document.querySelector(".main");
main.addEventListener("mousemove", (e) => {
  initialPath = `M 10 100 Q ${e.x} ${e.y} 990 100`;

  gsap.to("svg path", {
    attr: { d: initialPath },
    duration: 0.5,
    ease: "power1.out",
  });
});

main.addEventListener("mouseleave", (e) => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1,0.2)",
  });
});
