import { products } from '../../Data/Data'

import './ProductSelection.scss';

export const ProductSelection = () => {
  return (
    <div className="product-selection">
      <h3 className="product-selection__title subtitle">Вода</h3>
      {products.map(item => (
        <div className="product-selection__item" key={item.id}>
          <input type="checkbox-1" id="checkbox"/>
          <label htmlFor="checkbox-1"></label>
          <div className="product-selection__item__custom-checkbox"></div>
          <div className="product-selection__item__size">{item.size} л</div>
          <div className="product-selection__item__amount">{item.amount} шт</div>
          <div className="product-selection__item__price">{item.price} ₽</div>
          {item.size === "18,9"
            ? <img src="img/bottle-1.svg" alt="pic"/>
            : <img src="img/bottle-2.svg" alt="pic"/>
          }
        </div>
      ))}
    </div>
  );
};
