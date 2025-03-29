import { RefObject, useEffect } from 'react';

interface GridProps {
  canvasRef: RefObject<HTMLCanvasElement | null>;
  gridSize: number;
}

export const Grid = ({
  canvasRef,
  gridSize,
}: GridProps) => {
  
  const boundaryWidth = 5;

  const drawGrid = (
    ctx: CanvasRenderingContext2D,
    canvasWidth: number,
    canvasHeight: number
) => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 1;

    // Grid lines
    for (let x = 0; x < canvasWidth; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvasHeight);
      ctx.stroke();
    }

    for (let y = 0; y < canvasHeight; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvasWidth, y);
      ctx.stroke();
    }

    // Grid boundaries
    ctx.strokeStyle = 'black';
    ctx.lineWidth = boundaryWidth;
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(canvasWidth, 0);
    ctx.lineTo(canvasWidth, canvasHeight);
    ctx.lineTo(0, canvasHeight);
    ctx.lineTo(0, 0);
    ctx.closePath();
    ctx.stroke();
  };

  useEffect(() => {
    const canvas = canvasRef?.current;
    if (canvas) {
      canvas.width = 600;
      canvas.height = 600;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        drawGrid(ctx, canvasWidth, canvasHeight);
      }
    }
  }, []);

  return null;
};
