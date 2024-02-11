import { useRef, useEffect } from "react";

const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let particles: { x: number; y: number; speed: number; radius: number }[] =
      [];

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        particles = []; // Reset particles array when canvas is resized
      }
    };

    const animate = () => {
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Generate new particle
        if (Math.random() < 0.05) {
          particles.push({
            x: Math.random() * canvas.width,
            y: -10, // Start above the canvas
            speed: 1 + Math.random() * 3, // Random speed
            radius: 2 + Math.random() * 3, // Random radius
          });
        }

        // Update and draw particles
        particles.forEach((particle, index) => {
          particle.y += particle.speed;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.fill();

          // Remove particles that exit the canvas
          if (particle.y - particle.radius > canvas.height) {
            particles.splice(index, 1);
          }
        });

        requestAnimationFrame(animate);
      }
    };

    // Start animation
    animate();

    // Resize canvas initially and whenever parent div resizes
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div ref={divRef} className="flex-1 flex-col justify-center items-center h-full">
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%" }}
        data-paper-resize
      ></canvas>
    </div>
  );
};

export default Home;
