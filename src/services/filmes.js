import api from "./api";

export const CreateFilme = (data) => {
  return api.post("/filmes", data);
};

export const getAllFilmes = (page, limit = 6) => {
  return api.get(`/filmes?page=${page}&limit=${limit}`);
};


export const deleteFilme = (id) => {
  return api.delete(`/filmes/${id}`);
};

export const updateFilme = (data, id) => {
  return api.put(`/filmes/${id}`, {
    nome: data.nome,
    cidade: data.cidade,
    estado: data.estado,
    classificacao: data.classificacao,
    duracao: data.duracao,
    genero: data.genero,
    lancamento: data.lancamento,
    sinopse: data.sinopse
  });
};
