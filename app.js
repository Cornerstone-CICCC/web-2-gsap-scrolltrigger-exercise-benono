gsap.registerPlugin(ScrollTrigger);

let tl_one = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-one",
    start: "top",
    end: "bottom",
    pin: true,
    scrub: true,
  },
});

tl_one
  .from("span", {
    y: "100vh",
    stagger: 0.1,
  })
  .to(".line-one", {
    backgroundColor: "yellow",
  })
  .from(".sun", {
    x: 400,
  })
  .to("span", {
    x: "100vw",
  })
  .to(
    ".sun",
    {
      x: "-100vw",
    },
    "<"
  )
  .to(
    ".line-one",
    {
      backgroundColor: "white",
    },
    "<"
  );
let tl_two = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-two",
    scrub: true,
    pin: true,
    start: "top",
    end: "bottom",
  },
});

tl_two
  .from(".line-two span:first-child", { x: "-100vw", scale: 5 })
  .from(".line-two span:last-child", { x: "100vw", scale: 5 }, "<")
  .to(".line-two span:first-child", { y: "-20" })
  .to(".line-two span:first-child", { y: "0" })
  .to(".line-two span:last-child", { y: "-20" })
  .to(".line-two span:last-child", { y: "0" });

let tl_three = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-three",
    scrub: true,
    pin: true,
    start: "top",
    end: "bottom",
  },
});

tl_three
  .to(".line-three", { backgroundColor: "red" })
  .fromTo(".line-three span", { x: 0, y: "100vh" }, { y: 0, stagger: 0.2 })
  .to(".line-three", { "background-position-x": "0%" })
  .from(".moon", { x: "100vw" }, "<")
  .to(".line-three span", { color: "white" }, "<");
