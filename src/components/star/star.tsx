export default function Start({speed, color, x}) {
  const delay = Math.random() * 10;

  return (
    <div className={`star ` + speed + ` ` + color} style={{ left: x + '%', animationDelay: delay + 's'}}>
    </div>
  );
}