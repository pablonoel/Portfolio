import { gsap } from "gsap";

const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

tl.from(".site-header", { y: -12, opacity: 0, duration: 0.5 });

if (document.querySelector(".headline")) {
  tl.from(".headline", { y: 24, opacity: 0, duration: 0.6 }, "-=0.2")
    .from(".rule", { scaleX: 0, opacity: 0, duration: 0.5, transformOrigin: "left" }, "-=0.3")
    .from(".lede", { y: 16, opacity: 0, duration: 0.5 }, "-=0.3")
    .from(".project-card", { y: 24, opacity: 0, duration: 0.6, stagger: 0.15 }, "-=0.2");
}
