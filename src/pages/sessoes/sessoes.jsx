import SessaoCard from "../../components/cards/cardSessao";
import EditSessaoModal from "../../components/modal/modalsessao";
import Navbar from "../../components/navbar/navbar";
import { useEffect, useState } from "react";
import Pagination from "../../components/pagination/pagination";
import AlertMessage from "../../components/message/message";
import { CreateSessao, deleteSessao, getAllSessoes, updateSessao } from "../../services/sessoes";
import SelectCinema from "../../components/selectCinema/selectCinema";

const SessoesPage = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [alert, setAlert] = useState(null); 
  const [valueSessao, setValueSessao ] = useState({})
  const [sessoes, setSessoes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const[totalItems, setTotalItems] = useState(1)
  const [cinemaSelecionado, setCinemaSelecionado] = useState(null); 
  const [pageResetKey, setPageResetKey] = useState(0);

  const openModal = () => {
    setIsVisible(true);
  };

  const handleCloseModal = () => {
     setValueSessao({})

    setIsVisible(false);
  };

    const handleSave = async (updatedData) => {

      const sessao = {
        cinema_id: cinemaSelecionado,
        filme_id: updatedData.filme_id,
        dia_semana: updatedData.diaSemana,
        horario: updatedData.horario
      };
  
  
      if (!valueSessao.id) {
           
        CreateSessao(sessao)
          .then((response) => {
            setAlert({ type: "success", message: "Sessão criado com Sucesso!" });
            setPageResetKey(prev => prev + 1);
            setCurrentPage(1)
          })
          .catch((error) => {
            console.error("Erro ao criar Filmes:", error);
            setAlert({ type: "danger", message: error.response.data.message });
          })
          .finally(setIsVisible(false));
      } else {
  
        updateSessao(sessao, valueSessao.id)
          .then((response) => {
            setAlert({ type: "success", message: "Sessão atualizado com sucesso!" });
            setPageResetKey(prev => prev + 1);
          })
          .catch((error) => {
          
            setAlert({ type: "danger", message: error.response.data.message });
          })
          .finally(() => {
            setIsVisible(false)
            setValueSessao({})
          });
  
      }
   
    
    };

    const handleEdit = (element) => {
    
      setValueSessao({
        diaSemana: element.dia_semana,
        filme_id: element.filme_id,
        horario: element.horario,
        id: element.id
        });         
     openModal()
    };

    const DeleteSessao = async (id) => {
        deleteSessao(id)
          .then((response) => {
            setAlert({ type: "success", message: "Sessão deletada!" });
            setPageResetKey(prev => prev + 1);
            setCurrentPage(1)
          })
          .catch((error) => {
            console.error("Erro deletar sessão:", error);
            setAlert({ type: "danger", message: error.response.data.message });
          })
    };

    useEffect(() => {
      
      if (cinemaSelecionado) {
        setValueSessao({})
        getAllSessoes(currentPage, 6, cinemaSelecionado)
          .then((response) => {
            setSessoes(response.data);
            setTotalItems(20);
          })
          .catch((error) => {
            console.error("Erro buscar sessões", error);
            setSessoes([]);
          });
      }
    }, [currentPage, cinemaSelecionado, pageResetKey]);
    

  return (
    <>
    <Navbar />
    <div className="container mt-4">
      {alert && (
        <AlertMessage
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}

      <SelectCinema onCinemaSelect={(id) => setCinemaSelecionado(id)} />

      {cinemaSelecionado && (
        <>
          <div className="mb-3">
            <button className="btn btn-secondary" onClick={openModal}>Adicionar Sessão</button>
          </div>
          <div className="d-flex flex-wrap gap-3">
            {sessoes.map((element) => (
              <SessaoCard
                key={element.id}
                filme={element.nome_filme}
                cinema={element.nome_cinema}
                diaSemana={element.dia_semana}
                horario={element.horario}
                onDelete={() => DeleteSessao(element.id)}
                onEdit={() => handleEdit(element)}
                handleCloseModal={handleCloseModal}
              />
            ))}
          </div>          
      <EditSessaoModal
        key={valueSessao.id || 'modal'}
        Data={{
        diaSemana: valueSessao.diaSemana,
        filme_id: valueSessao.filme_id,
        horario: valueSessao.horario
        }}
        showModal={isVisible}
        handleCloseModal={handleCloseModal}
        handleSave={handleSave}
      />
          <Pagination
            currentPage={currentPage}
            totalItems={totalItems}
            itemsPerPage={6}
            onPageChange={(value) => setCurrentPage(value)}
          />
        </>
      )}
    </div>
  </>
  );
};

export default SessoesPage;


