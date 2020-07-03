import React, { useCallback, useRef, useState } from "react";
import Order from "./Order";
import Loading from "../../../store/components/Loading";
import { useOrdersSearch } from "../../../store/hooks/useOrdersSearch";
import "../../../assets/css/find-order.css";

const FindOrder = () => {
  const [query, setQuery] = useState({
    page_num: 1,
    page_size: 10,
  });
  const { loading, error, orders, hasMore } = useOrdersSearch(query);
  console.log("======", orders[0]);
  const observer = useRef();
  const lastOrderElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setQuery({
            ...query,
            page_num: query.page_num + 1,
          });
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  return (
    <div className="middle-content pb-5">
      <div>FILTER ELEMENT</div>
      <div>
        {orders[0]?.results.map((order) =>
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
