import { useRef, useEffect } from 'react';

const ResizingCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      ctx.canvas.height = window.innerHeight - 57;
      ctx.canvas.width = window.innerWidth;
      drawCheckerboard(ctx);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

function drawCheckerboard(ctx: CanvasRenderingContext2D) {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const tileSize = 50; // Size of the checkerboard tiles

  for (let i = 0; i < width / tileSize; i++) {
    for (let j = 0; j < height / tileSize; j++) {
      if ((i + j) % 2 === 0) {
        ctx.fillStyle = 'black';
      } else {
        ctx.fillStyle = 'white';
      }
      ctx.fillRect(i * tileSize, j * tileSize, tileSize, tileSize);
    }
  }
}

export default ResizingCanvas;
