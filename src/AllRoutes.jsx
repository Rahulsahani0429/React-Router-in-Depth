import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
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
export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/list?" element={<UserList />} />
          <Route path="/users/:id/:name?" element={<UserDetails />} />
        </Route>

        {/* Nested Routes */}
        <Route path="/college" element={<College />}>
          <Route index path="" element={<Studen />} />
          <Route path="department" element={<Department />} />
          <Route path="details" element={<Detail />} />
        </Route>

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}
