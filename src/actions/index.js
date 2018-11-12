export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const UPDATE_FIRSTNAME = "UPDATE_FIRSTNAME";
export const UPDATE_LASTNAME = "UPDATE_LASTNAME";
export const UPDATE_USERNAME = "UPDATE_USERNAME";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";
export const UPDATE_NEWS_FEED = "UPDATE_NEWS_FEED";
export const UPDATE_USER_FEED = "UPDATE_USER_FEED";
export const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";

export function login(username, firstName, lastName) {
  return {
    type: LOGIN,
    username,
    firstName,
    lastName
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}

export function updateNewsFeed(feed) {
  return {
    type: UPDATE_NEWS_FEED,
    feed
  };
}

export function updateUserFeed(feed) {
  return {
    type: UPDATE_USER_FEED,
    feed
  };
}

export function updateFirstName(firstName) {
  return {
    type: UPDATE_USERNAME,
    firstName
  }
}

export function updateLastName(lastName) {
  return {
    type: UPDATE_USERNAME,
    lastName
  }
}

export function updateUsername(username) {
  return {
    type: UPDATE_USERNAME,
    username
  }
}

export function updatePassword(password) {
  return {
    type: UPDATE_PASSWORD,
    password
  }
}

export function updatePostText(postText) {
  return {
    type: UPDATE_POST_TEXT,
    postText
  }
}