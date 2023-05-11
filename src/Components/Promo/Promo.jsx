import './Promo.scss';

export const Promo = ({className}) => {
  return (
    <div className={className}>
      <img src="img/logo.svg" alt="logo" className="promo__img"/>
      <h1 className="promo__title title">Чистая Вода</h1>
      <p className="promo__description">Питьевая вода, предназначенная для ежедневного потребления, идеально подходит
        для кулеров. Закажите доставку воды и мы привезем её на дом или в офис.</p>
    </div>
  );
};
