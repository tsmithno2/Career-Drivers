const initState = {
  user: {},
  campaignsList: [],
  partyList: [],
  newParty: []
};

const GET_USER_DATA = "GET_USER_DATA";
const DISPLAY_CAMPAIGNS = "DISPLAY_CAMPAIGNS";
const CREATE_CAMPAIGN = "CREATE_CAMPAIGN";
const GET_PARTIES = "GET_PARTIES";
const DELETE_CAMPAIGN = "DELETE_CAMPAIGN";

export default function reducer(state = initState, action) {
  switch (action.type) {
    case GET_USER_DATA + "_FULFILLED":
      return Object.assign({}, state, { user: action.payload });

    case DISPLAY_CAMPAIGNS + "_FULFILLED":
      return Object.assign({}, state, { campaignsList: action.payload });

    case GET_PARTIES + "_FULFILLED":
      return Object.assign({}, state, { partyList: action.payload });

    case CREATE_CAMPAIGN + "_FULFILLED":
      return Object.assign({}, state, { newPartyId: action.payload });

    case DELETE_CAMPAIGN + "_FULFILLED":
      return Object.assign({}, state, { campaignsList: action.payload });

    default:
      return state;
  }
}
