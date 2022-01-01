// import gsap from "gsap";
import each from "lodash/each";
// import Title from "../animations/Title.js";
import map from "lodash/map";
import FadeIn from "../animations/FadeIn";
import FadeInText from "../animations/FadeInText";
import FadeInRight from "../animations/FadeRight";
import LetterReveal from "../animations/LetterReveal";
import Paragraph from "../animations/Paragraph";

export default class Page {
  constructor({ id, element, elements }) {
    this.id = id;
    this.selector = element;
    this.selectorChildren = {
      ...elements,
      animationsParagraphs: "[data-animation='paragraph']",
      animationsFadeIn: "[data-animation='fadeIn']",
      animationsFadeInText: "[data-animation='fadeInText']",
      animationsLetterReveal: "[data-animation='letterReveal']",
      animationsFadeInRight: "[data-animation='fadeInRight']",
    };
  }

  create() {
    this.elements = {};

    each(this.selectorChildren, (entry, key) => {
      if (
        entry instanceof window.HTMLElement ||
        entry instanceof window.NodeList ||
        entry instanceof window.SVGElement ||
        entry instanceof window.SVGSVGElement ||
        Array.isArray(entry)
      ) {
        this.elements[key] = entry;
      } else {
        this.elements[key] = document.querySelectorAll(entry);

        if (this.elements[key].length === 0) {
          this.elements[key] = null;
        } else if (this.elements[key].length === 1) {
          this.elements[key] = document.querySelector(entry);
        }
      }
    });

    this.createAnimations();
  }

  createAnimations() {
    this.animations = [];

    // Titles.
    // this.animationsParagraphs = map(
    //   this.mapValidator(this.elements.animationsParagraphs),
    //   element => {
    //     return new Paragraph({
    //       element
    //     });
    //   }
    // );

    // this.animations.push(...this.animationsParagraphs);

    this.animationsFadeIn = map(
      this.mapValidator(this.elements.animationsFadeIn),
      (element) => {
        return new FadeIn({
          element,
        });
      }
    );

    this.animations.push(...this.animationsFadeIn);

    this.animationsFadeInText = map(
      this.mapValidator(this.elements.animationsFadeInText),
      (element) => {
        return new FadeInText({
          element,
        });
      }
    );

    this.animations.push(...this.animationsFadeInText);

    // this.animationsLetterReveal = map(
    //   this.mapValidator(this.elements.animationsLetterReveal),
    //   element => {
    //     return new LetterReveal({
    //       element
    //     });
    //   }
    // );

    // this.animations.push(...this.animationsLetterReveal);

    this.animationsFadeInRight = map(
      this.mapValidator(this.elements.animationsFadeInRight),
      (element) => {
        return new FadeInRight({
          element,
        });
      }
    );

    this.animations.push(...this.animationsFadeInRight);
  }

  onResize() {
    each(this.animations, (animation) => animation.onResize());
  }

  convertToArrayIfSingleElement(element) {
    this.singleElement = [];

    if (!(element instanceof window.NodeList)) {
      this.singleElement.push(element);

      return this.singleElement;
    }
  }

  countAnimationElements(array) {
    if (array === null) return;

    let sum = 0;
    if (array.length > 1) {
      map(array, (_) => sum++);
    }
    return sum;
  }

  mapValidator(element) {
    this.aboveLengthOne = this.countAnimationElements(element);
    this.oneElAnimation = this.convertToArrayIfSingleElement(element);

    return this.aboveLengthOne > 1 ? element : this.oneElAnimation;
  }

  // positionAnimations() {
  //   gsap.to(this.splittedElements, {
  //     delay: 0.3,
  //     y: "100%",
  //     ease: "expo.out",
  //     duration: 1.185
  //   });
  // }

  // animateIn() {
  //   this.animate = gsap.timeline();

  //   this.animate.fromTo(
  //     this.splittedElements,
  //     {
  //       y: "100%",
  //       ease: "expo.out"
  //     },
  //     {
  //       y: 0,
  //       ease: "expo.out",
  //       duration: 1.5,
  //       stagger: 0.025
  //     }
  //   );
  // }
}
