import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AppLayout from "./AppLayout";
import ShowData from "./ShowData";
import AddForm from "./AddForm";
import UpdateFrom from "./UpdateFrom";

const RouteEvent = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path='/showList' element={<ShowData />} />
        <Route path='/addForm' element={<AddForm />} />
        <Route path='/updateForm/:id' element={<UpdateFrom/>} />


      </Route>
    </Routes>
  );
};
export default RouteEvent;
