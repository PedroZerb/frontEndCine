import CinemaCard from "../../components/cardCinema";
import EditCinemaModal from "../../components/modalCinema";
import Navbar from "../../components/navbar";
import { CreateCinema, getAllCinemas } from "../../services/cinema";
import { useEffect, useState } from "react";

// Fazer a listagem, o que for clicado da lista deve passado os dados desse elemento
// da fila para o modal.
const CinemasPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cinemas, setCinemas] = useState([]);
  const openModal = () => {
    setIsVisible(true);
  };

  const handleCloseModal = () => {
    console.log("executou o fechar");
    setIsVisible(false);
  };

  useEffect(() => {
    getAllCinemas()
      .then((response) => {
        console.log(response.data);
        setCinemas(response.data);
      })
      .catch((error) => {
        console.error("Erro ao criar cinema:", error);
      });

    // Aqui você pode atualizar o estado, fazer um fetch PUT/POST, etc.
  }, []);

  const handleSave = async (updatedData) => {
    console.log("Dados salvos:", updatedData.nome);

    const novoCinema = {
      nome: updatedData.nome,
      cidade: updatedData.cidade,
      estado: updatedData.estado,
    };

    CreateCinema(novoCinema)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erro ao criar cinema:", error);
      })
      .finally(setIsVisible(false));
    // Aqui você pode atualizar o estado, fazer um fetch PUT/POST, etc.
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4 border border-danger">
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
            ></CinemaCard>
          ))}
        </div>
        <EditCinemaModal
          showModal={isVisible}
          handleCloseModal={handleCloseModal}
          handleSave={handleSave}
        ></EditCinemaModal>
      </div>
    </>
  );
};

export default CinemasPage;
