import unirest from "unirest";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const API_URL = "http://127.0.0.1:8000/api/";
export const makeUser = (username, password, callback) => {
  unirest
    .post("http://127.0.0.1:8000/api/makeuser")
    .headers({
      "Cache-Control": "no-cache",
      "Content-Type": "application/x-www-form-urlencoded"
    })
    .send({
      username: username,
      password: password
    })
    .end(function(res) {
      callback(res);
    });
};

export const auth = (username, password, callback) => {
  unirest
    .post(API_URL + "login")
    .headers({
      "Cache-Control": "no-cache",
      "Content-Type": "application/x-www-form-urlencoded"
    })
    .send({ username: username, password: password })
    .end(function(res) {
      if (res.body) cookies.set("token", res.body.token, { path: "/" });
      callback(res);
    });
};

export const getAllUsers = callback => {
  unirest
    .get(API_URL + "users")
    .headers({
      "Cache-Control": "no-cache",
      "Content-Type": "application/x-www-form-urlencoded"
    })
    .header("Authorization", cookies.get("token"))
    .end(function(res) {
      callback(res);
    });
};

export const follow = (username, callback) => {
  unirest
    .post(API_URL + "follow")
    .headers({
      "Cache-Control": "no-cache",
      "Content-Type": "application/x-www-form-urlencoded"
    })
    .header("Authorization", cookies.get("token"))
    .send({ username: username })
    .end(function(res) {
      callback(res);
    });
};

export const unfollow = (username, callback) => {
  unirest
    .post(API_URL + "unfollow")
    .headers({
      "Cache-Control": "no-cache",
      "Content-Type": "application/x-www-form-urlencoded"
    })
    .header("Authorization", cookies.get("token"))
    .send({ username: username })
    .end(function(res) {
      callback(res);
    });
};

export const getFollowing = callback => {
  var CookieJar = unirest.jar();
  CookieJar.add(cookies.get("token"), "/"); // Cookie string, pathname / url
  unirest
    .get(API_URL + "get_following")
    .headers({
      "Cache-Control": "no-cache",
      "Content-Type": "application/json"
    })
    .header("Authorization", cookies.get("token"))
    .end(function(res) {
      callback(res);
    });
};

export const deleteUser = callback => {
  unirest
    .post(API_URL + "deleteuser")
    .headers({
      "Cache-Control": "no-cache",
      "Content-Type": "application/x-www-form-urlencoded"
    })
    .header("Authorization", cookies.get("token"))
    .end(function(res) {
      callback(res);
    });
};

export const rmSession = callback => {
  unirest
    .post(API_URL + "logout")
    .headers({
      "Cache-Control": "no-cache",
      "Content-Type": "application/x-www-form-urlencoded"
    })
    .header("Authorization", cookies.get("token"))
    .end(function(res) {
      cookies.remove("token");
      callback(res);
    });
};

export const posts = (username, callback) => {
  unirest
    .get(API_URL + "posts")
    .headers({
      "Cache-Control": "no-cache",
      "Content-Type": "application/x-www-form-urlencoded"
    })
    .query({ username: username })
    .header("Authorization", cookies.get("token"))
    .end(function(res) {
      callback(res);
    });
};

export const post = (post, callback) => {
  unirest
    .post(API_URL + "post")
    .headers({
      "Cache-Control": "no-cache",
      "Content-Type": "application/x-www-form-urlencoded"
    })
    .header("Authorization", cookies.get("token"))
    .send(post)
    .end(function(res) {
      callback(res);
    });
};

export const deletePost = (postId, callback) => {
  unirest
    .delete(API_URL + "deletepost")
    .headers({
      "Cache-Control": "no-cache",
      "Content-Type": "application/x-www-form-urlencoded"
    })
    .header("Authorization", cookies.get("token"))
    .send({ post_id: postId })
    .end(function(res) {
      callback(res);
    });
};
