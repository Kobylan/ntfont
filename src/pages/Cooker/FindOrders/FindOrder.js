import React, { useCallback, useRef, useState } from "react";
import Order from "./Order";
import Loading from "../../../components/Loading";
import { useOrdersSearch } from "../../../hooks/useOrdersSearch";
import "../../../assets/css/find-order.css";
import Filter from "./Filter";

const FindOrder = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({
    price_lte: 0,
    price_gte: 99999,
    weight_lte: 0,
    weight_gte: 99999,
  });
  const { loading, error, orders, hasMore } = useOrdersSearch(page, filter);
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
    <div className="w-100">
      <div className="font-size-20 mt-20 text-white">Поиск заказов</div>
      <Filter filter={filter} setFilterParms={(e) => setFilter(e)} />
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
