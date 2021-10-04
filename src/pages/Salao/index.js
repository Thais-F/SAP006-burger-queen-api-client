import Input from "../../components/inputs/index.js";
import Button from "../../components/Button/button.js";
import "../../components/Button/style.css";
import { useState, useEffect } from "react";
import InputSelect from "../../components/inputs/InputSelect.js";
import { Products } from "../../components/Product/index.js";
import "./style.css";
import CartItems from "../../components/cartItems/cartitems.js";
import { Burger } from "../../components/Burger/burger";
import burger from "../../img/burger.png";
import { sendOrderToAPI } from "../../services/data.js";
// import { Cardapio } from "../../components/Burger/menu.js";

const Menu = () => {
  const [menu, setMenu] = useState(true);
  const [breakfast, setBreakfast] = useState([]);
  const [burgers, setBurgers] = useState([]);
  const [side, setSide] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [clientName, setClientName] = useState({ clientName: "" })
  const [clientTable, setClienTable] = useState({ clientTable: "" })


  let totalCost = 0;

  const [order, setOrder] = useState([]);

  useEffect(() => {
    console.log(order);
  }, [order]);

  function addOrder(e, item) {
    e.preventDefault();

    const searchItem = order.find((element) => element.itemNameKey === item.id);

    if (searchItem) {
      searchItem.itemQtd += 1;
      setOrder([...order]);
    } else if (!searchItem) {
      setOrder([
        ...order,
        {
          itemName: item.name,
          itemFlavor: item.flavor,
          itemComplement: item.complement,
          itemPrice: item.price,
          itemNameKey: item.id,
          itemQtd: 1,
        },
      ]);
    }
  }

  function handleInputSelectOnChange(e) {
    setClienTable({ clientTable: e.target.value })
  }

  function handleInputOnChange(e) {
    setClientName({ clientName: e.target.value })
  }

  function addOneItem(e, item) {
    e.preventDefault();
    item.itemQtd += 1;
    setOrder([...order]);
  }

  function removeOneItem(e, item) {
    e.preventDefault();
    if (item.itemQtd === 1) {
      order.splice(order.indexOf(item), 1);
      setOrder([...order]);
    } else {
      item.itemQtd -= 1;
      setOrder([...order]);
    }
  }

  function deleteItem(e, item) {
    e.preventDefault();
    order.splice(order.indexOf(item), 1);
    setOrder([...order]);
  }

  const token = localStorage.getItem("usersToken");
  // console.log(token);

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
        const burgers = data.filter((item) => item.id >= 33 && item.id <= 50);
        setBurgers(burgers);
        const side = data.filter((item) => item.sub_type === "side");
        setSide(side);
        const drinks = data.filter((item) => item.sub_type === "drinks");
        setDrinks(drinks);
      });
  }, [token]);

  function toOrder(e) {
    e.preventDefault()

    const orderProducts = order.map((item) => {
      return {
        "id": item.itemNameKey,
        "qtd": item.itemQtd,
        "flavor": item.itemFlavor,
        "complement": item.itemComplement,
      }
    })

    const APIBody = ({
      "client": clientName.clientName,
      "table": clientTable.clientTable,
      "products": orderProducts
    })

    console.log(APIBody)
    sendOrderToAPI(APIBody)
      .then((response) => response.json())
      .then((Json) => {
        console.log(Json)
        if (Json.message) {
          alert('Ocorreu um erro, tente novamente!')
        } else {
          alert('Pedido realizado com sucesso!')
          setOrder([])
          setClientName({ clientName: "" })
          setClienTable({ clientTable: "" })
        }
      })
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
          <Input className="input client"
            placeholder="Cliente"
            onChange={(e) => handleInputOnChange(e)}
            value={clientName.clientName}
          >
          </Input>
          <InputSelect
            value={clientTable.clientTable}
            onChange={(e) => handleInputSelectOnChange(e)}
          />
        </div>
      </nav>

      <form className="container-salao">
        <div className="cards-menu">
          {menu ? (
            <div className="breakfast-menu">
              <div className="topics-breakfast">
                {" "}
                <h3 className="topics"> ✨ Café da Manhã </h3>
              </div>

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
              {/* <Cardapio burgers={burgers} /> */}
              <h3 className="topics"> ✨ Hambúrguer Simples </h3>
              <div className="hamburguers">
                <img src={burger} className="img-burger" alt="burger" />
                <div className="options-burger">
                  {burgers &&
                    burgers
                      .slice(0, 3)
                      .map((item) => (
                        <Burger
                          divClassName="container-burger"
                          itemName={item.name}
                          divId={item.id}
                          itemPrice={item.price}
                          itemFlavor={item.flavor}
                          itemComplement={
                            item.complement ? ` com ${item.complement}` : null
                          }
                          itemNameKey={item.id}
                          divOnClick={(e) => addOrder(e, item)}
                        />
                      ))}
                </div>
              </div>

              <h3 className="topics">✨ Hambúrguer simples com queijo </h3>
              <div className="hamburguers">
                <img src={burger} className="img-burger" alt="burger" />
                <div className="options-burger">
                  {burgers &&
                    burgers
                      .slice(3, 6)
                      .map((item) => (
                        <Burger
                          divClassName="container-burger"
                          itemName={item.name}
                          divId={item.id}
                          itemPrice={item.price}
                          itemFlavor={item.flavor}
                          itemComplement={
                            item.complement ? ` com ${item.complement}` : null
                          }
                          itemNameKey={item.id}
                          divOnClick={(e) => addOrder(e, item)}
                        />
                      ))}
                </div>
              </div>

              <h3 className="topics">✨ Hambúrguer simples com ovo </h3>
              <div className="hamburguers">
                <img src={burger} className="img-burger" alt="burger" />
                <div className="options-burger">
                  {burgers &&
                    burgers
                      .slice(6, 9)
                      .map((item) => (
                        <Burger
                          divClassName="container-burger"
                          itemName={item.name}
                          divId={item.id}
                          itemPrice={item.price}
                          itemFlavor={item.flavor}
                          itemComplement={
                            item.complement ? ` com ${item.complement}` : null
                          }
                          itemNameKey={item.id}
                          divOnClick={(e) => addOrder(e, item)}
                        />
                      ))}
                </div>
              </div>

              <h3 className="topics">✨ Hambúrguer Duplo </h3>
              <div className="hamburguers">
                <img src={burger} className="img-burger" alt="burger" />
                <div className="options-burger">
                  {burgers &&
                    burgers
                      .slice(9, 12)
                      .map((item) => (
                        <Burger
                          divClassName="container-burger"
                          itemName={item.name}
                          divId={item.id}
                          itemPrice={item.price}
                          itemFlavor={item.flavor}
                          itemComplement={
                            item.complement ? ` com ${item.complement}` : null
                          }
                          itemNameKey={item.id}
                          divOnClick={(e) => addOrder(e, item)}
                        />
                      ))}
                </div>
              </div>
              <h3 className="topics">✨ Hambúrguer duplo com ovo </h3>
              <div className="hamburguers">
                <img src={burger} className="img-burger" alt="burger" />
                <div className="options-burger">
                  {burgers &&
                    burgers
                      .slice(12, 15)
                      .map((item) => (
                        <Burger
                          divClassName="container-burger"
                          itemName={item.name}
                          divId={item.id}
                          itemPrice={item.price}
                          itemFlavor={item.flavor}
                          itemComplement={
                            item.complement ? ` com ${item.complement}` : null
                          }
                          itemNameKey={item.id}
                          divOnClick={(e) => addOrder(e, item)}
                        />
                      ))}
                </div>
              </div>
              <h3 className="topics">✨ Hambúrguer duplo com queijo </h3>
              <div className="hamburguers">
                <img src={burger} className="img-burger" alt="burger" />
                <div className="options-burger">
                  {burgers &&
                    burgers
                      .slice(15, 18)
                      .map((item) => (
                        <Burger
                          divClassName="container-burger"
                          itemName={item.name}
                          divId={item.id}
                          itemPrice={item.price}
                          itemFlavor={item.flavor}
                          itemComplement={
                            item.complement ? ` com ${item.complement}` : null
                          }
                          itemNameKey={item.id}
                          divOnClick={(e) => addOrder(e, item)}
                        />
                      ))}
                </div>
              </div>
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

        <aside>
          <section className="content">
            <section className="items-section">
              {order &&
                order.map((item) => {
                  totalCost = totalCost + Number(item.itemPrice) * item.itemQtd;
                  // console.log(totalCost)
                  return (
                    <>
                      <CartItems
                        // itemNameKey={item.itemNameKey}
                        itemName={item.itemName}
                        itemPrice={item.itemPrice}
                        itemQtd={item.itemQtd}
                        itemFlavor={item.itemFlavor}
                        itemComplement={
                          item.itemComplement
                            ? ` com ${item.itemComplement}`
                            : null
                        }
                        onClickAdd={(e) => addOneItem(e, item)}
                        onClickRemove={(e) => removeOneItem(e, item)}
                        onClickDelete={(e) => deleteItem(e, item)}
                      />
                    </>
                  );
                })}
            </section>
            <p>Total do Pedido: R$ {totalCost},00</p>
          </section>
          <Button
            btnClass="order"
            btnText="Fazer Pedido"
            btnOnClick={(e) => toOrder(e)}
          ></Button>
        </aside>
      </form>
    </main>
  );
};

export default Menu;
