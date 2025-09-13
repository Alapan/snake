import { useEffect, useState } from 'react';
import Box from '../Box/Box';

interface SnakeProps {
  boxSize: number;
  numberOfBoxes: number;
};

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
interface Coordinate {
  x: number;
  y: number;
}

const Snake = ({ boxSize, numberOfBoxes }: SnakeProps) => {
  const [segmentCoordinates, setSegmentCoordinates] = useState<Array<Coordinate>>([]);

  const populateSegmentCoordinates = () => {
    const coordinates = [];
    for (let i = 0; i < numberOfBoxes; i++) {
      coordinates.push({ x: i * boxSize, y: 0 });
    }
    setSegmentCoordinates(coordinates);
  };

  const updateCoordinates = (direction: Direction) => {
    setSegmentCoordinates((prevCoordinates) => {
      const head = prevCoordinates[prevCoordinates.length - 1];
      let newHead: Coordinate;

      if (direction === 'RIGHT') {
        newHead = { x: head.x + boxSize, y: head.y };
      } else if (direction === 'LEFT') {
        newHead = { x: head.x - boxSize, y: head.y };
      } else if (direction === 'UP') {
        newHead = { x: head.x, y: head.y - boxSize };
      } else if (direction === 'DOWN') {
        newHead = { x: head.x, y: head.y + boxSize };
      } else {
        newHead = { x: head.x, y: head.y };
      }
      return [...prevCoordinates.slice(1), newHead];
    });
  };

  useEffect(() => {
    populateSegmentCoordinates();

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          updateCoordinates('UP');
          break;
        case 'ArrowDown':
          updateCoordinates('DOWN');
          break;
        case 'ArrowLeft':
          updateCoordinates('LEFT');
          break;
        case 'ArrowRight':
          updateCoordinates('RIGHT');
          break;
        default:
          break;
      };
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);


  return (
    <>
      {segmentCoordinates.map(({x, y}) => {
        return <Box key={`${x}-${y}`} x={x} y={y} width={boxSize} height={boxSize} />
      })}
    </>
  );
};

export default Snake;
