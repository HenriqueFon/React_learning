const UserDetails = ({name,age,email,gender,ip_adress,city}) => {
    return (
        <>
            <div className = "card">
                <div className = "card_name">Nome:{name}</div>
                <div className = "card_age">Idade:{age}</div>
                <div className = "card_email">Email:{email}</div>
                <div className = "card_gender">Genero:{gender}</div>
                <div className = "card_adress">IP:{ip_adress}</div>
                <div className = "card_city">Cidade:{city}</div>
                {age >= 18 ? (<p>Usuario pode tirar carteira de habilitação</p>) :
                (<p>Menor de idade</p>)}
            </div>
        </>
    )
}

export default UserDetails;