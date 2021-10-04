import { useState, useEffect } from "react";
import OrdersKitchen from "../../components/orders/ordersKitchen";
import OrdersClient from "../../components/orders/ordersClient";
import Button from "../../components/Button/button";
import { Link } from "react-router-dom";
import "./style.css";
import MagicBurguer from "../../img/MagicBurguer.png";
import OrderFinish from "./ordersFinish";

function Kitchen() {
  const [orders, setOrders] = useState([]);
  const [menu, setMenu] = useState(true);

  const token = localStorage.getItem("usersToken");

  const handlePrepare = (item, e) => {
    e.preventDefault();
    const status = { status: "preparing" };
    fetch("https://lab-api-bq.herokuapp.com/orders/" + item.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(status),
    }).then((response) => {
      response.json().then(() => {
        listaPedidos();
      });
    });
  };

  const handleFinish = (pedido, e) => {
    e.preventDefault();
    const url = "https://lab-api-bq.herokuapp.com/orders/";
    const id = pedido.id;
    const status = { status: "ready" };

    fetch(url + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(status),
    }).then((response) => {
      response.json().then(() => {
        alert("Pedido enviado para servir!");
        listaPedidos();
      });
    });
  };

  const listaPedidos = () => {
    fetch("https://lab-api-bq.herokuapp.com/orders", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    })
      .then((response) => response.json())
      .then((pedidos) => {
        const pedidosFiltrados = pedidos.filter(
          (itens) =>
            itens.status.includes("preparing") ||
            itens.status.includes("pending")
        );

        const pedidosPendentes = pedidosFiltrados.sort(
          (itemA, itemB) => itemB.id - itemA.id
        );
        setOrders(pedidosPendentes);
      });
  };

  useEffect(() => {
    listaPedidos();
  }, [token]);

  return (
    <form className="container-kitchen">
      <header className="header">
        <div className="head">
          <img src={MagicBurguer} className="img-logo" alt="MagicBurguer" />
          <h5 className="pedidos">Cozinha</h5>

          <Link to="/login">
            <Button btnClass="logout" btnText="Sair " />
          </Link>
        </div>
      </header>

      <div className="finish-ready">
        <Button
          btnClass="categories"
          id="preparing"
          btnText="Pedidos para preparar"
          btnOnClick={(e) => {
            e.preventDefault();
            setMenu(true);
          }}
        />
        <Button
          btnType="button"
          btnClass="categories"
          id="finished"
          btnText="Pedidos concluídos"
          btnOnClick={(e) => {
            e.preventDefault();
            setMenu(false);
          }}
        />
      </div>

      <div>
        <section>
          {menu ? (
            <div>
              {orders.map((item) => (
                <OrdersKitchen
                  status={item.status
                    .replace("pending", "Status: Pendente")
                    .replace("preparing", "Status: Preparando...")
                  }
                  createdAt={`${new Date(item.createdAt).toLocaleDateString(
                    "pt-br",
                    {
                      day: "2-digit",
                      month: "2-digit",
                      year: "2-digit",
                    }
                  )}, ${new Date(item.createdAt).toLocaleTimeString("pt-br", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}h`}
                  key={item.id}
                  table={item.table}
                  client_name={item.client_name}
                >
                  {item.Products.map((product) => (
                    <OrdersClient
                      key={product.id}
                      name={product.name}
                      flavor={product.flavor}
                      complement={product.complement}
                      qtd={product.qtd}
                    />
                  ))}

                  <div className="preparar-finalizar">
                    <Button
                      btnClass="btn-preparar"
                      btnText="Preparar"
                      btnOnClick={(e) => handlePrepare(item, e)}
                    />

                    <Button
                      btnClass="btn-finalizar"
                      btnText="Finalizar"
                      btnOnClick={(e) => handleFinish(item, e)}
                    />
                  </div>
                </OrdersKitchen>
              ))}
            </div>
          ) : (
            <div>
              <OrderFinish />
            </div>
          )}
        </section>
      </div>
    </form>
  );
}

export default Kitchen;
