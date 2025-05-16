import { useRef, useEffect } from "react";

const NUM_BEAMS = 12;
const SPEED = 1.2;
const COLORS = ["#fff", "#e63946", "#a8dadc", "#457b9d", "#f1faee"];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

const BeamsBackground = () => {
  const canvasRef = useRef(null);
  const beams = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener("resize", resize);
    resize();

    // Initialize beams
    beams.current = Array.from({ length: NUM_BEAMS }, () => ({
      x: randomBetween(0, width),
      y: randomBetween(0, height),
      length: randomBetween(height * 0.5, height * 1.2),
      angle: randomBetween(-0.2, 0.2) + Math.PI / 2,
      speed: randomBetween(0.5, SPEED),
      width: randomBetween(2, 5),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      opacity: randomBetween(0.08, 0.18),
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";
      for (const beam of beams.current) {
        ctx.save();
        ctx.globalAlpha = beam.opacity;
        ctx.strokeStyle = beam.color;
        ctx.lineWidth = beam.width;
        ctx.beginPath();
        ctx.moveTo(
          beam.x - Math.cos(beam.angle) * beam.length / 2,
          beam.y - Math.sin(beam.angle) * beam.length / 2
        );
        ctx.lineTo(
          beam.x + Math.cos(beam.angle) * beam.length / 2,
          beam.y + Math.sin(beam.angle) * beam.length / 2
        );
        ctx.stroke();
        ctx.restore();
        // Move beam
        beam.y += beam.speed;
        if (beam.y - beam.length / 2 > height) {
          beam.x = randomBetween(0, width);
          beam.y = -beam.length / 2;
          beam.length = randomBetween(height * 0.5, height * 1.2);
          beam.angle = randomBetween(-0.2, 0.2) + Math.PI / 2;
          beam.speed = randomBetween(0.5, SPEED);
          beam.width = randomBetween(2, 5);
          beam.color = COLORS[Math.floor(Math.random() * COLORS.length)];
          beam.opacity = randomBetween(0.08, 0.18);
        }
      }
      animationId = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        background: "#111"
      }}
    />
  );
};

export default BeamsBackground; 