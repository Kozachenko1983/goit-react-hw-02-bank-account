import React from 'react';
import PropTypes from 'prop-types';

const Balance = ({ income, expenses, balance }) => (
  <section className="balance">
    <span>income:{income}</span>
    <span>expenses:{expenses}</span>
    <span>Balance:{balance}</span>
  </section>
);

Balance.propTypes = {
  income: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
};

export default Balance;
