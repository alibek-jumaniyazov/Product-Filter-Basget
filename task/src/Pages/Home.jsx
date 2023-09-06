import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/UseContext'
import Product from '../Components/Product';
import ZakazProduct from '../Components/ZakazProduct';

export default function Home() {

    const { product } = useContext(UserContext)
    const [number, setNumber] = useState(20)
    const [count, setCount] = useState(null)
    const [open, setOpen] = useState("none")
    const [filter, setFilter] = useState(null)
    const [zakazProduct, setZakazProduct] = useState([])

    console.log(product);
    // function OpenKarzinka(){
    //     if(open == 'none'){
    //         setOpen('Karzinka')
    //     }
    //     if(open == 'Karzinka'){
    //         setOpen('none')
    //     }
    // }
    function addKarzinka(id, img, title, pricee) {
        setZakazProduct(value => [...value, {
            id: id,
            img: img,
            name: title,
            price: pricee,
        }])
        setCount(count + 1)
    }

    return (
        <div className='Home'>
            <header>
                <div className="CategoryFilter">
                    <label>Filterlash uchun kategoriya:</label>
                    <select onChange={(e) => setFilter(e.target.value)}>
                        <option value="">Barchasi</option>
                        <option value="smartphones">Smartfonlar</option>
                        <option value="laptops">Noutbuklar</option>
                        <option value="fragrances">Parfumerialar</option>
                        <option value="skincare">Teri Uchun</option>
                        <option value="groceries">Oziq-ovqat</option>
                        <option value="home-decoration">Uy uchun</option>
                    </select>
                </div>
                <div className="karzinkaIcon" onClick={() => setOpen('Karzinka')}><i className="fa-solid fa-cart-shopping"></i> {count}</div>
                <div className={open}>
                    <i className="fa-solid fa-x" onClick={() => setOpen('none')}></i>
                    <div className="AllzakazProduct">
                        {
                            zakazProduct.map((item) => (
                                <ZakazProduct item={item} />
                            ))
                        }
                    </div>
                </div>
            </header>
            <div className="AllProducts">
                {
                    product.slice(0, number).filter((item) => filter ? item.category === filter : true).map((item, index) => (
                        <Product item={item} addKarzinka={addKarzinka} key={index} />
                    ))
                }
            </div>
            <button className="korsat" onClick={() => setNumber(number + 20)}>Yana Ko'rsatish</button>
        </div>
    )
}
