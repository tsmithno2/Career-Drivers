const initState = {
  user: "",
  //This is the array of questions to map over in the render method of various components.
  //EACH QUESTIONS AND PAIR WILL ALWAYS REMAIN THE SAME! That's why I am hard coding the array.
  //Since multiple components will need this array, I am putting it in redux.
  //I am currently unaware of how to do this more efficiently
  questions: [
    {
      a:
        "I’m constantly on the lookout for new products, services, or technologies that might improve the business results of my organization.",
      b:
        "I would quit my job before I would compromise my personal values or my personal sense of what is “right”."
    },
    {
      a: "",
      b: ""
    },
    {
      a: "",
      b: ""
    },
    {
      a: "",
      b: ""
    },
    {
      a: "",
      b: ""
    },
    {
      a: "",
      b: ""
    },
    {
      a: "",
      b: ""
    },
    {
      a: "",
      b: ""
    },
    {
      a: "",
      b: ""
    },
    {
      a: "",
      b: ""
    },
    {
      a: "",
      b: ""
    },
    {
      a: "",
      b: ""
    },
    {
      a: "",
      b: ""
    },
    {
      a: "",
      b: ""
    },
    {
      a: "",
      b: ""
    },
    {
      a: "",
      b: ""
    },
    {
      a: "",
      b: ""
    },
    {
      a: "",
      b: ""
    },
    {
      a: "",
      b: ""
    },
    {
      a: "",
      b: ""
    },
    {
      a: "",
      b: ""
    },
    {
      a: "",
      b: ""
    },
    {
      a: "",
      b: ""
    },
    {
      a: "",
      b: ""
    },
    {
      a: "",
      b: ""
    },
    {
      a: "",
      b: ""
    },
    {
      a: "",
      b: ""
    },
    {
      a: "",
      b: ""
    }
  ],
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
