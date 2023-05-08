import React from "react";
import Slider from "react-slick";

import { timesDelivery } from '../../Data/Data';
import { arrWeek } from '../../Helpers/arrDate';

import './TimeDelivery.scss';

export const TimeDelivery = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    variableWidth: true
  };
  
  return (
    <div className="time-delivery">
      <h3 className="time-delivery__title subtitle">Дата и время доставки</h3>
      <h5 className="time-delivery__subtitle">День</h5>
      <Slider {...settings} className="slider-days">
        {arrWeek.map((item, index) => (
          <div key={item.date} className="slider-days__item">
            <input type="radio"
                   name="date"
                   id={"" + index}
                   className="slider-days__item--input"
            />
            <label htmlFor={"" + index}
                   className="slider-days__item--label"
            >
              <p className="slider-days__item__date">{item.date}</p>
              <p className={item.check === "holiday"
                ? `slider-days__item__day slider-days__item__day--holiday`
                : `slider-days__item__day`}
              >
                {item.day}
              </p>
            </label>
          </div>
        ))}
      </Slider>
      <h5 className="time-delivery__subtitle">Время</h5>
      <div className="time-delivery__items">
        {
          timesDelivery[0].weekdays.map((item, index) =>
            (<div
              key={index}
              className="time-delivery__items__item"
            >
              <input type="radio"
                     name="time"
                     id={`time-` + index}
                     className="time-delivery__items__item--input"
              />
              <label htmlFor={`time-` + index}
                     className="time-delivery__items__item--label"
              >
                {item.start} - {item.end}
              </label>
            </div>)
          )
        }
      </div>
    </div>
  );
};
