import './style.css';

const CartItems = ({itemNameKey, itemName, itemPrice, itemQtd, onClickAdd, onClickRemove}) => {

    return (
            <article key={itemNameKey}>
                <p>{itemQtd}-{itemName} - {itemPrice},00 
                </p>
                <button onClick={onClickAdd}>+</button>
                <button onClick={onClickRemove}>-</button>
            </article>
    )
}

export default CartItems;