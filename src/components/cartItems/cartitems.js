import "./style.css";

const CartItems = ({
  itemNameKey,
  itemName,
  itemPrice,
  itemQtd,
  itemFlavor,
  itemComplement,
  onClickAdd,
  onClickRemove,
  onClickDelete,
}) => {
  return (
    <article>
      <div>
        {itemQtd}-{itemName} {itemFlavor} {itemComplement}- R$ {itemPrice},00{" "}
        <p>
          {" "}
          <button onClick={onClickAdd}>+</button>
          <button onClick={onClickRemove}>-</button>
          <button onClick={onClickDelete}>ex</button>
        </p>
      </div>
    </article>
  );
};

export default CartItems;
