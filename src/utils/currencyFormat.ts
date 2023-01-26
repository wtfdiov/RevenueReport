export default function currencyFormat(value: number) {
  var rounded = Math.round(value * 100) / 100;
  var formatted = rounded.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  var parts = formatted.split(".");
  if (parts[1] === "00") {
    return parts[0];
  } else {
    return formatted;
  }
}
