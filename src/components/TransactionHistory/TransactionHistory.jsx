import React from 'react';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) =>
  items.length > 0 && (
    <table className="history">
      <thead>
        <tr>
          <th>Transaction</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      {items.map(el => (
        <tbody key={el.id}>
          <tr>
            <td>{el.type}</td>
            <td>{el.amount}</td>
            <td>{el.date}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
TransactionHistory.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default TransactionHistory;
