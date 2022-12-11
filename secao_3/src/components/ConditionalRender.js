import { useState } from "react";

const ConditionalRender = () => {
    const [x] = useState(true);
    const [name] = useState("João")
    return <div>
             <h1>Isso será exibido?</h1>
             {x && <p> Se x for true, sim!</p>}
             {!x && <p> Se x for true, sim!</p>}
             {name == "João" ? (
                <div><p>O nome é João</p></div>
             ) : 
             (
                <div><p>O nome não é João</p></div>
            )}
           </div>
}

export default ConditionalRender;