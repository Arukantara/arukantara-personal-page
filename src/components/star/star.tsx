export default function Star({speed, color, x, shape}: any) {
  const delay = Math.random() * 10;

  return (
    <div className={`star ` + speed + ` ` + color + ` ` + shape} style={{ left: x + '%', animationDelay: delay + 's'}}>
    </div>
  );
}