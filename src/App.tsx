import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import Home from "./pages/Home";
import Description from "./pages/Description";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/caracteristicas/:name" element={<Description />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
