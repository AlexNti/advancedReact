import PleaseSignIn from "../components/PleaseSign";
import OrderList from "../components/OrderList";
import React from "react";

const OrderPage = props => (
  <div>
    <PleaseSignIn>
      <OrderList />
    </PleaseSignIn>
  </div>
);

export default OrderPage;
