# Expense Calculator Web Application

## Overview
A web application to calculate and analyze your monthly expenses. Enter your expenses in a table, add new ones, and instantly see:
- Total amount of expenses
- Average daily expense
- Top 3 largest expenses

## Features
- Add, edit, and remove expenses
- Calculate total, average daily, and top 3 expenses
- Responsive, modern UI (HTML/CSS/JS)
- Well-structured codebase (SOLID principles)
- Unit and integration tests

## Project Structure
```
expense-calculator/
├── public/           # Static files (index.html, favicon, etc.)
├── src/              # Source code
│   ├── components/   # UI components (JS)
│   ├── styles/       # CSS files
│   ├── utils/        # Utility functions
│   └── app.js        # Main JS logic
├── tests/            # Unit and integration tests
├── package.json      # Project metadata and scripts
└── README.md         # This file
```

## Getting Started
1. Clone the repo
2. Run `npm install` to install dependencies
3. Run `npm start` or `npm run dev` to start the app
4. Open your browser at the URL shown in the terminal (usually http://localhost:3000)

## Scripts
- `npm start` — start the app using a local server
- `npm run dev` — start the app in development mode
- `npm test` — run all tests

## Tech Stack
- HTML5, CSS3, JavaScript (ES6+)
- No frameworks (vanilla JS)
- Jest for testing

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