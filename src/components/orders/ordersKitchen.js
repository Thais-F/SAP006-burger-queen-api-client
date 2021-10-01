function OrdersKitchen({
  id,
  createdAt,
  client_name,
  table,
status,
children,
}) {
  return (
    <>
      <section className="orders" key={id}>
        <div className="customerTable">
        <h3>Status: {status}</h3>
            <h3> Horário do pedido: {createdAt}</h3>
          <h3> Cliente: {client_name}</h3>
          <h3>Mesa: {table}</h3>
          
        </div>

        <div className="list-orders">
          {children}
        </div>

      </section>
    </>
  );
}

export default OrdersKitchen;
