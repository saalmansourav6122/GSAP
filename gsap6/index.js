window.addEventListener("wheel", (dats) => {
  if (dats.deltaY < 0) {
    gsap.to(".marque", {
      x: "-200%",
      repeat: -1,
      duration: 4,
      ease: "none",
    });
    gsap.to(".marque img", {
      rotate: 180,
    });
  } else {
    gsap.to(".marque", {
      x: "0%",
      repeat: -1,
      duration: 4,
      ease: "none",
    });
    gsap.to(".marque img", {
      rotate: 0,
    });
  }
});
