const initState = {
  user: "",
  quizAnswers: {}
};

const SET_USER_DATA = "SET_USER_DATA";
const SEND_USER = "SEND_USER";
// const SET_QUIZ_ANSWERS = "SET_QUIZ_ANSWERS";
// const SEND_QUIZ_ANSWERS = "SEND_QUIZ_ANSWERS";

export default function reducer(state = initState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return Object.assign({}, state, { user: action.payload });

    case SEND_USER:
      return Object.assign({}, state, { user: action.payload });

    default:
      return state;
  }
}

export function setUser(userInput) {
  console.log("Here in redux " + userInput);
  return {
    type: SET_USER_DATA,
    payload: userInput
  };
}

export function sendUser() {
  console.log("We got here sendUser in redux " + initState);
  let user = initState.user;
  return {
    type: SEND_USER,
    payload: user
  };
}
