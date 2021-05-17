import React, { useContext, useState } from 'react';
import {
  FromWrapper,
  Form,
  Label,
  Input,
  Button,
  Text,
} from './transactionStyle';
import { ExpenseTrackerContext } from '../../context/context';

const Transaction = () => {
  const { addTrans } = useContext(ExpenseTrackerContext);
  const [text, setText] = useState('');
  const [value, setValue] = useState(0);
  // const [valueDisplay, setValueDisplay] = useState('3');

  const submit = (e: any) => {
    e.preventDefault();
    addTrans({
      id: Math.floor(Math.random() * 10000000),
      text,
      value: Number(value),
      date: new Date()
    });
    setText('')
    setValue(0);
    // setValueDisplay('$ 0')
  };

  // console.log(formatNumber(Number(valueDisplay)));

  
  return (
    <>
      <Text> Agregar Transacción</Text>
      <FromWrapper>
        <Form onSubmit={(e) => submit(e)}>
          <Label htmlFor="title">Descripción</Label>
          <Input
            type="text"
            onChange={(e) => setText(e.target.value)}
            name="title"
            value={text}
            placeholder="Ingrese..."
          />
          <Label htmlFor="value">Valor</Label>
          <Input
            type="number"
            onChange={(e) => {
              setValue(Number(e.target.value));
              // setValueDisplay(formatNumber(Number(e.target.value)))

            }}
            name="value"
            data-type="currency"
            value={value}
            placeholder="$1,000,000.00"
          />
          <Button>ENVIAR</Button>
        </Form>
      </FromWrapper>
    </>
  );
};

export default Transaction;
