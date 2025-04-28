import { useState, useEffect } from "react";

const EditMovieModal = ({ showModal = false, handleCloseModal, movieData, handleSave }) => {
  const [formData, setFormData] = useState({ ...movieData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

    useEffect(() => {
      setFormData({ ...movieData });
    }, [movieData]); 

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(formData); 
    handleCloseModal(); 
    setFormData({
      nome: "",
      genero: "",
      classificacao: "",
      lancamento: "",
      sinopse: "",
      duracao: "",
    });
  };

  return (
    <div
      className={`modal fade ${showModal ? "show" : ""}`}
      style={{ display: showModal ? "block" : "none" }}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden={!showModal}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Editar Filme
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleCloseModal}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nome" className="form-label">
                  Nome
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="genero" className="form-label">
                  Gênero
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="genero"
                  name="genero"
                  value={formData.genero}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="duracao" className="form-label">
                  Duração
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="duracao"
                  name="duracao"
                  value={formData.duracao}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="classificacao" className="form-label">
                  Classificação
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="classificacao"
                  name="classificacao"
                  value={formData.classificacao}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lancamento" className="form-label">
                  Lançamento
                </label>
                <input
                    type="text"
                  className="form-control"
                  id="lancamento"
                  name="lancamento"
                  value={formData.lancamento}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="sinopse" className="form-label">
                  Sinopse
                </label>
                <textarea
                  className="form-control"
                  id="sinopse"
                  name="sinopse"
                  value={formData.sinopse}
                  onChange={handleChange}
                  rows="3"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Salvar Alterações
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditMovieModal;
