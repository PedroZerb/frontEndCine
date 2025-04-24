import CinemaCard from "../../components/cardCinema";
import EditCinemaModal from "../../components/modalCinema";
import Navbar from "../../components/navbar";

// src/features/movies/pages/MoviesPage.jsx
const CinemasPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4 border border-danger">
      <div className="mb-3">
          <button className="btn btn-secondary">Adicionar Cinema</button>
        </div>
        <div className="d-flex flex-wrap gap-3">
          <CinemaCard></CinemaCard>
          <CinemaCard></CinemaCard> 
          <CinemaCard></CinemaCard> 
          <CinemaCard></CinemaCard> 
          <CinemaCard></CinemaCard> 
          <CinemaCard></CinemaCard>         
        </div>
        <EditCinemaModal></EditCinemaModal>
      </div>
    </>
  );
};

export default CinemasPage;


