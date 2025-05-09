# Expense Calculator Project

A web application for expense management with API testing and SQL analysis capabilities.

## Features

### 1. Expense Calculator
- Calculate total monthly expenses
- Calculate average daily expenses
- Display top 3 largest expenses
- Add new expenses dynamically

### 2. API Testing
Automated tests for Fake Store API (https://fakestoreapi.com/products) that validate:
- Server response code (200)
- Product title presence
- Price validity (non-negative)
- Rating validity (≤ 5)

Test Results:
```bash
$ npm run test:api
 PASS  api-tests/product-api.test.js
  Fake Store API Tests
    ✓ Server response code should be 200 (55 ms)
    ✓ All products should have valid attributes (14 ms)
    ✓ Product titles should not be empty (1 ms)
    ✓ Product prices should not be negative
    ✓ Product ratings should not exceed 5 (2 ms)

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        0.361 s
```

All tests passed successfully, indicating that the Fake Store API data is valid with:
- No empty titles
- No negative prices
- All ratings within valid range (≤ 5)

### 3. SQL Analysis
SQL queries for analyzing sales data:

1. Total March 2024 Sales:
```sql
SELECT SUM(amount) as total_march_sales
FROM orders
WHERE strftime('%Y-%m', order_date) = '2024-03';
-- Result: 27,000
```

2. Top Spending Customer:
```sql
SELECT customer, SUM(amount) as total_spent
FROM orders
GROUP BY customer
ORDER BY total_spent DESC
LIMIT 1;
-- Result: Alice (20,000)
```

3. Average Order Value (Last 3 Months):
```sql
SELECT AVG(amount) as average_order_value
FROM orders
WHERE order_date >= date('now', '-3 months');
-- Result: 6,000
```

## Installation

```bash
npm install
```

## Usage

Start the application:
```bash
npm start
```

Run tests:
```bash
npm test
```

Run API tests:
```bash
npm run test:api
```

## Project Structure
```
.
├── api-tests/
│   └── product-api.test.js
├── sql-queries/
│   └── sales_analysis.sql
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── app.js
├── package.json
└── README.md
```

## Technologies Used
- Node.js
- Express.js
- Jest for testing
- SQLite for database analysis
- Node-fetch for API testing

## Author
Your Name

---

## Example
| Category       | Amount ($) |
|---------------|------------|
| Groceries     | 15,000     |
| Rent          | 40,000     |
| ...           | ...        |

## License
MIT 