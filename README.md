# Expense Tracker

## Overview

This is a React application built with TypeScript and Vite that allows users to manage their transactions. Users can add income or expense transactions, delete transactions, and visualize their financial data using a pie chart.

## Features

- Add income or expense transactions
- Delete a transaction
- View a pie chart representing income vs. expenses
- State management using Context API
- Data fetching and caching with React Query
- Data persistence using LocalStorage
- Styled using React MUI

## Technologies Used

- **React** (with Vite for fast development)
- **TypeScript** (for type safety and better code maintainability)
- **React Query** (for managing API requests efficiently and interacting with LocalStorage)
- **Context API** (for global state management)
- **LocalStorage** (for persistent data storage)
- **React MUI** (Material UI for styling and UI components)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/aniksau/react-expense-tracker.git
   ```
2. Navigate to the project folder:
   ```sh
   cd react-expense-tracker
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Usage

- Navigate to the app in your browser.
- Add a transaction by selecting income or expense, entering details, and submitting.
- Delete a transaction if needed.
- View the pie chart to analyze income vs. expenses.
- Transactions are stored in LocalStorage and persist across sessions.
- React Query fetches and updates transaction data from LocalStorage.

## Folder Structure

```
react-expense-tracker/
│   eslint.config.js
│   index.html
│   package.json
│   README.md
│   tsconfig.json
│   vite.config.js
│
├───public
│       vite.svg
│
└───src
    │   App.css
    │   App.tsx
    │   index.css
    │   main.jsx
    │
    ├───assets
    │       react.svg
    │       Welcome.json
    │
    ├───components
    │   ├───AddDialog
    │   │       AddDialog.tsx
    │   │
    │   ├───BottomNav
    │   │       BottomNav.css
    │   │       BottomNav.tsx
    │   │
    │   ├───Container
    │   │       Container.css
    │   │       Container.tsx
    │   │
    │   ├───DeleteDialog
    │   │       DeleteDialog.tsx
    │   │
    │   ├───HeroCarousel
    │   │       HeroCarousel.css
    │   │       HeroCarousel.tsx
    │   │
    │   ├───HeroExpense
    │   │       HeroExpense.css
    │   │       HeroExpense.tsx
    │   │
    │   ├───TransactionIcon
    │   │       TransactionIcon.tsx
    │   │
    │   ├───TransactionsList
    │   │       TransactionsList.css
    │   │       TransactionsList.tsx
    │   │
    │   └───Welcome
    │           Welcome.tsx
    │
    ├───constants
    │       constants.ts
    │
    ├───context
    │       TransactionContext.tsx
    │       TransactionReducer.ts
    │
    ├───hooks
    │       useTransactions.ts
    │       useTransactionsQuery.ts
    │
    ├───types
    │       transactions.d.ts
    │
    └───utils
            data.ts
            functions.ts
            index.ts
```

## License

This project is licensed under the MIT License.
