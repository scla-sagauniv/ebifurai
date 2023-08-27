import axiosBase from "axios";

export const axiosClient = axiosBase.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
  withCredentials: true,
});
