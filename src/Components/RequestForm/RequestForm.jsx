import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { userDataName, userDataEmail, userDataPhone, userDataAddress, toggleValid } from '../../Store/Slices/Order';

import './RequestForm.scss';

export const RequestForm = () => {
  const [check, setCheck] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [addressDirty, setAddressDirty] = useState(false);
  const [nameError, setNameError] = useState('Поле имя не может быть пустым');
  const [emailError, setEmailError] = useState('Поле почта не может быть пустым');
  const [phoneError, setPhoneError] = useState('Поле телефон не может быть пустым');
  const [addressError, setAddressError] = useState('Поле адрес не может быть пустым');
  
  const blurHandler = (event) => {
    switch (event.target.name) {
      case 'name':
        setNameDirty(true);
        break
      case 'email':
        setEmailDirty(true);
        break
      case 'phone':
        setPhoneDirty(true);
        break
      case 'address':
        setAddressDirty(true);
        break
    }
  };
  
  const dispatch = useDispatch();
  
  const toggleChecked = () => {
    setCheck(!check);
  };
  
  const changeName = (event) => {
    setName(event.target.value);
    
    if (event.target.value.length < 3 ) {
      setNameError('Имя должно быть длиннее 3')
    } else {
      setNameError('');
    }
  };
  
  const changeEmail = (event) => {
    setEmail(event.target.value);
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (!re.test(String(event.target.value).toLowerCase())) {
      setEmailError('Некорректная почта');
    } else setEmailError('');
  };
  
  const changePhone = (event) => {
    setPhone(event.target.value);
    const re = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
  
    if (!re.test(String(event.target.value).toLowerCase())) {
      setPhoneError('Некорректный номер');
    } else setPhoneError('');
  };
  
  const changeAddress = (event) => {
    setAddress(event.target.value);
  
    if (event.target.value.length < 7 ) {
      setAddressError('Адрес должен быть длиннее 7')
    } else setAddressError('');
  };
  
  const isValid = !(nameDirty && emailDirty && phoneDirty && addressDirty && check && nameError === "" && phoneError === "" && emailError === "" && addressError === "");
  
  useEffect(() => {
    dispatch(userDataName({name}));
    dispatch(userDataEmail({email}));
    dispatch(userDataPhone({phone}));
    dispatch(userDataAddress({address}));
    dispatch(toggleValid({isValid}))
  }, [name, email, phone, address, nameDirty, emailDirty, phoneDirty, addressDirty, check, nameError, emailError, phoneError, addressError]);
  
  return (
    <div className="request-form">
      <h3 className="request-form__title title">Заполните данные</h3>
      <div className="request-form__elements">
        <div className="request-form__elements__input-wrapper">
          {(nameDirty && nameError) && <div className="request-form__elements__input-wrapper--error">{nameError}</div>}
          <input type="text"
                 name="name"
                 value={name}
                 onChange={changeName}
                 onBlur={blurHandler}
                 className="request-form__elements__input-wrapper--input"
                 placeholder="Ваше имя"
          />
        </div>
        <div className="request-form__elements__input-wrapper">
          {(emailDirty && emailError) && <div className="request-form__elements__input-wrapper--error">{emailError}</div>}
          <input type="text"
                 name="email"
                 value={email}
                 onChange={changeEmail}
                 onBlur={blurHandler}
                 className="request-form__elements__input-wrapper--input"
                 placeholder="Ваша почта"
          />
        </div>
        <div className="request-form__elements__input-wrapper">
          {(phoneDirty && phoneError) && <div className="request-form__elements__input-wrapper--error">{phoneError}</div>}
          <input type="tel"
                 name="phone"
                 value={phone}
                 onChange={changePhone}
                 onBlur={blurHandler}
                 className="request-form__elements__input-wrapper--input"
                 placeholder="Ваш телефон"
          />
        </div>
        <div className="request-form__elements__input-wrapper">
          {(addressDirty && addressError) && <div className="request-form__elements__input-wrapper--error">{addressError}</div>}
          <input type="text"
                 name="address"
                 value={address}
                 onChange={changeAddress}
                 onBlur={blurHandler}
                 className="request-form__elements__input-wrapper--input"
                 placeholder="Ваш адрес"
          />
        </div>
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
