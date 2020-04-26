export const generateID = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

export const getMonth = (date) => {
  let month = "";

  switch (date.getMonth()) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
    default:
      break;
  }

  return month;
};

export const sortSets = (array) => {
  //eslint-disable-next-line
  return array.sort((a,b) => b.date - a.date);
}
