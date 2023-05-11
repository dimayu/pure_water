import './CheckoutTitle.scss';

export const CheckoutTitle = () => {
  
  return (
    <div className="checkout__title">
      <div className="checkout__title--img">
        <img src="img/check.svg" alt="check"/>
      </div>
      <div className="checkout__title--text">Заказ оформлен</div>
    </div>
  );
};