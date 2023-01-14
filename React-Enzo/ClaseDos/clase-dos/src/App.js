import Cabecera from "./components/Cabecera";
import ContadorClase from "./components/ContadorClase";
import ContadorFuncional from "./components/ContadorFuncional";
import Lista from "./components/Lista";
import Navegacion from "./components/Navegacion";
import PieDePagina from "./components/PieDePagina";

function App() {
  return (
    <>
      <Cabecera titulo="ComidApp"></Cabecera>
      <Navegacion />
      <Lista />
      <ContadorClase />
      <ContadorFuncional />
      <PieDePagina texto="CopyRight 2022. EducacionIT" />
    </>
  );
}

export default App;
