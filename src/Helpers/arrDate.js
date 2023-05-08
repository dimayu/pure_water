const date = new Date();
const weekDay = date.getDay();
const monthDay = date.getDate();
const month = date.getMonth();

export const arrWeek = [];

const getWeek = () => {
  const countDayOnMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const weeks = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Cб', 'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Cб', 'Вс'];
  
  let countMonthDay;
  
  if (weekDay > 1) {
    countMonthDay = monthDay - (weekDay - 1);
    
  } else if (weekDay === 0) {
    countMonthDay = monthDay - 6;
    
  } else {
    countMonthDay = monthDay;
  }
  
  for (let i = 0; i < 14; i++) {
    if ((countMonthDay + i) > countDayOnMonth[month] && i > weekDay - 1) {
      let count = countDayOnMonth[month] - (countMonthDay + (weeks.length - 1));
      arrWeek.push({day: weeks[i], date: count + i});
      
    } else {
      if (i > weekDay - 1) {
        arrWeek.push({day: weeks[i], date: countMonthDay + i, check: weeks[i] === 'Cб' || weeks[i] === 'Вс' ? 'weekend' : 'weekday'});
      }
    }
    
  }
}

getWeek();