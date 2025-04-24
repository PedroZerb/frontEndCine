// src/components/MovieCard.jsx
const SessaoCard = ({ filme,cinema,diaSemana, horario, onEdit, onDelete }) => {
    return (
      <div className="card mb-4 shadow-sm" style={{ width: '20rem' }}>
        <div className="card-body">
          <p className="card-text mb-1"><strong>Filme:</strong> {filme}</p>
          <p className="card-text mb-1"><strong>Cinema:</strong> {cinema}</p>
          <p className="card-text mb-1"><strong>Dia da semana:</strong> {diaSemana}</p>
          <p className="card-text mb-1"><strong>Horário:</strong> {horario}</p>
          <hr />
         
          {/* Botões de Editar e Deletar */}
          <div className="d-flex gap-2 mt-3">
            <button 
              className="btn btn-warning"
              onClick={onEdit}
            >
              Editar
            </button>
            <button 
              className="btn btn-danger"
              onClick={onDelete}
            >
              Deletar
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default SessaoCard;
  