import React, { useState } from 'react';
const ManageUserData = () => {
    const [number, setNumber] = useState(10);
    
    return(
        <div>
            <p>Valor:{number}</p>
            <button onClick = {() => {setNumber(25)}}>Mudar variável</button>
        </div>
    )
}

export default ManageUserData;