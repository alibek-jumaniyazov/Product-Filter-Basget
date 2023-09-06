export default function ZakazProduct({item}) {
    return (
        <div className="ZakazProduct">
            <img src={item.img} alt="" />
            <div className="productZakazInfo">
                <p>{item.name}</p>
                <span>{item.price}$</span>
            </div>
        </div>
    )
}