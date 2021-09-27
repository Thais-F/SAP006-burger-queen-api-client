import './style.css';
import CartItems from "../cartItems/cartitems.js"
import { useState } from 'react';

const Cartmenu = ({ itemsArray }) => {
    let totalCost = 0

    function addOne(e) {
        e.preventDefault()
        setItemQuantity(itemQuantity + 1)
    }

    function deleteItem(e) {
        e.preventDefault()
        e.target.parentNode.remove()
    }

    const [itemQuantity, setItemQuantity] = useState(1)

    return (
        <aside>
            <section className="content">
                <section className="items-section">
                    {itemsArray.map((item) => {
                        totalCost = totalCost + (Number(item.itemPrice) * item.itemQtd)
                        console.log(totalCost)
                        return (
                            <p className="p-items">
                                {/* <span id="qnt">{itemQuantity}</span> */}
                                <CartItems
                                     itemNameKey={item.itemNameKey}
                                     itemName={item.itemName}
                                     itemPrice={item.itemPrice}
                                     itemQtd={item.itemQtd}
                                />
                                <button id={item.id} onClick={(e) => addOne(e)}>+</button>
                                <button onClick={(e) => deleteItem(e)}>aqui</button>
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