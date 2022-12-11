const CarDetails = ({brand,color,km}) => {
    return <div>
        <h2>Detalhes do carro:</h2>
        <ul>
            <li>Marca:{brand}</li>
            <li>Cor:{color}</li>
            <li>KM:{km}</li>
        </ul>
        {km == 0 && <p>Este carro é novo</p>}
    </div>
}




// const CarDetails = (props) => {
//     return <div>
//         <h2>Detalhes do carro:</h2>
//         <ul>
//             <li>Marca:{props.brand}</li>
//             <li>Cor:{props.color}</li>
//             <li>KM:{props.km}</li>
//         </ul>
//     </div>
// }

export default CarDetails;