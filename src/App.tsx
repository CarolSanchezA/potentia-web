import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@/ui/routes/AppRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
