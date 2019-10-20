import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Controls extends Component {
  static propTypes = {
    onDeposit: PropTypes.func.isRequired,
    onWithdrawal: PropTypes.func.isRequired,
    balance: PropTypes.number.isRequired,
  };

  state = {
    amount: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: Number(value),
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.amount <= 0) {
      this.notify('Введите сумму для проведения операции!');
    } else {
      if (e.target.name === 'Deposit') {
        this.props.onDeposit({ ...this.state });
        this.setState({
          amount: '',
        });
      }
      if (e.target.name === 'Withdraw') {
        if (this.props.balance >= this.state.amount) {
          this.props.onWithdrawal({ ...this.state });
        } else {
          this.notify('На счету недостаточно средств для проведения операции!');
        }
        this.setState({
          amount: '',
        });
      }
    }
  };

  notify = msg => {
    toast.error(msg);
  };

  render() {
    const { amount } = this.state;
    return (
      <section className="controls">
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={this.handleChange}
          />
          <button type="button" name="Deposit" onClick={this.handleSubmit}>
            Deposit
          </button>
          <button type="button" name="Withdraw" onClick={this.handleSubmit}>
            Withdraw
          </button>
        </form>
        <ToastContainer />
      </section>
    );
  }
}
