function OrdersClient({ id, name, flavor, complement, qtd }) {
  return (
    <>
      <section className="orders" key={id}>
        <div className="requestClient" key={id}>
          <h3 className="orders-kitchen">
            {" "}
            {qtd} x {name} {flavor} {complement}{" "}
          </h3>
        </div>
      </section>
    </>
  );
}

export default OrdersClient;
