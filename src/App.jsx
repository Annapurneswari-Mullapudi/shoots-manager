// import Home from "./pages/Home";

// export default function App() {
//   return <Home />;
// }



import { Routes , Route  } from "react-router-dom";
import Home from "./pages/Home";
import ShootDetails from "./pages/Shootdetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shoot/:id" element={<ShootDetails />} />
    </Routes>
  );
}

