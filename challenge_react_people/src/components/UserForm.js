const UserForm = ({functionAddUser}) => {
    return (
        <div>
            <div>
                <label for = "name_text">Nome:</label>
                <input type = "text" id = "user_name"></input>
                <label for = "name_text">Idade:</label>
                <input type = "text" id = "user_age"></input>
                <label for = "name_text">Email:</label>
                <input type = "text" id = "user_email"></input>
                <label for = "name_text">Gênero:</label>
                <input type = "text" id = "user_gender"></input>
                <label for = "name_text">Endereço IP:</label>
                <input type = "text" id = "user_IP"></input>
                <label for = "name_text">Cidade:</label>
                <input type = "text" id = "user_city"></input>
                <button onClick = {() => {

                    let nome = document.getElementById("user_name").value;
                    let age = document.getElementById("user_age").value;
                    let email = document.getElementById("user_email").value;
                    let gender = document.getElementById("user_gender").value;
                    let IP = document.getElementById("user_IP").value;
                    let city = document.getElementById("user_city").value;

                    const userObject = {
                            name:nome,
                            idade:age,
                            email:email,
                            genero:gender,
                            IP:IP,
                            cidade:city
                    };
                    
                    functionAddUser(nome,age,email,gender,IP,city);
                }}>Cadastrar</button>
            </div>
        </div>
    )
}

export default UserForm;