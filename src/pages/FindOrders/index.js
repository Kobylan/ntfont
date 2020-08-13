import React from "react";
import FindOrder from "../../sections/FIndOrder";
import Container from "../../components/Container";
import RightSidebar from "../../sections/RightSidebar";
import Filter from "../../components/Filter";
const FindOrders = () => {
  return (
    <>
      <Container>
        <Filter />
        <FindOrder />
      </Container>
      <RightSidebar />
    </>
  );
};

export default FindOrders;
