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
}) {
  return (
    <>
      <div className={divClassName} key={divKey} name={divName} id={divId} price={divPrice}>
        <div>
          <img src={ImgSrc} className="img-food" alt="img-food"></img>
        </div>
        <h1 className="divName" key={itemNameKey}> 
          {itemName} {itemPriceKey} {" "} R$ {itemPrice},00 <Button btnOnClick={divOnClick} btnClass="addBtn"  btnText="+" />
        </h1>
        <div className="divButton">
          {/* <h1 className="divPrice" key={itemPriceKey}> {" "} R$ {itemPrice},00 </h1> */}
          <h1 className="divFlavor"> {itemFlavor}</h1>
        </div>
        {/* <Button btnOnClick={divOnClick} btnClass="addBtn"  btnText="+" /> */}
      </div>
    </>
  );
}

