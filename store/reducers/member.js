const State = {
  v: '0.0.0',
}

export default function member(state = State, action) {
  switch (action.type) {
    case 'MEMBER_FETCH':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
