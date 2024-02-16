import { useRef, useEffect, useState } from 'react';

type Particle = {
  x: number,
  y: number,
  vx: number,
  vy: number,
  life: number
}

const createParticle = (canvasWidth: number, canvasHeight: number) => {
  const angle = Math.random() * 2 * Math.PI; // Random angle
  const speed = Math.random() * 4 + 1; // Random speed
  return {
    x: canvasWidth / 2,
    y: canvasHeight / 2,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    life: Math.random() * 60 + 60, // Particle life in frames
  };
};

const draw = (ctx, particles: Particle[], particleColor: string) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear canvas for transparent background

  particles.forEach((particle, index) => {
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.life--;

    // Remove particle if it's out of bounds or life is over
    if (particle.x < 0 || particle.x > ctx.canvas.width || particle.y < 0 || particle.y > ctx.canvas.height || particle.life <= 0) {
      particles.splice(index, 1);
    } else {
      ctx.fillStyle = particleColor;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, 2, 0, 2 * Math.PI);
      ctx.fill();
    }
  });

  requestAnimationFrame(() => draw(ctx, particles, particleColor));
};

const ResizingCanvas = ({ particleColor }: { particleColor: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;

    const render = () => {
      // Add a new particle at a random interval
      if (Math.random() < 0.1) {
        setParticles((currentParticles) => [
          ...currentParticles,
          createParticle(ctx.canvas.width, ctx.canvas.height)
        ]);
      }

      draw(ctx, particles, particleColor);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      ctx.canvas.height = window.innerHeight - 57;
      ctx.canvas.width = window.innerWidth - 17;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particles, particleColor]);

  return <canvas ref={canvasRef} />;
};

export default ResizingCanvas;
