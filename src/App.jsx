import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import PokemonsProvider from "./context/PokemonsContext";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <PokemonsProvider>
      <div>
        <Header />
        <Dashboard />
        <GlobalStyle />
      </div>
    </PokemonsProvider>
  );
}

export default App;
