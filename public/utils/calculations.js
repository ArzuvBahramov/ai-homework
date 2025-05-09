export function calculateTotal(expenses) {
  return expenses.reduce((sum, e) => sum + e.amount, 0);
}

export function calculateAverage(total, days) {
  return days ? total / days : 0;
}

export function getTop3(expenses) {
  return [...expenses]
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 3);
} 