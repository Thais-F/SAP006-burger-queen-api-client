import React, { useEffect, useState } from "react";
import OrdersKitchen from "../../components/orders/ordersKitchen";
import OrdersClient from "../../components/orders/ordersClient";
import { Link } from "react-router-dom";
import "../../pages/Kitchen/style.css";
import "./style.css";
import Button from "../../components/Button/button";

function OrderFinish() {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("usersToken");

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
          itens.status.includes("finished")
        );
        const pedidosConcluidos = pedidosFiltrados.sort((itemA, itemB) => itemB.id - itemA.id);
        setOrders(pedidosConcluidos);
      });
  };

  useEffect(() => {
    listaPedidos();
  }, [token]);

  return (
    <form className="container-kitchen">
      <header className="header">
        <div className="head">
          <div className="backMenu-logout"> 

          <Link to="/kitchen">
            <Button btnClass="back-menu" btnText="Voltar para cozinha" />
          </Link>
          <h5 className="pedidos-prontos">Pedidos Preparados</h5>
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
                  pedido.status === "finished" ? (
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
              </OrdersKitchen>
            </section>
          );
        })}
      </section>
    </form>
  );
}

export default OrderFinish;
