const ItemListContainer = ({ greeting }) => {
    let variable2 = "Hola";    
    return (
        <>
        <div className="ps-4 text-danger">
            {variable2} {greeting}
        </div>
        </>
    )
}

export default ItemListContainer;