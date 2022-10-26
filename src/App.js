import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "../src/components/Layout/Layout";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ForgotePass from "./components/ForgotePass/ForgotePass";
import PrivateRoute from "./components/Routes/PrivateRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import LocalStorage from "./components/LocalStorage/LocalStorage";
import TailwindColumn from "./components/TailwindColumn/TailwindColumn";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path="/tailwindcolumn" element={<TailwindColumn />} />
        <Route path="/localstorage" element={<LocalStorage />} />
      </Route>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }
      />
      <Route
        path="/forgotpass"
        element={
          <PublicRoute>
            <ForgotePass />
          </PublicRoute>
        }
      />
    </Routes>
  );
}

export default App;
