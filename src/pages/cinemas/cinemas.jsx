import CinemaCard from "../../components/cards/cardCinema";
import EditCinemaModal from "../../components/modal/modalCinema";
import Navbar from "../../components/navbar/navbar";
import { CreateCinema, getAllCinemas, deleteCinema, updateCinema } from "../../services/cinema";
import { useEffect, useState } from "react";
import AlertMessage from "../../components/message/message";
import Pagination from "../../components/pagination/pagination";


const CinemasPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cinemas, setCinemas] = useState([]);
  const [valueCinema, setValueCinema ] = useState({})
  const [alert, setAlert] = useState(null);
  const [currentPage, setCurrentPage] = useState(1)
  const[totalItems, setTotalItems] = useState(1)
  const [pageResetKey, setPageResetKey] = useState(0);
  const openModal = () => {
    setIsVisible(true);
  };

  const handleCloseModal = () => {
    setValueCinema({})
    setIsVisible(false);

  };

  

  useEffect(() => {
    getAllCinemas(currentPage)
      .then((response) => {
        setCinemas(response.data.cinemas);
        setTotalItems(response.data.total)
      })
      .catch((error) => {
        console.error("Erro buscar cinemas", error);
      });
  }, [currentPage, pageResetKey]);


  const handleSave = async (updatedData) => {

    if (!valueCinema.id) {
      const novoCinema = {
        nome: updatedData.nome,
        cidade: updatedData.cidade,
        estado: updatedData.estado,
      };
  
      CreateCinema(novoCinema)
        .then((response) => {
          setAlert({ type: "success", message: "Cinema criado com sucesso!" });
          console.log(response.data);
          setPageResetKey(prev => prev + 1);
          setCurrentPage(1)
        })
        .catch((error) => {
          console.error("Erro ao criar cinema:", error);
          setAlert({ type: "danger", message: error.response.data.message });
        })
        .finally(setIsVisible(false));
    } else {
      

      updateCinema(updatedData, valueCinema.id)
        .then((response) => {
          setAlert({ type: "success", message: "Cinema atualizado com sucesso!" });
          console.log(response.data);
          setPageResetKey(prev => prev + 1);
        })
        .catch((error) => {
          console.error("Erro ao atualizar cinema:", error);
          setAlert({ type: "danger", message: error.response.data.message });
        })
        .finally(() => {
          setIsVisible(false)
          setValueCinema({})
        });

    }
 
  
  };


  const DeleteCinema = async (id) => {

   
    deleteCinema(id)
      .then((response) => {
        setAlert({ type: "success", message: "Cinema deletado!" });
        console.log(response.data);
        setPageResetKey(prev => prev + 1);
      })
      .catch((error) => {
        setAlert({ type: "danger", message: error.response.data.message });
      })
    // Aqui você pode atualizar o estado, fazer um fetch PUT/POST, etc.
  };

  const handleEdit = (element) => {
    setValueCinema({
      nome: element.nome,
      cidade: element.cidade,
      estado: element.estado,
      id: element.id
    });
   openModal()
  };

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
          <button className="btn btn-secondary" onClick={openModal}>
            Adicionar Cinema
          </button>
        </div>
        <div className="d-flex flex-wrap gap-3">
          {cinemas.map((element) => (
            <CinemaCard
              nome={element.nome}
              estado={element.estado}
              cidade={element.cidade}
              onDelete={() => DeleteCinema(element.id)}
              onEdit={() => handleEdit(element)}
            ></CinemaCard>
          ))}
        </div>
        <EditCinemaModal
          key={valueCinema.id || 'modal'}
          movieData={{nome: valueCinema.nome,cidade:valueCinema.cidade,estado:valueCinema.estado}}
          showModal={isVisible}
          handleCloseModal={handleCloseModal}
          handleSave={handleSave}
        ></EditCinemaModal>
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

export default CinemasPage;
