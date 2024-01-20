import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Orders from "./pages/Order";
import Deposits from "./pages/Deposit";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}>
            {" "}
          </Route>
          <Route path="/signup" element={<SignIn />}>
            {" "}
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
            {" "}
            <Route path="order" element={<Orders />}>
              {" "}
            </Route>{" "}
            <Route path="deposit" element={<Deposits />}>
              {" "}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
