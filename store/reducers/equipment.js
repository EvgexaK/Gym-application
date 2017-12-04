const State = {
  v: "0.0.1",
  items: [],
  fields: {}
};

function fields(state, action) {
  switch (action.type) {
    case "EQUIPMENT_UPDATE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default function member(state = State, action) {
  switch (action.type) {
    case "EQUIPMENT_UPDATE":
      return { ...state, fields: fields(state.fields, action) };
    case "EQUIPMENT_FETCH":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
