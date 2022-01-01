import { gsap } from "gsap";
import Animation from "../classes/Animation.js";
// import "../utils/SplitText.min.js";

export default class Paragraph extends Animation {
  constructor({ element, elements }) {
    super({
      element,
      elements,
    });
  }

  animateIn() {
    this.timelineIn = gsap.timeline({
      delay: 0.5,
    });

    this.timelineIn.set(this.element, {
      autoAlpha: 1,
    });

    this.splittedParagraph = new SplitText(this.element, {
      type: "lines",
      linesClass: "b",
    });
    new SplitText(this.element, { type: "lines", linesClass: "a" });

    this.timelineIn.fromTo(
      this.splittedParagraph.lines,
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
        ease: "expo.out",
        duration: 1.25,
        stagger: 0.15,
      }
    );
  }

  animateOut() {
    gsap.set(this.element, {
      autoAlpha: 0,
    });
  }
}
