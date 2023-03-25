import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../auth/Login";
import Login2 from "../auth/Login2";
import Register from "../auth/Register";
import Register2 from "../auth/Register2";
import Alert from "../common/Alert";
import Dashboard from "../dashboard/Dashboard";
import Landing from "../layouts/Landing";

// we will hold the entire appliation's navigation.
const Routers = () => {
  return (
    <>
      <Alert></Alert>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/login" element={<Login2></Login2>}></Route>
        <Route path="/register" element={<Register2></Register2>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </>
  );
};
// functional based component.

export default Routers;
