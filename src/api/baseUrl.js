import axios from "axios";
const refreshToken = localStorage.getItem("refreshtoken");

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Accept: "application/json",
    "x-refresh": `${refreshToken}`,
  },
});
