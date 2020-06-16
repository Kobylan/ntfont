import React, { useCallback, useRef, useState } from "react";
import Order from "./Order";
import Loading from "../../../store/components/Loading";
import { useOrdersSearch } from "../../../store/hooks/useOrdersSearch";

const FindOrder = () => {
  const [query, setQuery] = useState({
    page_num: 1,
    page_size: 1,
    filter: {
      price: [0, 1234567890],
      weight: [],
    },
  });
  const { loading, error, orders, hasMore } = useOrdersSearch(query);

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
        {orders.map((order, index) =>
          order.user ? (
            <div ref={lastOrderElementRef}>
              <Order key={order.order_id} order={order} />
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
