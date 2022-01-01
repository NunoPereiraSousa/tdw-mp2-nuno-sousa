import EventEmitter from "events";
import each from "lodash/each";
import map from "lodash/map";
import Paragraph from "../animations/Paragraph";

export default class Component {
  constructor() {
    this.selector;
    this.selectorChildren = {
      animationsParagraphs: "[data-animation='paragraph']",
    };

    console.log("component");

    // this.create();

    this.addEventListeners();
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

    console.log(this.elements);

    this.createAnimations();
  }

  createAnimations() {
    this.animations = [];

    // Titles.
    this.animationsParagraphs = map(
      this.mapValidator(this.elements.animationsParagraphs),
      (element) => {
        return new Paragraph({
          element,
        });
      }
    );

    this.animations.push(...this.animationsParagraphs);
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

  // create() {
  //   if (
  //     this.selector instanceof window.HTMLElement ||
  //     this.selector instanceof window.SVGSVGElement ||
  //     this.selector instanceof window.SVGElement
  //   ) {
  //     this.element = this.selector;
  //   } else {
  //     this.element = document.querySelector(this.selector);
  //   }

  //   this.elements = {};

  //   each(this.selectorChildren, (entry, key) => {
  //     if (
  //       entry instanceof window.HTMLElement ||
  //       entry instanceof window.NodeList ||
  //       entry instanceof window.SVGElement ||
  //       entry instanceof window.SVGSVGElement ||
  //       Array.isArray(entry)
  //     ) {
  //       this.elements[key] = entry;

  //       console.log(this.elements[key]);
  //     } else {
  //       this.elements[key] = document.querySelectorAll(entry);

  //       if (this.elements[key].length === 0) {
  //         this.elements[key] = null;
  //       } else if (this.elements[key].length === 1) {
  //         this.elements[key] = document.querySelector(entry);
  //       }
  //     }
  //   });

  //   console.log(this.elements);
  // }

  addEventListeners() {}

  removeEventListeners() {}
}
