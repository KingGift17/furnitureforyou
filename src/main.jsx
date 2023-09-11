import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Store from "./redux/store.jsx";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <ToastContainer
          position="top-right"
          autoClose={1250}
          closeOnClick={false}
          pauseOnHover={false}
          pauseOnFocusLoss={false}
          theme="dark"
        />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
