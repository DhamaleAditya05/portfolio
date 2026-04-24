import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0, mouseY = 0;
    let curX = 0, curY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + "px";
      dot.style.top = mouseY + "px";
    };

    const animate = () => {
      curX += (mouseX - curX) * 0.12;
      curY += (mouseY - curY) * 0.12;
      cursor.style.left = curX + "px";
      cursor.style.top = curY + "px";
      requestAnimationFrame(animate);
    };
    animate();

    const handleMouseEnter = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1.8)";
      cursor.style.borderColor = "#22d3ee";
      cursor.style.backgroundColor = "rgba(34, 211, 238, 0.1)";
    };

    const handleMouseLeave = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
      cursor.style.borderColor = "rgba(34, 211, 238, 0.6)";
      cursor.style.backgroundColor = "transparent";
    };

    const interactiveEls = document.querySelectorAll("a, button, [data-cursor]");
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", handleMouseMove);

    // Hide on mobile
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      cursor.style.display = "none";
      dot.style.display = "none";
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] w-8 h-8 rounded-full border border-cyan-400/60 -translate-x-1/2 -translate-y-1/2 transition-transform duration-200"
        style={{ top: 0, left: 0 }}
      />
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] w-1.5 h-1.5 rounded-full bg-cyan-400 -translate-x-1/2 -translate-y-1/2"
        style={{ top: 0, left: 0 }}
      />
    </>
  );
}
