const Container = ({children}) => {
    //o html passado dentro do componente container é passado como prop
    //children e é posicionado dentro da tag
    return (
        <div>
            <h2>Este é o titulo do container</h2>
            {children}
        </div>
    )
}

export default Container;