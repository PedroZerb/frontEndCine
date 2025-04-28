import MovieCard from "../../components/cards/cardFilm";
import EditMovieModal from "../../components/modal/modalFilm";
import Navbar from "../../components/navbar/navbar";
import { useEffect, useState } from "react";
import { CreateFilme, deleteFilme, getAllFilmes, updateFilme } from "../../services/filmes";
import Pagination from "../../components/pagination/pagination";
import AlertMessage from "../../components/message/message";

const MoviesPage = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [alert, setAlert] = useState(null);
  const [valueFilme, setValueFilme ] = useState({})
  const [filmes, setFilmes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const[totalItems, setTotalItems] = useState(1)
  const [pageResetKey, setPageResetKey] = useState(0); // nova chave

  const openModal = () => {
    setIsVisible(true);
  };

  const handleCloseModal = () => {
     setValueFilme({})
    setIsVisible(false);
  };

    const handleSave = async (updatedData) => {

      const filme = {
        nome: updatedData.nome,
        genero: updatedData.genero,
        classificacao: parseInt(updatedData.classificacao),
        lancamento: updatedData.lancamento,
        sinopse: updatedData.sinopse,
        duracao: updatedData.duracao
      };
  
  
      if (!valueFilme.id) {
    
        CreateFilme(filme)
          .then((response) => {
            setAlert({ type: "success", message: "Filme Criado com Sucesso!" });
            setPageResetKey(prev => prev + 1);
            setCurrentPage(1)
          })
          .catch((error) => {
            console.error("Erro ao criar Filmes:", error);
            setAlert({ type: "danger", message: error.response.data.message });
          })
          .finally(() => {
            setIsVisible(false)
          });
      } else {
  
        updateFilme(filme, valueFilme.id)
          .then((response) => {
            setAlert({ type: "success", message: "Filme atualizado com sucesso!" });
            setPageResetKey(prev => prev + 1);
          })
          .catch((error) => {
            setAlert({ type: "danger", message: error.response.data.message });
          })
          .finally(() => {
            setIsVisible(false)
            setValueFilme({})
          });
  
      }    
    };

    const handleEdit = (element) => {

    
  
      setValueFilme({
        nome: element.nome,
        genero: element.genero,
        duracao: element.duracao,
        classificacao: element.classificacao,
        lancamento: element.lancamento,
        sinopse: element.sinopse,
        id: element.id
      });
     
     
     openModal()
    };

    const DeleteCinema = async (id) => {
    
        deleteFilme(id)
          .then((response) => {
            setAlert({ type: "success", message: "Cinema deletado!" });
            setPageResetKey(prev => prev + 1);
            setCurrentPage(1)
          })
          .catch((error) => {
            console.error("Erro deletar cinema:", error);
            setAlert({ type: "danger", message: error.response.data.message });
          })
      };

      useEffect(() => {
        getAllFilmes(currentPage)
          .then((response) => {
            setFilmes(response.data.filmes);
            setTotalItems(response.data.total)
          })
          .catch((error) => {
            console.error("Erro buscar cinemas", error);
          });
      }, [currentPage,pageResetKey]);
    

  return (
    <>
      <Navbar />
      <div className="container mt-4 border border-danger">
      {alert && (
          <AlertMessage
            type={alert.type}
            message={alert.message}
            onClose={() => setAlert(null)}
          />
        )}
      <div className="mb-3">
          <button className="btn btn-secondary" onClick={openModal} >Adicionar Filme</button>
        </div>
        <div className="d-flex flex-wrap gap-3">

        <div className="d-flex flex-wrap gap-3">
          {filmes.map((element) => (
            <MovieCard
              nome={element.nome}
              genero={element.genero}
              duracao={element.duracao}
              classificacao={element.classificacao}
              lancamento={element.lancamento}
              sinopse={element.sinopse}
              onDelete={() => DeleteCinema(element.id)}
              onEdit={() => handleEdit(element)}
            ></MovieCard>
          ))}
        </div>         
        </div>
        <EditMovieModal
          key={valueFilme.id || 'modal'}
          movieData={{nome: valueFilme.nome, genero: valueFilme.genero, classificacao: valueFilme.classificacao, lancamento: valueFilme.lancamento, sinopse: valueFilme.sinopse,duracao: valueFilme.duracao}}
          showModal={isVisible}
          handleCloseModal={handleCloseModal}
          handleSave={handleSave}
        ></EditMovieModal>
        <Pagination
          currentPage={currentPage}
          totalItems={totalItems}
          itemsPerPage={6}
          onPageChange={(value) => setCurrentPage(value)}
        />
      </div>
    </>
  );
};

export default MoviesPage;


