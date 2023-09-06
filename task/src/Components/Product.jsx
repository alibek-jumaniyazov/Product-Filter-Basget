export default function Product({item , addKarzinka}){
    return(
        <div className="Product">
            <div className="productImg">
                <img src={item.images[1]} alt="" />
            </div>
            <span className="productBrand">{item.brand}</span>
            <p className="productName">{item.title}</p>
            <span className="productDescription">{item.description}</span>
            <p className="productPrice">{item.price}$</p>
            <button onClick={() => addKarzinka(item.id , item.images[1] , item.title , item.price)}>Add Card</button>
        </div>
    )
}