const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e.target.value);
    };

    return (
        <div>
            <div>
                <button onClick = {handleMyEvent}>Clique aqui!</button>
            </div>
        </div>
    )
}

export default Events;