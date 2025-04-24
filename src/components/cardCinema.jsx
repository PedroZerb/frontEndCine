// src/components/MovieCard.jsx
const CinemaCard = ({ nome, cidade, estado, onEdit, onDelete }) => {
    return (
      <div className="card mb-4 shadow-sm" style={{ width: '20rem' }}>
        <div className="card-body">
          <p className="card-text mb-1"><strong>Nome:</strong> {nome}</p>
          <p className="card-text mb-1"><strong>Cidade:</strong> {cidade}</p>
          <p className="card-text mb-1"><strong>Estado:</strong> {estado}</p>
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
  
  export default CinemaCard;
  