import { useRef } from 'react';
import './App.css';
import { Grid } from './components/Grid';
import { Snake } from './components/Snake';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasWidth = 600;
  const canvasHeight = 600;
  const gridSize = 50;

  return (
    <>
      <h1>Snake Game</h1>
      <div className='canvas-wrapper'>
        <canvas ref={canvasRef} className='game-canvas' />
        <Snake
          gridSize={gridSize}
          gridWidth={4}
          gridHeight={1}
          canvasHeight={canvasHeight}
          canvasWidth={canvasWidth}
        />
      </div>

      <Grid
        canvasRef={canvasRef}
        gridSize={gridSize}
        canvasHeight={canvasHeight}
        canvasWidth={canvasWidth}
      />
    </>
  );
}

export default App;
