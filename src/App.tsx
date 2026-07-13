import { BrowserRouter, useLocation, useNavigate } from "react-router-dom";
import Home from "@/pages/Home";
import Modal from "@/components/sections/Modal";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosDeUso from "./pages/TermosDeUso";

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const rota = location.pathname;

  return (
    <>
      <Home />

      {rota === "/politica-de-privacidade" && (
        <Modal onClose={() => navigate("/")}>
          <PoliticaPrivacidade />
        </Modal>
      )}

      {rota === "/termos-de-uso" && (
        <Modal onClose={() => navigate("/")}>
          <TermosDeUso />
        </Modal>
      )}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}