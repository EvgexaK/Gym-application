import Members from '../../data/members';

const State = {
  v: '0.0.1',
  activeTab: "Login",
  fields: {
    name: '',
    email: '',
  },
  execs: [
  // 'id1'
  ],
};

function update(state) {
  Members.saveById(state.id, state);
  return state;
}


function fields(state, action) {
  switch (action.type) {
    case 'MEMBER_UPDATE':
      return update({ ...state, ...action.payload });
    default:
      return state;
  }
}

export default function member(state = State, action) {
  switch (action.type) {
    case 'MEMBER_EXEC_LIKE':
      return { ...state, execs: [...state.execs, action.payload] };
    case 'MEMBER_EXEC_UNLIKE':
      return {
        ...state,
        execs: state.execs.filter(v => v !== action.payload),
      };
    case "ACTIVE_TAB":
      return { ...state, activeTab: action.payload };
    case 'MEMBER_UPDATE':
      return { ...state, fields: fields(state.fields, action) };
    case 'MEMBER_FETCH':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
