import './style.css';

const CartItems = ({itemNameKey, itemName, itemPrice, itemQtd, itemFlavor, itemComplement, onClickAdd, onClickRemove, onClickDelete}) => {

    return (
            <article key={itemNameKey}>
                <p>{itemQtd}-{itemName} {itemFlavor} {itemComplement}
 - {itemPrice},00 
                </p>
                <button onClick={onClickAdd}>+</button>
                <button onClick={onClickRemove}>-</button>
                <button onClick={onClickDelete}>ex</button>
            </article>
    )
}

export default CartItems;