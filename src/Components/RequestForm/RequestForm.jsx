import './RequestForm.scss';

export const RequestForm = () => {
  return (
    <div className="request-form">
      <h3 className="request-form__title title">Заполните данные</h3>
      <div className="request-form__elements">
        <input type="text"
               className="request-form__elements__input"
               placeholder="Ваше имя"
        />
        <input type="text"
               className="request-form__elements__input"
               placeholder="Ваша почта"
        />
        <input type="text"
               className="request-form__elements__input"
               placeholder="Ваш телефон"
        />
        <input type="text"
               className="request-form__elements__input"
               placeholder="Ваш адрес"
        />
        <div className="request-form__elements__checkbox-wrapper">
          <input type="checkbox"
                 id="checkbox"
                 className="request-form__elements__checkbox-wrapper--input"/>
          <label htmlFor="checkbox"
                 className="request-form__elements__checkbox-wrapper--label"
          >Я согласен на <a href="#">обработку персональных данных</a></label>
        </div>
      </div>
    </div>
  );
};
