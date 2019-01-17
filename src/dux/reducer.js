const initState = {
  user: {},
  answers: {}
};

const GET_USER_DATA = "SET_USER_DATA";

export default function reducer(state = initState, action) {
  switch (action.type) {
    case SET_USER_DATA + "_FULFILLED":
      return Object.assign({}, state, { user: action.payload });
  }
}

export function setUser(userInput) {
  let userData = userInput;

  console.log("Here in redux " + userData);
}
