import { createStore } from 'redux';

const INITIAL_STATE = {
  isSeller: true,
};

function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'TOOGLE_USER_TYPE') {
    return {
      ...state, isSeller: !action.isSeller,
    };
  }

  return state;
}

const store = createStore(reducer);

export default store;
