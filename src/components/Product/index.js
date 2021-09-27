import React from "react";
import Button from "../Button/button.js";

export function Products({
  divOnClick,
  divClassName,
  divKey,
  divName,
  divId,
  divPrice,
  itemName,
  itemPrice,
  itemNameKey,
  itemPriceKey,
  itemFlavor,
  ImgSrc,
  itemComplement
}) {
  return (
    <>
      <div className={divClassName} key={divKey} name={divName} id={divId} price={divPrice}>
        <section className="product-info">
          <img src={ImgSrc} className="img-food" alt="img-food"></img>
      
        <h1 className="divName" key={itemNameKey}> 
          {itemName} {itemPriceKey} {itemFlavor} {" "} {itemComplement} R$ {itemPrice},00 <Button btnOnClick={divOnClick} btnClass="addBtn"  btnText="✛" />
        </h1>
        </section>
        <div className="divButton">
          {/* <h1 className="divPrice" key={itemPriceKey}> {" "} R$ {itemPrice},00 </h1> */}
          {/* <h1 className="divFlavor"> {itemFlavor}</h1> */}
        </div>
        {/* <Button btnOnClick={divOnClick} btnClass="addBtn"  btnText="+" /> */}
      </div>
    </>
  );
}

