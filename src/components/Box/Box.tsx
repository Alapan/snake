import { CSSProperties } from 'react';

interface BoxProps {
  x: number;
  y: number;
  width: number;
  height: number;
};

const Box = ({
  x,
  y,
  width,
  height,
}: BoxProps) => {

  const boxStyle: CSSProperties = {
    position: 'absolute',
    left: x,
    top: y,
    width: width,
    height: height,
    backgroundColor: 'skyblue',
  };

  return (
    <div style={boxStyle} />
  ); 
};

export default Box;
