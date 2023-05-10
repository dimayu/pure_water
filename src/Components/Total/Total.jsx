import { useSelector } from 'react-redux';

import './Total.scss';

export const Total = () => {
  const total = useSelector(state => state.order.order.total);
  
  return (
    <div className="total">
      <h3 className="total__title subtitle">Итого</h3>
      <p className="total__price">{total}<span>,00 ₽</span></p>
    </div>
  );
};
