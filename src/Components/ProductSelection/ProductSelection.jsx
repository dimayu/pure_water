import { products } from '../../Data/Data';
import { Counter } from '../Counter';

import './ProductSelection.scss';

export const ProductSelection = () => {
  
  return (
    <div className="product-selection">
      <h3 className="product-selection__title subtitle">Вода</h3>
      <div className="product-selection__items">
        {products.map(item => (
          <div className="product-selection__items__item" key={item.id}>
            <input type="radio"
                   id="radio-product"
                   name="radio-product"
                   className="product-selection__items__item__input"
            />
            <label htmlFor="radio-product"
                   className="product-selection__items__item__label"
            ></label>
            <div className="product-selection__items__item__size">{item.size} л</div>
            <div className="product-selection__items__item__amount">{item.amount} шт</div>
            <div className="product-selection__items__item__price">{item.price} ₽</div>
            {item.size === "18,9"
              ? <img src="img/bottle-1.svg" alt="pic" className="product-selection__items__item__img"/>
              : <img src="img/bottle-2.svg" alt="pic" className="product-selection__items__item__img"/>
            }
          </div>
        ))}
      </div>
      <Counter/>
    </div>
  );
};
