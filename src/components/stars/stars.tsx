import Star from '../star/star';

export default function Stars({speed, color, x}: any) {
  const delay = Math.random() * 10;
  const LIMIT = 30;
  const colorsArray = ['', 'blue', 'green', 'red'];
  const speedArray = ['', 'slow', 'fast'];
  const shapes = ['', 'five-point'];
  let stars = [];

  for (let i = 0; i < LIMIT; i++) {
    const colorIdx = Math.floor(Math.random() * 10 % 3);
    const speedIdx = Math.floor(Math.random() * 10 % 3);
    const shapeIdx = Math.floor(Math.random() * 10 % 2);
    const xPos = (Math.random() * 100);
    stars.push(
      <Star key={i} speed={speedArray[speedIdx]} x={xPos} color={colorsArray[colorIdx]} shape={shapes[shapeIdx]}/>
    )
  }

  return (
    <>
     {stars}
    </>
  );
}