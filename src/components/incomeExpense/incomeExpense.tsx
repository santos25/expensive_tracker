import React, { useContext } from 'react';
import { Container, Expense, Income, Text, Value } from './incomeStyles';
import { ExpenseTrackerContext } from '../../context/context';
import { formatNumber } from '../../utils/formatNumber';

const IncomeExpense = () => {
  const { transactions }: { transactions: any[] } = useContext(
    ExpenseTrackerContext
  );

  const amounts = transactions.map((trans) => trans.value);

  const income = amounts
    .filter((value) => value > 0)
    .reduce((acc, currentValue) => {
      return (acc += currentValue);
    }, 0);

  const expense = amounts
    .filter((value) => value < 0)
    .reduce((acc, currentValue) => {
      return (acc += currentValue);
    }, 0);

  return (
    <Container>
      <Income>
        <Text> INGRESOS</Text>
        <Value>{`${formatNumber(income)}`}</Value>
      </Income>
      <Expense>
        <Text> EGRESOS</Text>
        <Value> {`${formatNumber(Math.abs(expense))}`} </Value>
      </Expense>
    </Container>
  );
};

export default IncomeExpense;
