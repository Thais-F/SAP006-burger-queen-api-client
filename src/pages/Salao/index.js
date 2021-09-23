import Input from "../../components/inputs/index.js";
import { useState, useEffect } from "react";
import InputSelect from "../../components/inputs/InputSelect.js";
import { Products } from "../../components/Product/index.js";
import Button from "../../components/Button/button.js";
import "./style.css";

const Menu = () => {
  const [menu, setMenu] = useState(true);
  const [breakfast, setBreakfast] = useState([]);
  const [allDay, setAllDay] = useState([]);

  const token = localStorage.getItem("usersToken");

  useEffect(() => {
    fetch("https://lab-api-bq.herokuapp.com/products", {
      headers: {
        accept: "application/json",
        Authorization: `${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const breakfast = data.filter((item) => item.type === "breakfast");
        setBreakfast(breakfast);
        const allDay = data.filter((item) => item.type === "all-day");
        console.log(allDay);
        setAllDay(allDay);
      });
  }, [token]);

  return (
    <main>
      <form className="container-salao">
        <div className="cliente-mesa">
          <h1>Menu e Atendimento</h1>

          <Input className="client" placeholder="Cliente"></Input>
          <InputSelect />
        </div>
        <div className="btn-menu">

          <Button
            className="categoriesBtn"
            id="breakfast"
            btnText="Café da Manhã"
            onClick={(e) => {
              e.preventDefault();            
              setMenu(false)}
            }
          />
          <Button
            className="categoriesBtn"
            id="all-day"
            btnText="All Day"
            onClick={(e) => {
              e.preventDefault();            
              setMenu(true)}
            }
          />
        </div>

        <div className="cards-menu">
          
          {menu ? (
            <div className="breakfast-menu">
              {breakfast &&
                breakfast.map((item) => (
                  <Products
                    divClassName="container-food"
                    itemName={item.name}
                    divId={item.id}
                    ImgSrc={item.image}
                    itemPrice={item.price}
                    itemFlavor={item.flavor}
                    itemNameKey={item.id}
                    divOnClick={() => {
                      setBreakfast([
                        ...breakfast,
                        { itemName: item.name, itemPrice: item.price },
                      ]);
                    }}
                  />
                ))}
            </div>
          ) : (
            <div className="all-day-menu">
              {allDay &&
                allDay.map((item) => (
                  <Products
                    divClassName="container-food"
                    itemName={item.name}
                    divId={item.id}
                    ImgSrc={item.image}
                    itemPrice={item.price}
                    itemFlavor={item.flavor}
                    itemNameKey={item.id}
                    divOnClick={() => {
                      setAllDay([
                        ...allDay,
                        { itemName: item.name, itemPrice: item.price },
                      ]);
                    }}
                  />
                ))}
            </div>
          )}
        </div>
      </form>
    </main>
  );
};

export default Menu;
