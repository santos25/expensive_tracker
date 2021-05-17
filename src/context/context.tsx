import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState: any = [];
export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }: { children: any }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const addTrans = (trans: any) => dispatch({ type: 'ADD_TRANS', payload: trans })
  const deleteTrans = (id: number) => dispatch({ type: 'DELETE_TRANS', payload: id })

  return (
    <ExpenseTrackerContext.Provider
      value={{
        transactions,
        addTrans,
        deleteTrans
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
