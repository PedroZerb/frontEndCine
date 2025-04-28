import api from "./api";

export const CreateCinema = (data) => {
  return api.post("/cinema", data);
};

export const getAllCinemas = (page, limit = 6) => {
  return api.get(`/cinema?page=${page}&limit=${limit}`);
};


export const deleteCinema = (id) => {
  return api.delete(`/cinema/${id}`);
};

export const updateCinema = (data, id) => {
  return api.put(`/cinema/${id}`, {
    nome: data.nome,
    cidade: data.cidade,
    estado: data.estado
  });
};
