import React, { useEffect, useState } from "react";
import OrdersKitchen from "./ordersKitchen";
import OrdersClient from "./ordersClient";
import Button from "../Button/button";
import { Link } from "react-router-dom";
import "../../pages/Kitchen/style.css";
import magicWand from "../../img/varinha.png";
import "./style.css";

function ReadyOrders() {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("usersToken");

  const handleEntregar = (pedido, e) => {
    e.preventDefault();
    const url = "https://lab-api-bq.herokuapp.com/orders/";
    const id = pedido.id;
    const status = { status: "finished" };

    fetch(url + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(status),
    }).then((response) => {
      response.json().then(() => {
        alert("Refeição servida com sucesso!");
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
        const pedidosFiltrados = pedidos.filter((itens) =>
          itens.status.includes("ready")
        );
        const pedidosEntregar = pedidosFiltrados.sort(
          (itemA, itemB) => itemB.id - itemA.id
        );
        setOrders(pedidosEntregar);
        console.log(pedidosEntregar);
      });
  };

  useEffect(() => {
    listaPedidos();
  }, [token]);

  return (
    <form className="container-kitchen">
      <header className="header">
        <div className="head">
          <img src={magicWand} className="img-magicWand" alt="magicWand" />
          <div className="backMenu-logout">
            <Link to="/menu">
              <Button btnClass="back-menu" btnText="Voltar para Atendimento" />
            </Link>

            <h5 className="pedidos">Pedidos Prontos</h5>
          </div>
        </div>
      </header>

      <section>
        {orders.map((pedido) => {
          const dataUpdated = new Date(pedido.updatedAt);
          const dataCreated = new Date(pedido.createdAt);
          const difference = Math.abs(dataUpdated) - dataCreated;
          const minutes = Math.floor(difference / 1000 / 60);
          return (
            <section className="container-pending" key={pedido.id}>
              <OrdersKitchen
                status={
                  pedido.status === "ready" ? (
                    <p>Tempo de preparo: {minutes} min</p>
                  ) : (
                    ""
                  )
                }
                createdAt={`${new Date(pedido.createdAt).toLocaleDateString(
                  "pt-br",
                  {
                    day: "2-digit",
                    month: "2-digit",
                    year: "2-digit",
                  }
                )}, ${new Date(pedido.createdAt).toLocaleTimeString("pt-br", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}h`}
                key={pedido.id}
                table={pedido.table}
                client_name={pedido.client_name}
              >
                {pedido.Products.map((itens, index) => (
                  <OrdersClient
                    key={itens.id}
                    name={itens.name}
                    flavor={itens.flavor}
                    complement={itens.complement}
                    qtd={itens.qtd}
                  />
                ))}

                <div>
                  <Button
                    content="Servir"
                    btnClass="btn-servir"
                    btnText="Servir"
                    btnOnClick={(e) => handleEntregar(pedido, e)}
                  />
                </div>
              </OrdersKitchen>
            </section>
          );
        })}
      </section>
    </form>
  );
}

export default ReadyOrders;
