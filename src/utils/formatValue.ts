const formatValue = (value: number): string =>
  Intl.NumberFormat('default', {
    currency: 'BRL',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(value);

export default formatValue;
