import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
