import { timesDelivery } from '../../Data/Data'

import './TimeDelivery.scss';

export const TimeDelivery = () => {
  return (
    <div className="time-delivery">
      <h3 className="time-delivery__title subtitle">Дата и время доставки</h3>
      <h5 className="time-delivery__subtitle">День</h5>
      <h5 className="time-delivery__subtitle">Время</h5>
      {
        timesDelivery[0].weekdays.map((item, index) =>
          (<div
            key={index}
            className="time-delivery__time"
          >
            {item.start} - {item.end}
          </div>)
        )
      }
    </div>
  );
};
