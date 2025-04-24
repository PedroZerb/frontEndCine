import SessaoCard from "../../components/cardSessao";
import Navbar from "../../components/navbar";
import EditSessaoModal from "../../components/modalsessao";
import { useState } from "react";

// src/features/movies/pages/MoviesPage.jsx
const SessoesPage = () => {

  const [paginaAtual, setPaginaAtual] = useState(1);

  const handleNumberPage = (pagina) => {
    setPaginaAtual(pagina);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4 border border-danger">
      <div className="mb-3">
          <button className="btn btn-secondary">Adicionar Sessão</button>
        </div>
        <div className="d-flex flex-wrap gap-3">
          <SessaoCard />
          <SessaoCard />
          <SessaoCard />
          <SessaoCard />
          <SessaoCard />   
        </div>
        <EditSessaoModal></EditSessaoModal>
      </div>
      <nav className="mt-4 d-flex justify-content-center">
  <ul className="pagination">
    <li  className={`page-item ${paginaAtual === 1 ? "active" : ""}`}>
    <button
          className="page-link"
          onClick={() => handleNumberPage(1)}
        >
          1
        </button>
    </li>
    <li  className={`page-item ${paginaAtual === 2 ? "active" : ""}`}>
    <button
          className="page-link"
          onClick={() => handleNumberPage(2)}
        >
          2
        </button>
    </li>
    <li  className={`page-item ${paginaAtual === 3 ? "active" : ""}`}>
    <button
          className="page-link"
          onClick={() => handleNumberPage(3)}
        >
          3
        </button>
    </li>
  </ul>
</nav>
    </>
  );
};

export default SessoesPage;


