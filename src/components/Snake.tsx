import { useRive } from '@rive-app/react-canvas';

interface SnakeProps {
  gridSize: number;
  gridWidth: number;
  gridHeight: number;
};

export const Snake = ({
  gridSize,
  gridWidth,
  gridHeight,
}: SnakeProps) => {
  const { RiveComponent } = useRive({
    src: 'snake.riv',
    autoplay: true,
  });

  const width = gridWidth * gridSize;
  const height = gridHeight * gridSize

  return (
    <div
      className='snake-wrapper'
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: 'absolute',
        zIndex: 2,
      }}
    >
      <RiveComponent />
    </div>
  );
};
