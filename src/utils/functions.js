export function getDate(time) {
  const today = new Date();
  switch (time) {
    case '1D':
      today.setDate(today.getDate());
      break;
    case '1M':
      today.setDate(today.getDate() - 30);
      break;
    case '3M':
      today.setDate(today.getDate() - 90);
      break;
    case '1Y':
      today.setDate(today.getDate() - 365);
      break;
    case '5Y':
      today.setDate(today.getDate() - 1825);
      break;
    default:
      today.setDate(today.getDate());
  }
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function debounce(func, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
