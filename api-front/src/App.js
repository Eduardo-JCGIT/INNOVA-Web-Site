import Ind from "./components/index/Index";
import { Routes, Route } from 'react-router-dom';
import Lic from "./components/acadm/Lic";
import particle_data from "./components/global/config/particlesjs-config.json"
function App() {
  return (
    <div>
      <Ind/> 
      <Routes>
        <Route path="Lic" element={<Lic />}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
