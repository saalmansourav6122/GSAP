function pageOneAnimation() {
  var tl = gsap.timeline();
  tl.from("nav h1, nav ul li", {
    y: -30,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    stagger: 0.2,
  });
  tl.from(".center .part1 h1", {
    x: -200,
    opacity: 0,
    duration: 0.2,
  });
  tl.from(".center .part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });
  tl.from(".center .part1 button", {
    opacity: 0,
    duration: 0.4,
  });

  tl.from(
    ".part2 img",
    {
      opacity: 0,
      duration: 0.5,
      x: 200,
    },
    "-=0.3"
  );
  tl.from(".buttons-svg img", {
    opacity: 0,
    duration: 0.4,
  });
}

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top 0",
    scrub: 2,
  },
});
tl2.from(".service", {
  x: -100,
  opacity: 0,
  duration: 0.4,
});
