export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const UPDATE_ALL_USERS = "UPDATE_ALL_USERS";
export const UPDATE_FOLLOWING = "UPDATE_FOLLOWING";
export const UPDATE_USERNAME = "UPDATE_USERNAME";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";
export const UPDATE_POSTS = "UPDATE_POSTS";
export const UPDATE_POST_TITLE = "UPDATE_POST_TITLE";
export const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";

export function login() {
  return {
    type: LOGIN
  };
}

export function updateAllUsers(users) {
  return {
    type: UPDATE_ALL_USERS,
    users
  };
}

export function updateFollowing(following) {
  return {
    type: UPDATE_FOLLOWING,
    following
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts
  };
}

export function updateUsername(username) {
  return {
    type: UPDATE_USERNAME,
    username
  };
}

export function updatePassword(password) {
  return {
    type: UPDATE_PASSWORD,
    password
  };
}

export function updatePostTitle(postTitle) {
  return {
    type: UPDATE_POST_TITLE,
    postTitle
  };
}

export function updatePostText(postText) {
  return {
    type: UPDATE_POST_TEXT,
    postText
  };
}
