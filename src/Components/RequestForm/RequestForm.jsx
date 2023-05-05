import './RequestForm.scss';

export const RequestForm = () => {
  return (
    <form className="request-form">
      <h3 className="request-form__title">Заполните данные</h3>
      <input type="text" className="request-form__input"/>
      <input type="text" className="request-form__input"/>
      <input type="text" className="request-form__input"/>
      <input type="text" className="request-form__input"/>
      <div className="request-form__checkbox">
        <input type="checkbox" id="checkbox"/>
        <label htmlFor="checkbox">Я согласен на обработку персональных данных</label>
      </div>
    </form>
  );
};
