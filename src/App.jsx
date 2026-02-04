import { Routes , Route  } from "react-router-dom";
import Home from "./pages/Home";
import ShootDetails from "./pages/ShootDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shoot/:id" element={<ShootDetails />} />
    </Routes>
  );
}