import axiosBase from "axios";

export const axiosClient = axiosBase.create({
  baseURL: "https://nitari.dev.host/api",
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
  withCredentials: true,
});
