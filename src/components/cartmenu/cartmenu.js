import './style.css';
import CartItems from "../cartItems/cartitems.js"
import { useState } from 'react';

const Cartmenu = ({ itemsArray }) => {
    let totalCost = 0

    function addOne(e) {
        e.preventDefault()
        setItemQuantity(itemQuantity + 1)
    }

    const [itemQuantity, setItemQuantity] = useState(1)

    return (
        <aside>
            <section className="content">
                <section className="items-section">
                    {itemsArray.map((item) => {
                        totalCost = totalCost + Number(item.price)
                        console.log(totalCost)
                        return (
                            <p className="p-items">
                                <span id="qnt">{itemQuantity}</span>
                                <CartItems
                                    key={item.id}
                                    name={item.name}
                                    price={item.price}
                                />
                                <button id={item.id} onClick={(e) => addOne(e)}>+</button>
                            </p>
                        )
                    })}
                </section>
                <p>Total do Pedido: {totalCost},00</p>
            </section>
        </aside>
    )
}

export default Cartmenu;