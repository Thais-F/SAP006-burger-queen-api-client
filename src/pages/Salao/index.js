import Input from "../../components/inputs/index.js";
import { useState, useEffect } from "react";
import InputSelect from "../../components/inputs/InputSelect.js";
import { Products } from "../../components/Product/index.js";
import "./style.css";
const Menu = () => {
  const [menu, setMenu] = useState([]);
  // const [breakfast, setBreakfast] = useState([]);

  // const [cardapio, setCardapio] = useState();
  let cardapio = [];
  // const [addItem, setAddItem] = useState([])

  const token = localStorage.getItem("usersToken");
  console.log(token);

  useEffect(() => {

    fetch("https://lab-api-bq.herokuapp.com/products", {
      headers: {
        accept: "application/json",
        Authorization: `${token}`,
      },
    }).then((response) => {
      response.json()
      .then((json) => {
        // const cardapio = json;
        setMenu(json);
        //filtrar o café da manha aqui para quando abrir o salao renderizar os produtos. depois pegar o cardapio e filrar para o all-day e renderizar quando clicar no botao
      });
    });
  }, [token]);

  return (
    <main>
      <form className="produtos">
        <h1>Menu e atendimento</h1>

        <Input className="client" placeholder="Cliente"></Input>
        <InputSelect />

        <div className="menu-um">
          <div className="breakfast-menu">
            {menu &&
              menu.map((item) => (
                <Products
                  divClassName="container-food"
                  divKey={Math.random()}
                  itemName={item.name}
                  divId={item.id}
                  ImgSrc={item.image}
                  itemPrice={item.price}
                  qnt={item.qnt}
                  itemFlavor={item.flavor}
                  itemNameKey={item.id}
                  divOnClick={() => {
                    setMenu([...menu, {itemName: item.name, itemPrice: item.price}])
                  }}
                />
              ))}
          </div>
        </div>

{/* <div className="pedidos">
{menu.map((item) => {
            <Article 
            key={item.id}  
            nome={item.nome}
            preco={item.preco}
          />
      })}
       </div> */}

      </form>
    </main>
  );
};

export default Menu;
