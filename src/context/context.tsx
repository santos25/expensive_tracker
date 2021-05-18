import React, { useReducer, createContext, useEffect } from 'react';
import contextReducer from './contextReducer';
import { firestore } from '../utils/firebase';

const initialState: any = [];
export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }: { children: any }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  useEffect(() => {
    console.log('Rendering COntext');

    getAllTransactions();
  }, []);
  const addTrans = ({ text, value, date }: any) => {
    firestore
      .collection('transactions')
      .doc()
      .set({
        text,
        value,
        date,
      })
      .then(() => {
        getAllTransactions();
      });
  };

  const getAllTransactions = () => {
    firestore
      .collection('transactions')
      .get()
      .then((queryShot) => {
        const datas = queryShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(datas);
        dispatch({ type: 'FETCH_TRANS', payload: datas });
      });
  };

  const deleteTrans = (id: string) => {
    firestore.collection('transactions')
      .doc(id)
      .delete()
      .then(() => {
        console.log('Document successfully deleted!');
        getAllTransactions();
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
        
      });
  };

  return (
    <ExpenseTrackerContext.Provider
      value={{
        transactions,
        addTrans,
        deleteTrans,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
