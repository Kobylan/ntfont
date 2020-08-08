import React, { useCallback, useRef } from "react";
import Loader from "../Loader";
import AvatarCard from "../AvatarCard";
// Блок с бесконечным скроллом принимает упорядочную дату, номер страницы и тип(avatar-card, ...)
const InfinityScrollBlock = ({
  page,
  setPage,
  data,
  loading,
  error,
  hasMore,
  type,
}) => {
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
    <>
      {!loading &&
        data !== undefined &&
        data.map((item) => (
          <div ref={lastOrderElementRef} key={item.id}>
            {type === "avatar-card" && <AvatarCard item={item} />}
          </div>
        ))}
      {loading && <Loader />}
      {hasMore && <div className="mv-20" />}

      {error && (
        <div className="text-white text-align-center m-20">
          Сервер временно не доступен
        </div>
      )}
      {!loading && !error && data.length === 0 && (
        <div className="text-white text-align-center m-20">Пока ничего нет</div>
      )}
    </>
  );
};

export default InfinityScrollBlock;
