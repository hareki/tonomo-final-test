const numberFormatter = new Intl.NumberFormat('en-US');

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

/** Formats a plain number with locale thousands separators (11000 => "11,000"). */
export function formatNumber(value: number): string {
  return numberFormatter.format(value);
}

/** Formats a price as a whole-dollar amount (1350000 => "$1,350,000"). */
export function formatPrice(value: number): string {
  return priceFormatter.format(value);
}
