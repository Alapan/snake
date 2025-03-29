import { useRef } from 'react';
import './App.css';
import { Grid } from './components/Grid';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <>
      <h1>Snake Game</h1>
      <canvas ref={canvasRef}>
        <Grid canvasRef={canvasRef} />
      </canvas>  
    </>

  );
}

export default App;
