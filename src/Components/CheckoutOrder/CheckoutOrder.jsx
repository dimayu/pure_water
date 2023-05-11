import { useSelector } from 'react-redux';

import './CheckoutOrder.scss';

export const CheckoutOrder = () => {
  const order = useSelector(state => state.order);
  const month = order.order.dateDelivery.split(',')[1];
  const monthCase = month === 'март' || month === 'август'
    ? month + 'а'
    : month.slice(0, -1) + 'я';
  
  return (
    <div className="checkout__order">
      <div className="checkout__order__row">
        <div className="checkout__order__row--title">{`Бутыль ${order.order.productTitle} л`}</div>
        <div className="checkout__order__row--value">{order.order.amount} шт</div>
      </div>
      <div className="checkout__order__row">
        <div className="checkout__order__row--title">{order.order.dateDelivery.split(',')[0] + " " + monthCase}</div>
        <div className="checkout__order__row--value">{order.order.timeDelivery}</div>
      </div>
      <div className="checkout__order__row">
        <div className="checkout__order__row--title">Адрес доставки</div>
        <div className="checkout__order__row--value">{order.user.address}</div>
      </div>
      <div className="checkout__order__row">
        <div className="checkout__order__row--title">Телефон</div>
        <div className="checkout__order__row--value">{order.user.phone}</div>
      </div>
    </div>
  );
};