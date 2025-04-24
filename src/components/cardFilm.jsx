// src/components/MovieCard.jsx
const MovieCard = ({ nome, genero, duracao, classificacao, lancamento, sinopse, onEdit, onDelete }) => {
    return (
      <div className="card mb-4 shadow-sm" style={{ width: '20rem' }}>
        <div className="card-body">
          <h5 className="card-title">{nome}</h5>
          <p className="card-text mb-1"><strong>Gênero:</strong> {genero}</p>
          <p className="card-text mb-1"><strong>Duração:</strong> {duracao}</p>
          <p className="card-text mb-1"><strong>Classificação:</strong> {classificacao}</p>
          <p className="card-text mb-1"><strong>Lançamento:</strong> {lancamento}</p>
          <hr />
          <p className="card-text"><strong>Sinopse:</strong><br />{sinopse}</p>
          
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
  
  export default MovieCard;
  