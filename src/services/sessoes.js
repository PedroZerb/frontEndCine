import api from "./api";

export const CreateSessao = (data) => {
  return api.post("/sessoes", data);
};

export const getAllSessoes = (page, limit = 6, cinema_id) => {
  return api.get(`/sessoes?page=${page}&limit=${limit}&cinema_id=${cinema_id}`);
};


export const deleteSessao = (id) => {
  return api.delete(`/sessoes/${id}`);
};

export const updateSessao = (data, id) => {
  return api.put(`/sessoes/${id}`, data);
};
