import React, { useState } from "react";
import OrderList from "../../../components/OrderCard/OrderCard";

import Classes from "./Orders.module.css";

function Orders() {
  const [activeTab, setActiveTab] = useState("open orders");

  const openOrders = (
    <React.Fragment>
      <OrderList />
      <OrderList />
      <OrderList />
      <OrderList />
      <OrderList />
    </React.Fragment>
  );

  const closedOrders = (
    <React.Fragment>
      <OrderList />
      <OrderList />
      <OrderList />
      <OrderList />
      <OrderList />
      <OrderList />
    </React.Fragment>
  );

  return (
    <div className={Classes.Wrapper}>
      <div className={Classes.Header}>
        <h3>Orders</h3>
      </div>
      <div className={Classes.Body}>
        <div className={Classes.Tabs}>
          <h4
            onClick={() => setActiveTab("open orders")}
            className={activeTab === "open orders" && Classes.ActiveTab}
          >
            Open Orders(28)
          </h4>
          <h4
            onClick={() => setActiveTab("closed orders")}
            className={activeTab === "closed orders" && Classes.ActiveTab}
          >
            Closed Orders(20)
          </h4>
        </div>
        <div className={Classes.OrderList}>
          {activeTab === "open orders" && openOrders}
          {activeTab === "closed orders" && closedOrders}
        </div>
      </div>
    </div>
  );
}

export default Orders;
