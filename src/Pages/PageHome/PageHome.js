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
  
  const toggleCheckout = () => {
    setCheckout(!checkout);
  };
  
  //Отправляем заказ на бекенд, нужно сделать асинхронный запрос
  const sendOrder = () => {
    console.log(order);
    setCheckout(!checkout);
  }
  
  return (
    <>
      <Promo/>
      {checkout
        ? <div className="form">
          <RequestForm/>
          <div className="products">
            <ProductSelection/>
            <TimeDelivery/>
          </div>
          <Total/>
          <button
            onClick={sendOrder}
            className="btn"
            disabled={valid}
          >Заказать воду
          </button>
        </div>
        : <div className="form checkout">
          <CheckoutTitle/>
          <CheckoutOrder/>
          <Total/>
          <CheckoutDescription/>
          <button
            onClick={toggleCheckout}
            className="btn"
          >Новый заказ
          </button>
        </div>
      }
    </>
  );
};