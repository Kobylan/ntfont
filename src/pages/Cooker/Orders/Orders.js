import React from "react";
import "../../../assets/css/orders.css";
import Order from "./Order";

const Orders = () => {
  const orders = [
    {
      id: "1",
      name: "Adil Kairolla",
      avatar:
        "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg",
      description:
        "XTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXT",
    },
    {
      id: "2",
      name: "Adil Kairolla",
      rating: "4.5",
      avatar:
        "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg",
      description:
        "XTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXT",
    },
    {
      id: "3",
      name: "Adil Kairolla",
      rating: "4.5",
      avatar:
        "https://avatars.mds.yandex.net/get-pdb/1705881/f8db19d4-c10e-4d27-83a3-db53d4f52430/s600",
      description:
        "XTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXT",
    },
    {
      id: "4",
      name: "Adil Kairolla",
      rating: "4.5",
      avatar:
        "https://i.pinimg.com/736x/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg",
      description:
        "XTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXT",
    },
    {
      id: "5",
      name: "Adil Kairolla",
      rating: "4.5",
      avatar:
        "https://i.pinimg.com/736x/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64--youtube.jpg",
      description:
        "SOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXT",
    },
    {
      id: "6",
      name: "Adil Kairolla",
      rating: "4.5",
      avatar: "https://download-cs.net/steam/avatars/3412.jpg",
      description: "meTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXT",
    },
  ];
  return (
    <div>
      <div className="card-title"> Мои заказы</div>
      {orders.map((order) => (
        <Order order={order} />
      ))}
      ))}
    </div>
  );
};

export default Orders;
