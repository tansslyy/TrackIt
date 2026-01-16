export const getStartOfDay = (date: Date | string): Date => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
};

export const getDayName = (date: Date): string => {
  const days = [
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
  ];
  return days[date.getDay()];
};

// 👇 Нова функція: Початок місяця з рядка "YYYY-MM"
export const getStartOfMonth = (dateString: string): Date => {
  const [year, month] = dateString.split('-').map(Number);
  return new Date(year, month - 1, 1);
};

export const getEndOfMonth = (dateString: string): Date => {
  const [year, month] = dateString.split('-').map(Number);
  const d = new Date(year, month, 0);
  d.setHours(23, 59, 59, 999);
  return d;
};
