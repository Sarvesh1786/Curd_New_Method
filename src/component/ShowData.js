import React, { useEffect, useState } from "react";
import axios from "axios";
import TableEvent from "./TableEvent";
import { getAllUsers } from "../services";

const ShowData = () => {
  const [showstate, setShowsatate] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let data = await getAllUsers();
    console.log(data);
    setShowsatate(data);
  };

  return (
    <>
      <TableEvent showstate={showstate} />
    </>
  );
};

export default ShowData;
