import { useEffect, useState } from 'react';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';

interface SnakeProps {
  gridSize: number;
  gridWidth: number;
  gridHeight: number;
  canvasHeight: number;
  canvasWidth: number;
};

type DirectionKey = 'ArrowLeft' | 'ArrowRight' | 'ArrowUp' | 'ArrowDown';

interface Position {
  x: number;
  y: number;
};

export const Snake = ({
  gridSize,
  gridWidth,
  gridHeight,
  canvasHeight,
  canvasWidth,
}: SnakeProps) => {

  const [ direction, setDirection ] = useState<DirectionKey>('ArrowRight');
  const [ position, setPosition ] = useState<Position>({x: 0, y: 0});
  const { rive, RiveComponent } = useRive({
    src: 'snake.riv',
    artboard: 'Snake Artboard',
    stateMachines: 'Main',
    autoplay: true,
  });

  const width = gridWidth * gridSize;
  const height = gridHeight * gridSize;

  const isMovingInput = useStateMachineInput(rive, 'Main', 'isMoving');

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const delta = gridSize;
        const nextPos: Position = { ...prev };

        switch (direction) {
          case 'ArrowLeft':
            nextPos.x = Math.max(prev.x - delta, 0);
            break;
          case 'ArrowRight':
            nextPos.x = Math.min(prev.x + delta, canvasWidth - width);
            break;
          case 'ArrowUp':
            nextPos.y = Math.max(prev.y - delta, 0);
            break;
          case 'ArrowDown':
            nextPos.y = Math.min(prev.y + delta, canvasHeight - height);
            break;
          default:
            return nextPos;
        }
        return nextPos;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [direction, gridSize, gridWidth, gridHeight]);

  useEffect(() => {
    if (!isMovingInput) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      isMovingInput.value = true;

      switch (event.key) {
        case 'ArrowLeft':
          setDirection('ArrowLeft');
          break;
        case 'ArrowRight':
          setDirection('ArrowRight');
          break;
        case 'ArrowUp':
          setDirection('ArrowUp');
          break;
        case 'ArrowDown':
          setDirection('ArrowDown');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMovingInput]);

  return (
    <div className='snake-wrapper'>
      <div
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        <RiveComponent />
      </div>
    </div>
  );
};
