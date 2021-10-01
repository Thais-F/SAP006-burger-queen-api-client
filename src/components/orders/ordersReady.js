import React, { useEffect, useState } from 'react';
import OrdersKitchen from "../../components/orders/ordersKitchen";
import OrdersClient from "../../components/orders/ordersClient";
import Button from '../Button/button';

function ReadyOrders() {
    const token = localStorage.getItem('token');
    const [ordersReady, setOrdersReady] = useState([]);
  
    const listaPedidos = () => {
      fetch('https://lab-api-bq.herokuapp.com/orders', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const products = data;
          const pedidosEntregar = products.filter((itens) =>
            itens.status.includes('ready')
          );
          setOrdersReady(pedidosEntregar);
        });
    };
  
    
    useEffect(() => {
      listaPedidos();
    }, []);
  
    const handleEntregar = (pedido) => {
      const url = 'https://lab-api-bq.herokuapp.com/orders/';
      const id = pedido.id;
      const status = { status: 'finished' };
  
      fetch(url + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
        body: JSON.stringify(status),
      }).then((response) => {
        response.json().then(() => {
          listaPedidos();
        });
      });
    };
  
    return (
      <main className="page">
       <h3>       Pedidos Prontos </h3>

         {ordersReady.map((pedido) => {
            return (
              <section className="container-pending" key={pedido.id}>
               <OrdersKitchen>
                  <div className="details-client">
                  <p>Cliente: {pedido.client_name}</p>
                  <p>Mesa: {pedido.table}</p>
                    <p>Pedido nº {pedido.id}</p>
                          </div>
                  <div className="details-status">
                  </div>
                  <section className="container-order scroll">
                    {pedido.Products.map((itens, index) => (
                        <OrdersClient> 
                      <div className="details-order-pending" key={index}>
                        <p>
                          {' '}
                          0{itens.qtd} {itens.name}
                        </p>
                        <p>{itens.flavor === 'null' ? '' : itens.flavor}</p>
                        <p>{itens.complement === 'null' ? '' : itens.complement}</p>
                      </div>
                      </OrdersClient>
                    ))}
                  </section>
                  <div>
                    <Button content="Servir"
                      btnClass="btn-servir"
                      btnText="Servir"
                      btnOnClick={() => handleEntregar(pedido)}

                   >
         
                </Button>
                  </div>
                  </OrdersKitchen>
            </section>
          
            );
          })}
         </main>
    );
  };