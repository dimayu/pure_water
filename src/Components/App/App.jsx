import { useSelector } from 'react-redux';

import { ProductSelection, Promo, RequestForm, TimeDelivery, Total } from "../index";

import './App.scss';

export const App = () => {
  const valid = useSelector(state => state.order.user.valid);
  
  return (
    <div className="App">
      <Promo/>
      <div className="form">
        <RequestForm/>
        <div className="products">
          <ProductSelection/>
          <TimeDelivery/>
        </div>
        <Total/>
        <button
          className="btn"
          disabled={valid}
        >Заказать воду</button>
      </div>
    </div>
  );
};
