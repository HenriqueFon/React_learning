import Title from "./components/Title";
import "./style/App.css"
function App() {
  let n = 10;
  let variavelClasseDinamica = 10;
  return (
    <div className="App">
      <h1>CSS REACT</h1>
      <h2 style = {{background:"blue", padding:"20px"}}>CSS INLINE</h2>
      <h2 style = {n == 10 ? {background:"green"} : {background:"black"}}>CSS Dinâmico</h2>
      <h3 className = {variavelClasseDinamica == 10 ? "classe1" : "classe2"}>Aqui será uma classe dinâmica</h3>
      {/* CSS Modules */}
      <Title/>
    </div>
  );
}

export default App;
