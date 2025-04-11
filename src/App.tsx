import { useRef } from 'react';
import './App.css';
import { Grid } from './components/Grid';
import { Snake } from './components/Snake';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gridSize = 50;

  return (
    <>
      <h1>Snake Game</h1>
      <div className='canvas-wrapper'>
        <canvas ref={canvasRef} className='game-canvas' />
        <Snake gridSize={gridSize} gridWidth={4} gridHeight={1}/>
      </div>

      <Grid canvasRef={canvasRef} gridSize={gridSize}/>
    </>
  );
}

export default App;
