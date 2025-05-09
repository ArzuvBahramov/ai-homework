export function renderExpenses(expenses, tableBody, removeExpense) {
  tableBody.innerHTML = '';
  expenses.forEach((exp, idx) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${exp.category}</td>
      <td>${exp.amount.toLocaleString()}</td>
      <td><button class="remove-btn" data-idx="${idx}">Remove</button></td>
    `;
    tableBody.appendChild(row);
  });
  tableBody.querySelectorAll('.remove-btn').forEach(btn => {
    btn.onclick = () => removeExpense(Number(btn.dataset.idx));
  });
}

export function clearInputs(categoryInput, amountInput) {
  categoryInput.value = '';
  amountInput.value = '';
  categoryInput.focus();
}

export function updateResults(total, average, top3, totalDiv, averageDiv, top3Div) {
  totalDiv.textContent = `Total: $${total.toLocaleString()}`;
  averageDiv.textContent = `Average daily: $${average.toLocaleString(undefined, {maximumFractionDigits: 2})}`;
  top3Div.innerHTML = '<b>Top 3 expenses:</b><ol>' + top3.map(e => `<li>${e.category} ($${e.amount.toLocaleString()})</li>`).join('') + '</ol>';
} 