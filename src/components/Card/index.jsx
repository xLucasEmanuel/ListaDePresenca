import './style.css'
export function Card({ name, time }) {
  return (
    <div className='card'>
      <strong>{name}</strong>
      <strong>{time}</strong>

    </div>
  );
}

