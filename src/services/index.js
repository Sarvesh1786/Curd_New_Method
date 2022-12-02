import axios from "axios";

const baseUrl = "http://localhost:3004";
const addDataUrl = `${baseUrl}/addUser`;
export const postData = async (data) => {
  let res = await axios.post(`${addDataUrl}`, data);
  return res.data;
};

const getListUrl = `${baseUrl}/getUsers`;
export const getAllUsers = async () => {
  let res = await axios.get(getListUrl);
  return res.data;
};


const getUserUrl = `${baseUrl}/getUser`;
export const getUser = async (id) => {
  let res = await axios.get(`${getUserUrl}/${id}`);
  return res.data;
};

const updateUrl = `${baseUrl}/updateUser`;
export const updateUser = async (data,id) => {
  let res = await axios.post(`${updateUrl}/${id}`, data);

  return res.data;
};
