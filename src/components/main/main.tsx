import React from 'react'
import History from '../history/history';
import IncomeExpense from '../incomeExpense/incomeExpense';
import Transaction from '../transaction/transaction';

const Main = () => {
  return (
    <>
      <IncomeExpense />
      <History/>
      <Transaction/>
    </>
  )
}

export default Main
