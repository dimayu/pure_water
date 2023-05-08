import { ProductSelection, Promo, RequestForm, TimeDelivery, Total } from "../index";

import './App.scss';

export const App = () => {
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
            <button className="btn">Заказать воду</button>
          </div>
        </div>
    );
};
