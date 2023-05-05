import { ProductSelection, Promo, RequestForm, TimeDelivery, Total } from "../index";

import './App.scss';

export const App = () => {
    return (
        <div className="App">
          <Promo/>
          <RequestForm/>
          <ProductSelection/>
          <TimeDelivery/>
          <Total/>
          <button className="btn">Заказать воду</button>
        </div>
    );
};
