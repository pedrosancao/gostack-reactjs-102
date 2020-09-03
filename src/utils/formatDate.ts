export const formatDate = (value: string): string => {
  const date = new Date(value);
  return Intl.DateTimeFormat('default', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
};

export default formatDate;
