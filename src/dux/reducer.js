const initState = {
  //this is to simply keep track of the user input for testing and familiarity in the app
  user: "",
  //This is the array of questions to map over in the render method of various components.
  //EACH QUESTIONS AND PAIR WILL ALWAYS REMAIN THE SAME! That's why I am hard coding the array.
  //Since multiple components will need this array, I am putting it in redux.
  //I am currently unaware of how to do this more efficiently
  questions: [
    {
      number: 1,
      a:
        "I’m constantly on the lookout for new products, services, or technologies that might improve the business results of my organization.",
      b:
        "I would quit my job before I would compromise my personal values or my personal sense of what is “right”."
    },
    {
      number: 2,
      a:
        "I have a strong need to devote time to personal or non-work interests.",
      b:
        "I am willing to make personal sacrifices in order to move up in my career."
    },
    {
      number: 3,
      a: "I often wish I had the power to right the wrongs in our society.",
      b: "I get very frustrated when others try to limit my autonomy."
    },
    {
      number: 4,
      a: "I enjoy roles where I am in charge and required to lead others.",
      b: "I enjoy the challenge of selling my ideas to others."
    },
    {
      number: 5,
      a:
        "Being valued and appreciated for my contributions to the organization are critical to my sense of career success.",
      b:
        "I like to work on the most technically challenging projects within my field/organization."
    },
    {
      number: 6,
      a:
        "I like jobs that provide me with a lot of visibility and exposure to important people in the organization.",
      b:
        "I like to work in areas where I can be self-reliant and do not have to depend on others."
    },
    {
      number: 7,
      a:
        "Initiating new ideas or starting new ventures is more fun for me than managing an existing operation.",
      b:
        "I am a very competitive person – winning is important to my sense of fulfillment."
    },
    {
      number: 8,
      a:
        "Making the world a better place is more important to me than organization status and money.",
      b:
        "Moving up the organization ladder is very important to my sense of success."
    },
    {
      number: 9,
      a: "I have a strong need to remain on the cutting edge of my field.",
      b:
        "I would leave my current job if it prevented me from balancing my work, professional, and personal needs."
    },
    {
      number: 10,
      a: "I would not accept a promotion if it reduced my job security.",
      b: "I would rather resign than work for a control-oriented manager."
    },
    {
      number: 11,
      a: "I have a strong need to give myself to a good cause.",
      b: "I constantly strive to test myself and find new challenges at work."
    },
    {
      number: 12,
      a: "I thrive on doing cutting-edge technical work.",
      b:
        "I thrive in roles where I am required to get work done through others."
    },
    {
      number: 13,
      a:
        "I can’t enjoy my work if I don’t have a sense of security and stability.",
      b:
        "I enjoy taking risks and taking on opportunities that test my entrepreneurial skills."
    },
    {
      number: 14,
      a:
        "I work best in an environment where management lets me scope out my own work methods and schedules.",
      b:
        "Success at work would not compensate for failure to achieve my goals in other aspects of my life."
    },
    {
      number: 15,
      a:
        "I enjoy managing and leading others, regardless of the field or nature of the work they do.",
      b:
        "Having work that tests my limits is more important than my position or title."
    },
    {
      number: 16,
      a:
        "To feel good about myself, I need to feel that I am making a real difference in society.",
      b:
        "I like to work for managers who respect my need for balance between work and personal needs."
    },
    {
      number: 17,
      a: "Financial security is critical to me when making career decisions.",
      b:
        "I would rather resign than do anything that conflicts with my personal values or offends my personal sense of propriety."
    },
    {
      number: 18,
      a:
        " I would rather have short, intense, task-force assignments than longer-term or more predictable assignments.",
      b:
        "I enjoy my work best when I can use my education and the skills of my profession."
    },
    {
      number: 19,
      a: "My non-work interests are as important to me as my work.",
      b:
        "I believe that to be successful in your career you must adapt your personal interests and goals to align with the needs of the organization."
    },
    {
      number: 20,
      a:
        "A lateral transfer into a totally new field/technical area would NOT appeal to me.",
      b: "I get turned on by change, variety, and championing new ideas."
    },
    {
      number: 21,
      a:
        "In the absence of challenge, I tend to quickly become irritable and bored.",
      b:
        "I like to work for managers who reward hard work, dependability, and loyalty."
    },
    {
      number: 22,
      a: "I often dream about starting my own business.",
      b:
        "I work hard to balance my needs with the needs of the organization. I seek out work assignments that give me the flexibility or time to meet my needs."
    },
    {
      number: 23,
      a:
        "Serving others and making a difference in their lives is essential to my job satisfaction.",
      b:
        "Working with interesting things and solving tough problems within my field is more fun to me than working with people."
    },
    {
      number: 24,
      a:
        "I look for jobs that offer a sense of stability and long-term prospects.",
      b:
        "I am competitive and have good problem-solving skills, even under conditions of ambiguity and uncertainty."
    },
    {
      number: 25,
      a:
        "I enjoy situations where others seek my expert opinion or seek me out to “trouble-shoot” problems of a technical nature.",
      b:
        "Being free of rules and narrowly defined procedures is essential to my sense of job satisfaction."
    },
    {
      number: 26,
      a:
        "I would rather pass up a promotion than take an assignment that will seriously interfere with personal or non-work needs.",
      b: "I would resign rather than take a routine or easy to accomplish job."
    },
    {
      number: 27,
      a: "Career success means being in control of how I complete my work.",
      b:
        "I thrive on doing the impossible or winning against very tough competitors."
    },
    {
      number: 28,
      a:
        "I enjoy my work best when I am championing new ideas, products, or initiatives.",
      b:
        "More than anything else, I need work that allows me the freedom to do it my way."
    }
  ],
  //This object is set up to receive either an "a" or "b" from the form to store their answers for the super selection step
  quizAnswers: {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
    11: "",
    12: "",
    13: "",
    14: "",
    15: "",
    16: "",
    17: "",
    18: "",
    19: "",
    20: "",
    21: "",
    22: "",
    23: "",
    24: "",
    25: "",
    26: "",
    27: "",
    28: ""
  },
  //this object will track the points for each driver based on user answers
  qualityCounters: {
    e: "",
    a: "",
    i: "",
    l: "",
    fT: "",
    s: "",
    m: "",
    c: ""
  }
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
