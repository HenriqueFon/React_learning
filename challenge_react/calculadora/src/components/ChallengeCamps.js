
import React, {useEffect, useState} from "react";

const ChallengeCamps = () =>{ 
    let valor1 = 10;
    let valor2 = 20;
    return (
        <>
            <div>
                <p>Valor 1:{valor1}</p>
                <p>Valor 2:{valor2}</p>
                <p>Resultado:{valor1 + valor2}</p>
            </div>
        </>
    )
}

export default ChallengeCamps;