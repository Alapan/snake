import { RefObject, useEffect } from 'react';

interface SnakeProps {
  canvasRef: RefObject<HTMLCanvasElement | null>;
  gridSize: number; 
};

export const Snake = ({
  canvasRef,
  gridSize
}: SnakeProps) => {

  const drawSnake = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, gridSize * 4, gridSize);
  };

  useEffect(() => {
    const canvas = canvasRef?.current;
    const ctx = canvas?.getContext('2d');

    if (canvas && ctx) {
      drawSnake(ctx);
    };
  }, []);

  return null;
};
