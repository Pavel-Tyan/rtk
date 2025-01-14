import { BrowserRouter } from "react-router";
import { Routes } from "react-router";
import { Route } from "react-router";
import { UserList } from "./pages/UserList/UserList";
import { UserSettings } from "./pages/UserSettings/UserSettings";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/:userId" element={<UserSettings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
