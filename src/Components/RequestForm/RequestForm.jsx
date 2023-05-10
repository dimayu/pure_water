import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { userDataName, userDataEmail, userDataPhone, userDataAddress } from '../../Store/Slices/Order';

import './RequestForm.scss';

export const RequestForm = () => {
  const [check, setCheck] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  
  const dispatch = useDispatch();
  
  const toggleChecked = () => {
    setCheck(!check);
  };
  
  const changeName = (event) => {
    setName(event.target.value);
  };
  
  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  
  const changePhone = (event) => {
    setPhone(event.target.value);
  };
  
  const changeAddress = (event) => {
    setAddress(event.target.value);
  };
  
  useEffect(() => {
    dispatch(userDataName({name}));
    dispatch(userDataEmail({email}));
    dispatch(userDataPhone({phone}));
    dispatch(userDataAddress({address}));
  }, [name, email, phone, address]);
  
  return (
    <div className="request-form">
      <h3 className="request-form__title title">Заполните данные</h3>
      <div className="request-form__elements">
        <input type="text"
               value={name}
               onChange={changeName}
               className="request-form__elements__input"
               placeholder="Ваше имя"
        />
        <input type="text"
               value={email}
               onChange={changeEmail}
               className="request-form__elements__input"
               placeholder="Ваша почта"
        />
        <input type="text"
               value={phone}
               onChange={changePhone}
               className="request-form__elements__input"
               placeholder="Ваш телефон"
        />
        <input type="text"
               value={address}
               onChange={changeAddress}
               className="request-form__elements__input"
               placeholder="Ваш адрес"
        />
        <div className="request-form__elements__checkbox-wrapper">
          <input type="checkbox"
                 id="checkbox"
                 checked={check}
                 onChange={toggleChecked}
                 className="request-form__elements__checkbox-wrapper--input"/>
          <label htmlFor="checkbox"
                 className="request-form__elements__checkbox-wrapper--label"
          >Я согласен на <a href="#">обработку персональных данных</a></label>
        </div>
      </div>
    </div>
  );
};
