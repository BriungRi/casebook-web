import {
  LOGIN,
  LOGOUT,
  UPDATE_NEWS_FEED,
  UPDATE_USER_FEED,
  UPDATE_USERNAME,
  UPDATE_PASSWORD,
  UPDATE_FIRSTNAME,
  UPDATE_LASTNAME,
  UPDATE_POST_TEXT
} from "./../actions";

const initialState = {
  loggedIn: false,
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  postText: "",
  newsFeed: [],
  userFeed: []
};

function app(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedIn: true,
        username: action.username,
        password: "",
        firstName: action.firstName,
        lastName: action.lastName,
        newsFeed: feed,
        userFeed: []
      };
    case LOGOUT:
      return initialState;
    case UPDATE_NEWS_FEED:
      return {
        ...state,
        newsFeed: action.feed
      };
    case UPDATE_USER_FEED:
      return {
        ...state,
        userFeed: action.feed
      };
    case UPDATE_FIRSTNAME:
      return {
        ...state,
        firstName: action.firstName
      };
    case UPDATE_LASTNAME:
      return {
        ...state,
        lastName: action.lastName
      };
    case UPDATE_USERNAME:
      return {
        ...state,
        username: action.username
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        password: action.password
      };
    case UPDATE_POST_TEXT:
      return {
        ...state,
        postText: action.postText
      }
    default:
      return state;
  }
}

export default app;
