import React, { Component } from 'react';
import shortid from 'shortid';
import Controls from '../Controls/Controls';
import Balance from '../Balance/Balance';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import style from './Dashboard.module.css'

export default class Dashboard extends Component {
    state = {
        items: [],
        income: 0,
        expenses: 0,
        balance: 0,
    };

    onBalance = () => {
        this.setState(prevState => ({
            balance: prevState.income - prevState.expenses,
        }));
    };

    onDeposit = dataInput => {
        const data = {
            ...dataInput,
            id: shortid(),
            date: new Date().toLocaleString(),
            type: 'Deposit',
        };
        this.setState(prevState => ({
            items: [...prevState.items, data],
            income: prevState.income + dataInput.amount,
        }));
        this.onBalance();
    };

    onWithdrawal = dataInput => {
        const data = {
            ...dataInput,
            id: shortid(),
            date: new Date().toLocaleString(),
            type: 'Withdraw',
        };
        this.setState(prevState => ({
            items: [...prevState.items, data],
            expenses: prevState.expenses + dataInput.amount,
        }));
        this.onBalance();
    };

    render() {
        const { items, income, expenses, balance } = this.state;
        return (
            <div className={style.wrapper}>
                <Controls
                    onDeposit={this.onDeposit}
                    onWithdrawal={this.onWithdrawal}
                    balance={balance}
                />
                <Balance income={income} expenses={expenses} balance={balance} />
                <TransactionHistory items={items} />
            </div>
        );
    }
}
