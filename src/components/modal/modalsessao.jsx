import { useState, useEffect } from "react";
import { getAllFilmes } from "../../services/filmes";
import { formatTime } from "../../utils/masks";

const EditSessaoModal = ({
  showModal = false,
  handleCloseModal,
  Data,
  handleSave,
}) => {
  const [formData, setFormData] = useState({ ...Data });

  const [Filmes, setFilmes] = useState([]);

  useEffect(() => {
    getAllFilmes(1, 100)
      .then((response) => {
        setFilmes(response.data.filmes);
      })
      .catch((error) => {
        console.error("Erro ao buscar cinemas", error);
      });
  }, []);

  useEffect(() => {
    setFormData({ ...Data });
  }, [Data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "horario") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: formatTime(value),
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(formData);
    handleCloseModal();
    setFormData({
      diaSemana: "",
      filme_id: "",
      horario: "",
    });
  };

  return (
    <div
      className={`modal fade ${showModal ? "show" : ""}`}
      style={{ display: showModal ? "block" : "none" }}
      tabIndex="-1"
      aria-labelledby="editSessaoModalLabel"
      aria-hidden={!showModal}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editSessaoModalLabel">
              Editar Sessão
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleCloseModal}
              aria-label="Fechar"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="horario" className="form-label">
                  Horário
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="horario"
                  name="horario"
                  value={formData.horario}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="diaSemana" className="form-label">
                  Dia da Semana
                </label>
                <select
                  className="form-select"
                  id="diaSemana"
                  name="diaSemana"
                  value={formData.diaSemana}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione o dia</option>
                  {[
                    "Segunda",
                    "Terça",
                    "Quarta",
                    "Quinta",
                    "Sexta",
                    "Sábado",
                    "Domingo",
                  ].map((dia, index) => (
                    <option key={index} value={index}>
                      {dia}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="filme_id" className="form-label">
                  Filme
                </label>
                <select
                  className="form-select"
                  id="filme_id"
                  name="filme_id"
                  value={formData.filme_id}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione um filme</option>
                  {Filmes.map((filme) => (
                    <option key={filme.id} value={filme.id}>
                      {filme.nome}
                    </option>
                  ))}
                </select>
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
