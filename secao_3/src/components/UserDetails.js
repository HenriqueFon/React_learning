const UserDetails = ({name,email,sex,city}) => {
    return(
        <div>
            <h2>Nome:{name}</h2>
            <h3>Email:{email}</h3>
            <h3>sexo:{sex}</h3>
            <h3>cidade:{city}</h3>
        </div>
    )
}

export default UserDetails;