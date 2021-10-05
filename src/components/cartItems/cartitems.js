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
        <p className="p-btn-items">
          {" "}
          <button className="btn-add-item" onClick={onClickAdd}><i class="fas fa-plus-circle"></i></button>{"|"}
          <button className="btn-removeone-item" onClick={onClickRemove}><i class="fas fa-minus-circle"></i></button>{"|"}
          <button className="btn-delete-item" onClick={onClickDelete}><i class="fas fa-trash-alt"></i></button>
        </p>
      </div>
    </article>
  );
};

export default CartItems;
