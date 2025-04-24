import MovieCard from "../../components/cardFilm";
import EditMovieModal from "../../components/modalFilm";
import Navbar from "../../components/navbar";

// src/features/movies/pages/MoviesPage.jsx
const MoviesPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4 border border-danger">
      <div className="mb-3">
          <button className="btn btn-secondary">Adicionar Filme</button>
        </div>
        <div className="d-flex flex-wrap gap-3">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />          
          <MovieCard />
          <MovieCard />          
        </div>
        <EditMovieModal></EditMovieModal>
      </div>
    </>
  );
};

export default MoviesPage;


