import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { UserProvider } from "./context/user.context";
import { NotesProvider } from "./context/notes.context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <NotesProvider>
        <App />
      </NotesProvider>
    </UserProvider>
  </React.StrictMode>
);
