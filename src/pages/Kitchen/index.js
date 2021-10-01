import { useState, useEffect } from "react";
import OrdersKitchen from "../../components/orders/ordersKitchen";
import OrdersClient from "../../components/orders/ordersClient";
import Button from "../../components/Button/button";
import "./style.css";

function Kitchen() {
  const [orders, setOrders] = useState([]);

  const token = localStorage.getItem("usersToken");

  const handlePrepare = (item, e) => {
    e.preventDefault();
    const status = { status: "preparing" };
    fetch("https://lab-api-bq.herokuapp.com/orders/" + item.id, {
    // fetch(url + item.id, {
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

  const handleFinish = (pedido) => {
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
        listaPedidos();
      });
    });
  };

  const listaPedidos = () => {
    fetch('https://lab-api-bq.herokuapp.com/orders', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    })
      .then((response) => response.json())
      .then((pedidos) => {
        const pedidosPendentes = pedidos.filter(
          (itens) =>
            itens.status.includes('preparing') ||
            itens.status.includes('pending')
        );
        setOrders(pedidosPendentes);
      });
  };

  useEffect(() => {
    listaPedidos();
  }, [token]);


  // useEffect(() => {
  //   fetch("https://lab-api-bq.herokuapp.com/orders", {
  //     headers: {
  //       accept: "application/json",
  //       Authorization: `${token}`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       const allOrders = json.filter(
  //         (item) =>
  //           item.status === item.status.includes("preparing") ||
  //           item.status.includes("pending")
  //       );
  //       setOrders(allOrders);
  //       console.log(allOrders);
  //     });
  // }, [token]);

  return (
    <form>
      <h1>Essa página será a cozinha</h1>

      <h5>Pedidos</h5>
      <section className="container-kitchen">
        {orders.map((item) => (
          <OrdersKitchen
            status={item.status
              .replace("pending", "Pendente")
              .replace("preparing", "Preparando...")}
            createdAt={item.createdAt}
            key={item.id}
            table={item.table}
            client_name={item.client_name}
          >
            {/* <h5 style={{color: '#cf5e18'}} >Status: {item.status 
                  .replace('pending', 'Pendente')
                  .replace('preparing', 'Preparando...')}
              </h5> */}

            {item.Products.map((product) => (
              <OrdersClient
                key={product.id}
                name={product.name}
                flavor={product.flavor}
                complement={product.complement}
                qtd={product.qtd}
              />
            ))}

            <div style={{ paddingLeft: "5px" }}>
              <Button
                                btnClass="btn-preparar"
                btnText="Preparar"
                btnOnClick={(e) => handlePrepare(item, e)}
              />

              <Button
                              btnClass="btn-finalizar"
                btnText="Finalizar"
                btnOnClick={() => handleFinish(item)}
              />
            </div>
          </OrdersKitchen>
        ))}
      </section>
    </form>
  );
}

export default Kitchen;
