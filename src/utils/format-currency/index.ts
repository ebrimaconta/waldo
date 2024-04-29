const formatCurrency = (
  amount: number,
  region: "US" | "UK" | "SE" | "EU" = "US"
): string => {
  let currency: "USD" | "GBP" | "EUR" | "SEK";
  let minimumFractionDigits: 2 | 4;
  let maximumFractionDigits: 2 | 4;

  switch (region) {
    case "UK":
      currency = "GBP";
      minimumFractionDigits = 2;
      maximumFractionDigits = 2;
      break;
    case "SE":
      currency = "SEK";
      minimumFractionDigits = 2;
      maximumFractionDigits = 2;
      break;
    case "EU":
      currency = "EUR";
      minimumFractionDigits = 2;
      maximumFractionDigits = 2;
      break;
    default:
      currency = "USD";
      minimumFractionDigits = 2;
      maximumFractionDigits = 2;
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits,
    maximumFractionDigits,
  });

  const formattedAmount = formatter.format(amount);

  const currencySymbol = formatter
    .formatToParts(1)
    .find((part) => part.type === "currency")?.value;
  return `${currencySymbol} ${formattedAmount.substring(1)}`;
};

export default formatCurrency;
