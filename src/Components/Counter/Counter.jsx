import './Counter.scss';

export const Counter = () => {
  
  return (
    <div className="counter">
      <div className="counter__prev">-</div>
      <div className="counter__value">1</div>
      <div className="counter__next">+</div>
    </div>
  );
};