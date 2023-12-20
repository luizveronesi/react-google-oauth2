import { types, UserStore } from './types';

function reducer(state: UserStore, action: any): UserStore {
  switch (action.type) {
    case types.LOGGED:
      return {
        ...state,
        logged: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
