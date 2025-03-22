import TItem from "../models/item";


const sortDates = (dateList: TItem[]) => {
  dateList.sort((first: TItem, second: TItem) => {
    const firstDate = 20 + first.date.split('.').reverse().join('-'); 
    const secondDate = 20 + second.date.split('.').reverse().join('-'); 
    return Date.parse(secondDate) - Date.parse(firstDate); 
  });
};

export default sortDates;
