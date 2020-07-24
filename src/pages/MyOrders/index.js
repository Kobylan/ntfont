import React from "react";
import Container from "../../components/Container";
import Orders from "../../sections/MyOrders/Index";
import RightSidebar from "../../sections/RightSidebar";

const MyOrders = () => {
  return (
    <>
      <Container>
        <Orders />
      </Container>
      <RightSidebar />
    </>
  );
};

export default MyOrders;
