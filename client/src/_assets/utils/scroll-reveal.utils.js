"use client";

import React, { useEffect, useRef, useMemo } from "react";

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
}) => {
  const containerRef = useRef(null);

  // --- Parseur récursif : strings -> <span.word>, garde <br/>, ignore les zones no-split
  const processNode = (node, keyBase = "n") => {
    if (typeof node === "string") {
      const out = [];
      node.split(/(\s+)/).forEach((token, i) => {
        if (!token) return;
        if (/^\s+$/.test(token)) {
          out.push(token);
        } else {
          out.push(
            <span className="inline-block word" key={`${keyBase}-w-${i}`}>
              {token}
            </span>
          );
        }
      });
      return out;
    }
    if (node == null || node === false) return null;
    if (React.isValidElement(node) && node.type === "br") {
      return React.cloneElement(node, { key: `${keyBase}-br` });
    }
    if (React.isValidElement(node)) {
      const props = node.props || {};
      const className = props.className || "";
      if (props["data-nosplit"] || className.includes("no-split")) {
        return React.cloneElement(node, { key: keyBase }); // ne touche pas aux enfants
      }
      const childArray = React.Children.toArray(props.children);
      const processed = childArray.flatMap((c, idx) =>
        processNode(c, `${keyBase}-${idx}`)
      );
      return React.cloneElement(node, { key: keyBase }, processed);
    }
    return node;
  };

  const splitTree = useMemo(() => {
    const arr = React.Children.toArray(children);
    return arr.flatMap((n, i) => processNode(n, `root-${i}`));
  }, [children]);

  useEffect(() => {
    let cleanup = () => {};
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/dist/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const el = containerRef.current;
      if (!el) return;

      const scroller =
        scrollContainerRef && scrollContainerRef.current
          ? scrollContainerRef.current
          : window;

      // (optionnel) anim conteneur
      gsap.fromTo(
        el,
        { transformOrigin: "0% 50%", rotate: baseRotation },
        {
          ease: "none",
          rotate: 0,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom",
            end: rotationEnd,
            scrub: true,
          },
        }
      );

      // Un trigger par bloc
      const blocks = el.querySelectorAll(".reveal-block");

      blocks.forEach((block) => {
        const words = block.querySelectorAll(".word");
        const medias = block.querySelectorAll(
          "img, picture, video, [data-reveal-media]"
        );
        // 👇 textes non splittés à l'intérieur de data-nosplit
        const nonSplitTexts = block.querySelectorAll(
          "[data-nosplit] span, [data-nosplit] p, [data-nosplit] strong, [data-nosplit] em"
        );

        // états initiaux
        if (words.length) {
          gsap.set(words, {
            opacity: baseOpacity,
            filter: enableBlur ? `blur(${blurStrength}px)` : "none",
            willChange: "opacity, filter",
          });
        }
        if (nonSplitTexts.length) {
          gsap.set(nonSplitTexts, {
            opacity: baseOpacity,
            filter: enableBlur ? `blur(${blurStrength}px)` : "none",
            willChange: "opacity, filter",
          });
        }
        if (medias.length) {
          gsap.set(medias, {
            opacity: 0,
            y: 0,
            willChange: "transform, opacity",
          });
        }

        // timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: block,
            scroller,
            start: "top 65%",
            end: "bottom 55%",
            scrub: true,
          },
        });

        if (medias.length) {
          tl.to(medias, { opacity: 1, y: 0, ease: "none", stagger: 0.05 }, 0);
        }
        if (words.length) {
          tl.to(
            words,
            {
              opacity: 1,
              filter: "blur(0px)",
              ease: "none",
              stagger: 0.05,
            },
            0
          );
        }
        if (nonSplitTexts.length) {
          tl.to(
            nonSplitTexts,
            {
              opacity: 1,
              filter: "blur(0px)",
              ease: "none",
              stagger: 0.05,
            },
            0
          );
        }
      });

      cleanup = () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    })();

    return () => cleanup();
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
  ]);

  return (
    <div ref={containerRef} className={`my-5 ${containerClassName}`}>
      <div
        className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-thin ${textClassName}`}
      >
        {splitTree}
      </div>
    </div>
  );
};

export default ScrollReveal;
