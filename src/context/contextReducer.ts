const contextReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'FETCH_TRANS':
      const transactions = [...action.payload];
      return transactions;
    case 'DELETE_TRANS':
      return state.filter((trans: any) => trans.id !== action.payload);

    default:
      return state;
  }
};

export default contextReducer;
