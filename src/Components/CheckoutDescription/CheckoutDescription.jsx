import './CheckoutDescription.scss';
import { Link } from 'react-router-dom';

export const CheckoutDescription = () => {
  return (
    <div className="checkout__description">
      Ваш заказ <Link to="order">№221</Link> успешно оформлен. В ближайшее время по указанному телефону с Вами свяжется наш менеджер.
    </div>
  );
};