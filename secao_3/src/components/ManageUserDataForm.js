import React, { useState } from 'react';
const ManageUserDataForm = () => {
    const [number, setNumber] = useState();
    
    return(
        <div>
            <label for = "name_form">Nome: </label>
            <input type = "text" id = "name_form"></input>
            <p>Nome:{number}</p>
            <button onClick = {() => {setNumber(document.getElementById("name_form").value)}}>Mudar variável</button>
        </div>
    )
}

export default ManageUserDataForm;