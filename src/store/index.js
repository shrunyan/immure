import createStore from "unistore";
import devtools from "unistore/devtools";

const initialState = {
  posts: [],
  user: {
    name: "stuart",
    email: "shrunyan@gmail.com",
  },
};

const store =
  process.env.NODE_ENV === "production"
    ? createStore(initialState)
    : devtools(createStore(initialState));

export default store;
