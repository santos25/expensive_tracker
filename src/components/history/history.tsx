import React, { useContext } from 'react';
import { Container, Text, Data, Item, Title, Value, Button } from './historyStyles';
import { ExpenseTrackerContext } from '../../context/context';
import { formatNumber } from '../../utils/formatNumber';
const History = () => {
  const { transactions, deleteTrans }: { transactions: any[], deleteTrans: any} = useContext(
    ExpenseTrackerContext
  );
  
  return (
    <Container>
      <Text>Historial</Text>
      <Data>
        {transactions.map(({id, text, value, date}) => (
          <Item key={id}>
            <Title>{text}</Title>
            <Value value={value}>{`${formatNumber(Math.abs(value))}`}</Value>
            {/* <Value>{date}</Value> */}
            <Button onClick={() => deleteTrans(id)}>X</Button>
          </Item>
        ))}
      </Data>
    </Container>
  );
};

export default History;
