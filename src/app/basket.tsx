import React, { useState } from "react";
import { OrdersFooter } from "@/widgets/OrdersFooter";
import { OrdersList } from "@/widgets/OrdersList";
import { OrderSuccess } from "@/widgets/OrderSuccess";

const Basket = () => {
  const [order, setOrder] = useState(false);

  return (
    <>
      {order && <OrderSuccess />}
      {!order && (
        <>
          <OrdersList />
          <OrdersFooter setOrder={setOrder} />
        </>
      )}
    </>
  );
};

export default Basket;
