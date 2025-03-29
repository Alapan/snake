import { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gridSize = 50;
  const boundaryWidth = 5;

  const drawGrid = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'green';
      ctx.lineWidth = 1;

      // Grid lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Grid boundaries
      ctx.strokeStyle = 'black';
      ctx.lineWidth = boundaryWidth;
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(canvas.width, 0);
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.lineTo(0, 0);
      ctx.closePath();
      ctx.stroke();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
  
    if (canvas && ctx) {
      canvas.width = 600;
      canvas.height = 600;

      drawGrid(canvas, ctx);
    };
  }, []);

  return (
    <>
      <h1>Snake Game</h1>
      <canvas ref={canvasRef} />  
    </>

  );
}

export default App;
