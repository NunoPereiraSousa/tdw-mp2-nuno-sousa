import gsap from "gsap";
import { useRef, useEffect } from "react";

const Header = ({ title }) => {
  const h = useRef(null);
  const spans = useRef([]);
  // const spans = "";
  const arr = [1, 2, 3, 4];

  // if (typeof window !== "undefined") {
  //   spans = document.querySelectorAll(".hero__title span");
  //   console.log(spans);
  // }

  const marquee = (_) => {
    gsap
      .to(spans.current, {
        xPercent: -100,
        repeat: -1,
        duration: 8,
        ease: "linear",
      })
      .totalProgress(0.5);

    gsap.set(h.current, { xPercent: 0 });
  };

  useEffect(() => {
    marquee();
  }, []);

  return (
    <h1 className="hero__title" ref={h}>
      {arr.map((span, index) => (
        <span
          key={span}
          ref={(element) => {
            spans.current[index] = element;
          }}
        >
          {title}&nbsp;&nbsp;
        </span>
      ))}
    </h1>
  );
};

export default Header;
