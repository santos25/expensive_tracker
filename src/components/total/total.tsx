import React, { useContext } from 'react';
import { Title, Amount, TotalWrapper } from './style';
import { ExpenseTrackerContext } from '../../context/context';
import { formatNumber } from '../../utils/formatNumber';

const Total = () => {
  const { transactions }: { transactions: any[] } = useContext(
    ExpenseTrackerContext
  );

  const amounts = transactions.map( trans => trans.value);

  const balance = amounts.reduce( (acc, curr) => { return acc += curr}, 0)

  return (
    <TotalWrapper>
      <Title>
        Total Balance
      </Title>
      <Amount>
        {`${ formatNumber(balance) }`}
      </Amount>
    </TotalWrapper>
  )
}

export default Total
