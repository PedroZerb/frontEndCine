import api from "./api";

export const CreateCinema = (data) => {
  return api.post("/cinema", data);
};

export const getAllCinemas = (page, limit) => {
  return api.get(`/cinema?page=${1}&limit=6`);
};
