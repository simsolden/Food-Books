export const getWeekDay = (daysOffset: number) => {
  const today = new Date();

  return daysOffset ? new Date(today.getTime() + daysOffset * 24 * 60 * 60 * 1000) : today;
};
