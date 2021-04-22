export function getDay(date) {
  const weekDays = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  const splitDate = date.split(".");

  const day = new Date(splitDate[2], splitDate[1] - 1, splitDate[0]).getDay();
  return weekDays[day];
}
