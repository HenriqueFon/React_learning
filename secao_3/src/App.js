import ManageUserList from "./components/ManageUserList";
import ManageUserDataJson from "./components/ManageUserDataJson";
import ManageUserDataForm from "./components/ManageUserDataForm";
import ManageUserData from "./components/ManageUserData";
import ManageUserDataPreviousState from "./components/ManageUserDataPreviousState";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import ManageUserDataJsonWithProps from "./components/ManageUserDataJsonWithProps";
function App() {
  return (
    <>
      <h1>Avançando em react</h1>
      <h2>Dados do usuário</h2>
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
