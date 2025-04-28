// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import MoviesPage from "../pages/filmes/filmes";
import CinemasPage from "../pages/cinemas/cinemas";
import SessoesPage from "../pages/sessoes/sessoes";
import LoginPage from "../pages/login/login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/cinemas" element={<CinemasPage></CinemasPage>} />
      <Route path="/sessoes" element={<SessoesPage></SessoesPage>} />
      <Route path="/filmes" element={<MoviesPage></MoviesPage>} />
      <Route path="/login" element={<LoginPage></LoginPage>} />
      <Route path="*" element={<MoviesPage></MoviesPage>} />
    </Routes>
  );
};

export default AppRoutes;
