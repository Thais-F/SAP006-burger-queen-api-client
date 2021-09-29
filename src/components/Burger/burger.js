import React from "react";
import Button from "../Button/button";

export function Burger({
  divOnClick,
  divClassName,
  divKey,
  divName,
  divId,
  divPrice,
  itemPrice,
  itemName,
  itemNameKey,
  itemPriceKey,
  itemFlavor,
  itemComplement,
}) {
  return (
    <>
      <div
        className={divClassName}
        key={divKey}
        name={divName}
        id={divId}
        price={divPrice}
      >

        <section className="burger-info">
          <h1 className="divBurger" key={itemNameKey}>
            <span className="itemName"> {itemName} </span>
            {itemPriceKey} {itemFlavor} {itemComplement} R$ {itemPrice},00{" "}
            <Button btnOnClick={divOnClick} btnClass="addBtn" btnText="✛" />
          </h1>
        </section>
        </div>
       
    </>
  );
}
