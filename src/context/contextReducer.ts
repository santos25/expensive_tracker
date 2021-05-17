const contextReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_TRANS':
      return [action.payload, ...state];
    case 'DELETE_TRANS':
      return state.filter((trans: any) => trans.id !== action.payload);
    default:
      return state;
  }
};

export default contextReducer;
