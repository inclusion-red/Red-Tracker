const MONTHS = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

function formatDate(date) {
  let dateObj = new Date(date);
  if(!dateObj.getMonth()) return '';
  return `${MONTHS[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()  > 9 ? dateObj.getMinutes() : `0${dateObj.getMinutes()}`}`;
}

export { formatDate };
