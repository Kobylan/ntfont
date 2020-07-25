import React, { useCallback, useEffect, useRef, useState } from "react";
import Icon from "../../components/Icon";
import Skeleton from "../../components/Skeleton";
import AvatarCard from "../../components/AvatarCard";
import Loader from "../../components/Loader";

const Dialogues = ({
  page,
  setPage,
  data,
  loading,
  error,
  hasMore,
  setDialogue,
  setIsOpen,
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
  const renderItems = data.map((e) => (
    <a
      className="d-flex align-items-center m-10"
      ref={lastOrderElementRef}
      onClick={() => {
        setDialogue({
          url: e.url,
          author: {
            username: e.username,
            firstName: e.first_name,
            lastName: e.last_name,
            avatar: e.avatar,
          },
        });
        setIsOpen(true);
      }}
    >
      <div
        className="rounded-circle"
        style={{
          background: `url(${e.avatar}) no-repeat 50% 50% / cover`,
          width: "50px",
          height: "50px",
        }}
      />
      <div className="ml-20">{e.first_name}</div>
    </a>
  ));

  return (
    <>
      <div className="w-390px d-flex flex-column h-100 position-relative border-right-grey">
        <div
          className="h-100 rounded-left p-20 w-100"
          style={{ overflow: "hidden auto" }}
        >
          {loading ? <Skeleton height={50} width="235" /> : renderItems}
        </div>
      </div>

      {loading && <Loader />}
      {hasMore && <div className="mv-20" />}

      {error && (
        <div className="text-white text-align-center m-20">Ошибка!</div>
      )}
      {!loading && !error && data.length === 0 && (
        <div className="text-white text-align-center m-20">Пока ничего нет</div>
      )}
    </>
  );
};

// const Dialogues = ({ page, setPage, data, loading, error, hasMore }) => {
//   return (
//     <div className="w-390px d-flex flex-column h-100 position-relative border-right-grey">
//       <div
//         className="h-100 rounded-left p-20 w-100"
//         style={{ overflow: "hidden auto" }}
//       >
//         {loading ? (
//           <Skeleton height={50} width="235" />
//         ) : (
//           testData.map((e) => (
//             <a className="d-flex align-items-center m-10">
//               <div
//                 className="bg-blue rounded-circle"
//                 style={{ width: "50px", height: "50px" }}
//               >
//                 1
//               </div>
//               <div className="ml-20">{e.participants}</div>
//             </a>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

export default Dialogues;
