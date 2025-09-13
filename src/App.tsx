import { useRef } from 'react';
import './App.css';
import Grid from './components/Grid/Grid';
import Snake from './components/Snake/Snake';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const CANVAS_WIDTH = 600;
  const CANVAS_HEIGHT = 600;
  const BOX_SIZE = 50;

  return (
    <>
      <h1>Snake Game</h1>
      <div className='canvas-wrapper'>
        <canvas ref={canvasRef} className='game-canvas' />
        <Snake boxSize={BOX_SIZE} numberOfBoxes={4} />
      </div>

      <Grid
        canvasRef={canvasRef}
        boxSize={BOX_SIZE}
        canvasHeight={CANVAS_HEIGHT}
        canvasWidth={CANVAS_WIDTH}
      />
    </>
  );
}

export default App;
