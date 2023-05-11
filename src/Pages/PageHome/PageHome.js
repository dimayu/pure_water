import { useSelector } from 'react-redux';
import { useState } from 'react';

import {
  ProductSelection,
  Promo,
  RequestForm,
  TimeDelivery,
  Total,
  CheckoutTitle,
  CheckoutOrder,
  CheckoutDescription
} from "../../Components";

export const PageHome = () => {
  const order = useSelector(state => state.order);
  const [checkout, setCheckout] = useState(true);
  const valid = useSelector(state => state.order.user.valid);
  const [nextForm, setNextForm] = useState(false);
  const [nextProduct, setNextProduct] = useState(false);
  
  const toggleCheckout = () => {
    setCheckout(!checkout);
  };
  
  //Отправляем заказ на бекенд, нужно сделать асинхронный запрос
  const sendOrder = () => {
    console.log(order);
    setCheckout(!checkout);
  }
  
  const handlerNext = () => {
    setNextForm(!nextForm);
  }
  
  const handlerNextProduct = () => {
    setNextProduct(!nextProduct);
  }
  
  const handlerBack = () => {
    setNextProduct(!nextProduct);
  }
  
  return (
    <div className="wrapper-checkout">
      <Promo className={nextForm ? `promo promo-mobile--inactive` : `promo`}/>
      <button
        className={nextForm ? `btn--inactive` : `btn btn-mobile`}
        onClick={handlerNext}
      >Далее</button>
      {checkout
        ? <div className={nextForm ? `form form-mobile--active` : `form`}>
          <RequestForm className={nextForm && !nextProduct ? `request-form--active` : ``}/>
          <button
            className={nextForm && !nextProduct ? `btn btn-mobile` : `btn--inactive`}
            onClick={handlerNextProduct}
          >Далее</button>
          <div className={nextProduct ? `products products--active` : `products`}>
            <button
              className={nextProduct ? `btn btn-mobile btn--prev` : `btn--inactive`}
              onClick={handlerBack}
            >Назад</button>
            {valid && <div className="form-error">Не верно заполнена форма заказа</div>}
            <ProductSelection/>
            <TimeDelivery/>
          </div>
          <Total className={nextProduct ? `total total--active` : `total`}/>
          <button
            onClick={sendOrder}
            className={nextProduct ? `btn btn-order btn--active` : `btn btn-order`}
            disabled={valid}
          >Заказать воду
          </button>
        </div>
        : <div className="form checkout">
          <CheckoutTitle/>
          <CheckoutOrder/>
          <Total className={nextProduct ? `total total--active` : `total`}/>
          <CheckoutDescription/>
          <button
            onClick={toggleCheckout}
            className="btn btn--new-order"
          >Новый заказ
          </button>
        </div>
      }
    </div>
  );
};