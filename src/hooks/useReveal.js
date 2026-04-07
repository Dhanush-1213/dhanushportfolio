import { useEffect, useRef, useState } from "react";

/**
 * Custom hook to detect when an element enters the viewport using IntersectionObserver.
 * @param {object} options - IntersectionObserver options (root, rootMargin, threshold)
 * @returns [ref, isVisible]
 */
export default function useReveal(options = { threshold: 0.15 }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Once visible, we can unobserve if we only want the animation to happen once
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      }
    }, options);

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
}
