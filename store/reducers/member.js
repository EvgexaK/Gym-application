const State = {
  v: '0.0.1',
  tab: 'login',
}

export default function member(state = State, action) {
  switch (action.type) {
    case "LOGIN":
      return {...state, tab: 'login'};
    case "REGISTER":
      return { ...state, tab: 'register' };
    case "MEMBER_FETCH":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
