const State = {
  v: "0.0.1",
  tab: "login",
  fields: {
    name: '',
    email:'',
  }
};

function fields(state, action) {
  switch (action.type) {
    case "MEMBER_UPDATE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default function member(state = State, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, tab: "login" };
    case "REGISTER":
      return { ...state, tab: "register" };
    case "MEMBER_UPDATE":
      return { ...state, fields: fields(state.fields, action) };
    case "MEMBER_FETCH":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
