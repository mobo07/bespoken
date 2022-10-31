import { BrowserRouter, Routes, Route } from "react-router-dom";
import DesignLab from "./pages/DesignLab";
import Home from "./pages/Home";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="designlab" element={<DesignLab />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
