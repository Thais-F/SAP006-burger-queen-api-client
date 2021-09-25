import './style.css';
import { useState } from 'react';

const CartItems = ({id, name, price, qtd}) => {

    // function addOne(e) {
    //     e.preventDefault()
    //     setItemQuantity(itemQuantity + 1)
    // }

    function deleteItem(e) {
        e.preventDefault()
        e.target.parentNode.parentNode.remove()
    }

    // const [ itemQuantity, setItemQuantity ] = useState(1)

    return (
            <article key={id}>
                <p>{qtd}-{name} - {price},00 
                {/* <button onClick={(e) => addOne(e)}>+</button> */}
                <button onClick={(e) => deleteItem(e)}>aqui</button>
                </p>
            </article>
    )
}

export default CartItems;