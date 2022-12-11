import ManageUserList from "./components/ManageUserList";
import ManageUserDataJson from "./components/ManageUserDataJson";
import ManageUserDataForm from "./components/ManageUserDataForm";
import ManageUserData from "./components/ManageUserData";
import ManageUserDataPreviousState from "./components/ManageUserDataPreviousState";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import ManageUserDataJsonWithProps from "./components/ManageUserDataJsonWithProps";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import ChangeMessage from "./components/ChangeMessage";
import { useState } from "react";
import Message from "./components/Message";

function App() {
  function showMessage() {
    console.log("Evento do component pai");
  }
  
  const [message, setMessage] = useState("");
  
  const handleMessage = (msg) => {
    setMessage(msg);
  }
  return (
    <>
      <h1>Avançando em react</h1>
      <h2>Dados do usuário</h2>
      {/*State lift*/}
      {/*Aqui no caso componente message recebe uma mensagem que é passada
      dentro de uma função. Essa função por sua vez, altera o estado da variável */}
      <Message msg={message}/>
      <ChangeMessage handleMessage = {handleMessage}/>
      {/*Executar função dentro de um component usando prop*/}
      <ExecuteFunction myFunction = {showMessage}/>
      {/*Children prop que serve quando queremos colocar uma tag dentro da outra */}
      <Container>
        <p>E este é o container</p>
      </Container>
      {/*component render with destructuring props */}
      <ManageUserDataJsonWithProps/>
      <ConditionalRender/>
      {/*Props */}
      <ShowUserName name = "Henrique"/>
      {/*Destructuring */}
      <CarDetails brand = "VW" km = {10} color = "Azul"/>
      <CarDetails brand = "Ford" km = {0} color = "Cinza"/>
    </>
  );
}

export default App;
