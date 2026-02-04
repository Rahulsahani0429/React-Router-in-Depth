/*
import Login from "./Login";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import College from "./College";
import Studen from "./Studen";
import Department from "./Department";
import Detail from "./Detail";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

import { Navigate, Route, Routes } from "react-router-dom";
import UserDetails from "./UserDetails";

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/users/list?" element={<UserList />} />
            <Route path="/users/:id/:name?" element={<UserDetails />} />
          </Route>

          {/* Nested Routes *
          <Route path="/college" element={<College />}>
            <Route index path="" element={<Studen />} />
            <Route path="department" element={<Department />} />
            <Route path="details" element={<Detail />} />
          </Route>

          {/* Redirect unknown routes *
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

*/

// we can cleaner way to write the above code by creating a separate file for all the routes and then importing that file here in App.jsx

import AllRoutes from "./AllRoutes";
import Register from "./Register";

function App() {
  return (
    <>
      <AllRoutes />
      <Register />
    </>
  );
}

export default App;
