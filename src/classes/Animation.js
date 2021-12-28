import Component from './Component.js'

export default class Animation extends Component {
  constructor ({ element, elements }) {
    super({
      element,
      elements
    })

    this.createObserver()
  }

  createObserver () {
    this.observer = new window.IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateIn()

          observer.unobserve(entry.target)
        }
        // else {
        //   this.animateOut();
        // }
      })
    })

    if (this.element != null || this.element != undefined) {
      this.observer.observe(this.element)
    }
  }

  onResize () {}
}
