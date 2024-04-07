import React, { useState } from "react";

function OrderStatus() {
  const [order, setOrder] = useState({
    id: "Ord123",
    status: "processing",
    customer: "John Doe",
    items: 3,
  });

  function handleUpdate() {
    setOrder({ ...order, status: document.getElementById("ddlStatus").value });
  }

  return (
    <>
      <h1>The order id is {order.id}</h1>
      <h1>The status is {order.status}</h1>
      <h1>The customer is {order.customer}</h1>
      <h1>Number of items is {order.items}</h1>

      <div>
        <select id="ddlStatus">
          <option value="processing">processing</option>
          <option value="shipped">shipped</option>
          <option value="delivered">delivered</option>
        </select>

        <button onClick={handleUpdate}>Update</button>
      </div>
    </>
  );
}

export default OrderStatus;
