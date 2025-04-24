import { useState, useEffect } from "react";

const EditSessaoModal = ({
  showModal = false,
  handleCloseModal,
  movieData,
  handleSave,
  moviesList = [{id: '1', nome: '22'},{id: '1', nome: '22'}],
}) => {
  const [formData, setFormData] = useState({ ...movieData });

  useEffect(() => {
    setFormData({ ...movieData });
  }, [movieData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(formData);
    handleCloseModal();
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
              Editar Sessão
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
                <label htmlFor="filme" className="form-label">
                  Filme
                </label>
                <select
                  className="form-select"
                  id="filme"
                  name="filme"
                  value={formData.genero}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Selecione um filme
                  </option>
                  {moviesList.map((movie) => (
                    <option key={movie.id} value={movie.nome}>
                      {movie.nome}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="cinema" className="form-label">
                  Cinema
                </label>
                <select
                  className="form-select"
                  id="cinema"
                  name="cinema"
                  value={formData.genero}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Selecione um filme
                  </option>
                  {moviesList.map((movie) => (
                    <option key={movie.id} value={movie.nome}>
                      {movie.nome}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
  <label htmlFor="diaSemana" className="form-label">
    Dia da semana
  </label>
  <select
    className="form-select"
    id="diaSemana"
    name="diaSemana"
    value={formData.diaSemana}
    onChange={handleChange}
    required
  >
    <option value="" disabled>
      Selecione um dia
    </option>
    <option value="segunda">Segunda-feira</option>
    <option value="terca">Terça-feira</option>
    <option value="quarta">Quarta-feira</option>
    <option value="quinta">Quinta-feira</option>
    <option value="sexta">Sexta-feira</option>
    <option value="sabado">Sábado</option>
    <option value="domingo">Domingo</option>
  </select>
</div>


<div className="mb-3">
                <label htmlFor="horario" className="form-label">
                  Horário
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="horario"
                  name="horario"
                  value={formData.duracao}
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

export default EditSessaoModal;
