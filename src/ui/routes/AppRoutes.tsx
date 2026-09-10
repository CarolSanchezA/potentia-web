import { Routes, Route, useNavigate } from "react-router-dom";
import type { ReactNode } from "react";
import HomePage from "@/ui/pages/HomePage";
import Modal from "@/ui/components/Modal";
import TermosDeUso from "@/ui/pages/TermosDeUso";
import PoliticaPrivacidade from "@/ui/pages/PoliticaPrivacidade";

/**
 * Documento legal exibido sobre a home, fechando de volta para "/".
 * As rotas legais são filhas de "/" justamente para que a home continue
 * montada atrás do overlay.
 */
function LegalOverlay({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  return <Modal onClose={() => navigate("/")}>{children}</Modal>;
}

/**
 * Mapa de rotas do site.
 *
 * Antes isto era uma cadeia de `if (location.pathname === ...)` dentro do App:
 * cada página nova exigia editar o App (violando Open/Closed). Agora uma rota
 * nova é só mais um <Route> aqui.
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route
          path="termos-de-uso"
          element={
            <LegalOverlay>
              <TermosDeUso />
            </LegalOverlay>
          }
        />
        <Route
          path="politica-de-privacidade"
          element={
            <LegalOverlay>
              <PoliticaPrivacidade />
            </LegalOverlay>
          }
        />
      </Route>

      {/* Comportamento preservado: URL desconhecida exibe a home. */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
