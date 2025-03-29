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
      <canvas ref={canvasRef}>
        <Grid canvasRef={canvasRef} gridSize={gridSize}/>
        <Snake canvasRef={canvasRef} gridSize={gridSize}/>
      </canvas>  
    </>

  );
}

export default App;
