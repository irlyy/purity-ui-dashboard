export const formatDollar = (number, maximumSignificantDigits) =>
new Intl.NumberFormat(
  'en-US',
  {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits
  })
  .format(number);

export const formatNum = (number, maximumSignificantDigits) =>
  new Intl.NumberFormat()
    .format(number);