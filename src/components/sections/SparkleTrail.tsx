import { useEffect, useCallback } from "react";

const SparkleTrail = () => {
  const createSparkle = useCallback((x: number, y: number) => {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = `${x - 4 + Math.random() * 8}px`;
    sparkle.style.top = `${y - 4 + Math.random() * 8}px`;
    sparkle.style.background = [
      "hsl(45 95% 58%)",
      "hsl(145 72% 46%)",
      "hsl(210 100% 60%)",
      "hsl(320 80% 58%)",
    ][Math.floor(Math.random() * 4)];
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 600);
  }, []);

  useEffect(() => {
    let throttle = false;
    const handleMove = (e: MouseEvent) => {
      if (throttle) return;
      throttle = true;
      setTimeout(() => {
        throttle = false;
      }, 50);
      createSparkle(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [createSparkle]);

  return null;
};

export default SparkleTrail;
