import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { decrement, increment } from '../../Store/Slices/Counter';
import { calcSum } from '../../Store/Slices/Order';

import './Counter.scss';

export const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const price = useSelector(state => state.order.order.productPrice);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(calcSum({count}));
  }, [count, price])
  
  return (
    <div className="counter">
      <div className="counter__prev"
           onClick={() => dispatch(decrement())}
      >-</div>
      <div className="counter__value">{count}</div>
      <div className="counter__next"
           onClick={() => dispatch(increment())}
      >+</div>
    </div>
  );
};