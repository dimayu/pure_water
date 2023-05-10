import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { products } from '../../Data/Data';
import { Counter } from '../Counter';
import { choiceProductSize, choiceProductPrice } from '../../Store/Slices/Order';

import './ProductSelection.scss';

export const ProductSelection = () => {
  const dispatch = useDispatch();
  const [productChecked, setProductChecked] = useState(products.find(product => (product.checked === true)));
  
  const changeProduct = (event, id) => {
    products.forEach((product) => product.id === id
      ? product.checked = true
      : product.checked = false);
    setProductChecked(products.find(product => (product.checked === true)));
  };
  
  const productSize = productChecked.size;
  const productPrice = productChecked.price;
  
  useEffect(() => {
    dispatch(choiceProductSize({productSize}));
    dispatch(choiceProductPrice({productPrice}));
  }, [productChecked]);
  
  return (
    <div className="product-selection">
      <h3 className="product-selection__title subtitle">Вода</h3>
      <div className="product-selection__items">
        {products.map(item => (
          <div className="product-selection__items__item" key={item.id}>
            <input type="radio"
                   id="radio-product"
                   value={item.size}
                   checked={item.checked}
                   onChange={() => changeProduct(event, item.id)}
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
