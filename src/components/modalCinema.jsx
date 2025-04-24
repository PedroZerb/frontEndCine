import { useState } from "react";

const EditCinemaModal = ({ showModal = false, handleCloseModal, movieData, handleSave }) => {
  const [formData, setFormData] = useState({ ...movieData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(formData); // Envia os dados atualizados para o componente pai
    handleCloseModal(); // Fecha o modal após salvar
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
              Editar Cinema
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
                  value={formData.genero}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cidade" className="form-label">
                  Duração
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cidade"
                  name="cidade"
                  value={formData.duracao}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="estado" className="form-label">
                  Classificação
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="estado"
                  name="estado"
                  value={formData.classificacao}
                  onChange={handleChange}
                  required
                />
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

export default EditCinemaModal;
