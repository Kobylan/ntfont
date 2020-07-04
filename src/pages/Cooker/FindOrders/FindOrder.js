import React, { useCallback, useRef, useState } from "react";
import Order from "./Order";
import Loading from "../../../components/Loading";
import { useOrdersSearch } from "../../../hooks/useOrdersSearch";
import "../../../assets/css/find-order.css";

const FindOrder = () => {
  const [page, setPage] = useState(1);
  const { loading, error, orders, hasMore } = useOrdersSearch(page);
  console.log("======", orders);
  const observer = useRef();
  const lastOrderElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage(page + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  return (
    <div className="middle-content pb-5">
      <div className="card-title">Поиск заказов</div>
      <div>FILTER ELEMENT</div>
      <div>
        {orders?.map((order) =>
          order.customer ? (
            <div ref={lastOrderElementRef} key={order.order_id}>
              <Order order={order} />
            </div>
          ) : (
            "Пока нет заказов"
          )
        )}
        {loading && <Loading />}
        {error && "Error"}
      </div>
    </div>
  );
};

export default FindOrder;
