// src/components/select/SelectCinema.jsx
import { useEffect, useState } from "react";
import { getAllCinemas } from "../../services/cinema";

const SelectCinema = ({ onCinemaSelect }) => {
  const [cinemas, setCinemas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCinemas(1,100)
      .then((response) => {
        setCinemas(response.data.cinemas);
      })
      .catch((error) => {
        console.error("Erro ao buscar cinemas", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="mb-4">
      <label className="form-label">Selecione um cinema:</label>
      <select
        className="form-select"
        onChange={(e) => onCinemaSelect(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>Selecione um cinema</option>
        {loading ? (
          <option>Carregando...</option>
        ) : (
          cinemas.map((cinema) => (
            <option key={cinema.id} value={cinema.id}>
              {cinema.nome}
            </option>
          ))
        )}
      </select>
    </div>
  );
};

export default SelectCinema;
