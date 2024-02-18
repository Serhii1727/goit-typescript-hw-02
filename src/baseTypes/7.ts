/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum NameOfDay {
  MONDAY = "Monday",
  TUESDAY = "Tuesday",
  WENDSDAY = "Wendsday",
  THURSDAY = "Thursday",
  FRIDAY = "Friday",
  SATURDAY = "Saturday",
  SUNDAY = "Sunday",
}

function isWeekend(day: NameOfDay): boolean {
  if (day === NameOfDay.SATURDAY || day === NameOfDay.SUNDAY) {
    return true;
  }
  return false;
}
