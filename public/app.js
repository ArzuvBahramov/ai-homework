import { renderExpenses, clearInputs, updateResults } from './components/expensesTable.js';
import { calculateTotal, calculateAverage, getTop3 } from './utils/calculations.js';

const expenses = [];

const expenseForm = document.getElementById('expense-form');
const categoryInput = document.getElementById('category');
const amountInput = document.getElementById('amount');
const expensesTableBody = document.querySelector('#expenses-table tbody');
const calculateBtn = document.getElementById('calculate-btn');
const resultsSection = document.getElementById('results');
const totalDiv = document.getElementById('total');
const averageDiv = document.getElementById('average');
const top3Div = document.getElementById('top3');

function addExpense(category, amount) {
  expenses.push({ category, amount });
  renderExpenses(expenses, expensesTableBody, removeExpense);
}

function removeExpense(index) {
  expenses.splice(index, 1);
  renderExpenses(expenses, expensesTableBody, removeExpense);
}

expenseForm.addEventListener('submit', e => {
  e.preventDefault();
  const category = categoryInput.value.trim();
  const amount = parseFloat(amountInput.value);
  if (!category || isNaN(amount) || amount <= 0) return;
  addExpense(category, amount);
  clearInputs(categoryInput, amountInput);
});

calculateBtn.addEventListener('click', () => {
  const total = calculateTotal(expenses);
  const average = calculateAverage(total, 30);
  const top3 = getTop3(expenses);
  updateResults(total, average, top3, totalDiv, averageDiv, top3Div);
});

// Initial render
renderExpenses(expenses, expensesTableBody, removeExpense); 