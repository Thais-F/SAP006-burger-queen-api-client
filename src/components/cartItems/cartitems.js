import './style.css';

const CartItems = ({itemNameKey, itemName, itemPrice, itemQtd, onClickAdd, onClickRemove, onClickDelete}) => {

    return (
            <article key={itemNameKey}>
                <p>{itemQtd}-{itemName} - {itemPrice},00 
                </p>
                <button onClick={onClickAdd}>+</button>
                <button onClick={onClickRemove}>-</button>
                <button onClick={onClickDelete}>ex</button>
            </article>
    )
}

export default CartItems;