import { StrictMode } from "react";
import ReactDomeClient from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App";
import { fetchPosts } from "./features/posts/postSlice";
import { fetchUsers } from "./features/users/userSlice";

store.dispatch(fetchPosts());
store.dispatch(fetchUsers());

const root = ReactDomeClient.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
