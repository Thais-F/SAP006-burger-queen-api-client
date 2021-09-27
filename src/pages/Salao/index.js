import Input from "../../components/inputs/index.js";
// import Cartmenu from "../../components/cartmenu/cartmenu.js";
import Button from '../../components/Button/button.js'
import '../../components/Button/style.css'
import { useState, useEffect } from "react";
import InputSelect from "../../components/inputs/InputSelect.js";
import { Products } from "../../components/Product/index.js";
import "./style.css";
import CartItems from "../../components/cartItems/cartitems.js"

const Menu = () => {
  const [menu, setMenu] = useState(true);
  const [breakfast, setBreakfast] = useState([]);
  // const [allDay, setAllDay] = useState([]);
  const [burgers, setBurgers] = useState([]);
  const [side, setSide] = useState([]);
  const [drinks, setDrinks] = useState([]);

  // const [ estadoAtual, atualizarEstado] = useState(0)
  let totalCost = 0


  const [order, setOrder] = useState([])

  //   function addOne(e) {
  //     e.preventDefault()
  //     setItemQuantity(itemQuantity + 1)
  // }

  // function deleteItem(e) {
  //     e.preventDefault()
  //     e.target.parentNode.remove()
  // }

  function addOrder(e, item) {
    e.preventDefault()
    console.log(item)
    setOrder([
      ...order,
      { itemName: item.name, itemPrice: item.price, itemNameKey: item.id, itemQtd: 1 },
    ]);
  }

  function addOne(item) {
    console.log(item)
  }


  const token = localStorage.getItem("usersToken");
  console.log(token);

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
        // const allDay = data.filter((item) => item.type === "all-day");
        // console.log(allDay);
        // setAllDay(allDay);

        const burgers = data.filter((item) => item.id >= 33 && item.id <= 50);
        setBurgers(burgers);
        const side = data.filter((item) => item.sub_type === "side");
        setSide(side);
        const drinks = data.filter((item) => item.sub_type === "drinks");
        setDrinks(drinks);
      });
  }, [token]);

  //   function toOrder(e) {
  //     e.preventDefault()
  //     setOrder({
  //         "client": "string",
  //         "table": "2",
  //         "products": [
  //           {
  //             "id": 31,
  //             "qtd": 2,
  //             "flavor": null,
  //             "complement": null,
  //           }
  //         ]
  //       })
  // }

  function teste(e) {
    e.preventDefault()
    console.log(order)
  }

  return (
    <main className="menu">
      <h1>Menu e Atendimento</h1>
      <nav className="btn-mesa">
        <div className="btn-menu">
          <Button
            btnClass="categoriesBtn"
            id="breakfast"
            btnText="Café da Manhã"
            btnOnClick={(e) => {
              e.preventDefault();
              setMenu(true);
            }}
          />
          <Button
            btnType="button"
            btnClass="categoriesBtn"
            id="all-day"
            btnText="All Day"
            btnOnClick={(e) => {
              e.preventDefault();
              setMenu(false);
            }}
          />
        </div>
        <div className="cliente-mesa">
          <Input className="input client" placeholder="Cliente"></Input>
          <InputSelect />
        </div>
      </nav>

      <form className="container-salao">
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
                    divOnClick={(e) => addOrder(e, item)}
                  />
                ))}
            </div>
          ) : (
            <div className="all-day-menu">

              <h1 className="topics">✨ Hambúrguers </h1>

              {burgers &&
                burgers.map((item) => (
                  <Products
                    divClassName="container-food"
                    itemName={item.name}
                    divId={item.id}
                    ImgSrc={item.image}
                    itemPrice={item.price}
                    itemFlavor={item.flavor}
                    itemComplement={
                      item.complement ? ` com ${item.complement}` : null
                    }
                    itemNameKey={item.id}
                    divOnClick={(e) => addOrder(e, item)}
                  />
                ))}
              <h1 className="topics"> ✨ Acompanhamentos </h1>
              {side &&
                side.map((item) => (
                  <Products
                    divClassName="container-food"
                    itemName={item.name}
                    divId={item.id}
                    ImgSrc={item.image}
                    itemPrice={item.price}
                    itemFlavor={item.flavor}
                    itemNameKey={item.id}
                    divOnClick={(e) => addOrder(e, item)}
                  />
                ))}

              <h1 className="topics"> ✨ Bebidas </h1>
              {drinks &&
                drinks.map((item) => (
                  <Products
                    divClassName="container-food"
                    itemName={item.name}
                    divId={item.id}
                    ImgSrc={item.image}
                    itemPrice={item.price}
                    itemFlavor={item.flavor}
                    itemNameKey={item.id}
                    divOnClick={(e) => addOrder(e, item)}
                  />
                ))}
            </div>
          )}
        </div>
      </form>

      <aside>
        <section className="content">
          <section className="items-section">
            {order && order.map((item) => {
              totalCost = totalCost + (Number(item.itemPrice) * item.itemQtd)
              console.log(totalCost)
              return (
                <>
                  <CartItems
                    itemNameKey={item.itemNameKey}
                    itemName={item.itemName}
                    itemPrice={item.itemPrice}
                    itemQtd={item.itemQtd}
                    onClickAdd={() => addOne(item)}
                  />
                </>
              )
            })}
          </section>
          <p>Total do Pedido: {totalCost},00</p>
        </section>
        <Button btnClass="order" btnText='Fazer Pedido' btnOnClick={(e) => teste(e)}></Button>
      </aside>



    </main>
  );
};

export default Menu;
