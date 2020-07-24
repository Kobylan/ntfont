import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrders } from "../../store/actions/MyOrders/Orders";
import Title from "../../components/Title";
import InfinityScrollBlock from "../../components/InfinityScrollBlock";
import { timeAgoUnix, timeToUnix } from "../../utils/time";

const Orders = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [newData, setNewData] = useState([]);
  const orders = useSelector((state) => state.myOrders);
  useEffect(() => {
    dispatch(getMyOrders(page));
  }, [page]);
  console.log(orders, "da");
  useEffect(() => {
    const result = orders.data?.map((item) => ({
      field0: item.customer.avatar?.file,
      field1: item.title,
      field2: "нужен " + timeToUnix(item.deadline),
      field3: item.description,
      field4: "Цена " + item.price + " тг",
      field5: "Вес " + item.weight + " кг",
      field6: `${item.customer.first_name} ${item.customer.last_name}`,
      field7: timeAgoUnix(item.created_at),
    }));
    setNewData(result);
  }, [orders.data]);
  return (
    <>
      <Title title="Мои заказы" />
      <InfinityScrollBlock
        data={newData}
        page={page}
        setPage={(e) => setPage(e)}
        loading={orders.isFetching}
        error={orders.error}
        hasMore={orders.hasMore}
        type="avatar-card"
      />
    </>
  );
};

export default Orders;
