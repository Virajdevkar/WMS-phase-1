// TransactionHistory.js
import React, { useState } from "react";
import TransactionDetails from "../component/TransactionDetails"; // Import the TransactionDetails component
import "../css/TransactionHistory.css";
// import Navbar from "../components/Navbar.js";

const TransactionHistory = () => {
  // Dummy transaction data (with senderName and paymentMode added)
  const transactions = [
    {
      id: 1,
      senderName: "John Doe",
      amount: 100,
      date: "2023-01-15",
      paymentMode: "UPI",
    },
    {
      id: 2,
      senderName: "Alice Smith",
      amount: 150,
      date: "2023-02-20",
      paymentMode: "Cash",
    },
    {
      id: 3,
      senderName: "Bob Johnson",
      amount: 75,
      date: "2023-03-10",
      paymentMode: "UPI",
    },
    // Add more transactions
  ];

  // State to manage which transaction details to display
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  // Function to show transaction details
  const showTransactionDetails = (transaction) => {
    setSelectedTransaction(transaction);
  };

  // Function to hide transaction details
  // const hideTransactionDetails = () => {
  //   setSelectedTransaction(null);
  // };

  return (
    <>
      {/* <Navbar /> */}
      <div className="transaction-history-page">
        <h2>Distrubutor List</h2>
        <div className="filter-month">
          {/* Add your filter by month dropdown here */}
        </div>
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Distrubutor ID</th>
              <th>Distrubutor Name</th>
              <th>Recent Amount</th>
              <th>Payment Mode</th> {/* Add the new column header */}
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.senderName}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.paymentMode}</td> {/* Add the new column */}
                <td>{transaction.date}</td>
                <td>
                  <button onClick={() => showTransactionDetails(transaction)}>
                    Show Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedTransaction && (
          <TransactionDetails transaction={selectedTransaction} />
        )}
      </div>
    </>
  );
};

export default TransactionHistory;
