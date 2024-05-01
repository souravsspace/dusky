const CURRENCY_FORMATTER = new Intl.NumberFormat("en-us", {
  currency: "USD",
  style: "currency",
  maximumFractionDigits: 0,
});

export function formatCurrency(amount: number): string {
  return CURRENCY_FORMATTER.format(amount);
}

export function formatDate(input: string | number): string {
  const date = new Date(input);

  return date.toLocaleDateString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
