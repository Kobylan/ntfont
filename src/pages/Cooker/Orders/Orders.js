import React from "react";
import "../../../assets/css/orders.css";
import Order from "./Order";

const Orders = () => {
  const orders = [
    {
      id: "1",
      title: "Lorem ipsum",
      avatar:
        "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam corporis hic incidunt iure magnam quae quas quis ratione voluptatum! Accusantium nam, soluta. Quasi, vel, veritatis!",
      weight: "5",
      price: "1200",
    },
    {
      id: "2",
      title: "Lorem ipsum dolor",
      avatar:
        "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolor quas saepe.",
      weight: "5",
      price: "1200",
    },
    {
      id: "3",
      title: "Lorem",
      avatar:
        "https://avatars.mds.yandex.net/get-pdb/1705881/f8db19d4-c10e-4d27-83a3-db53d4f52430/s600",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad asperiores autem blanditiis consequuntur ducimus ea earum error, nisi omnis quam quis similique sunt? A architecto at cupiditate distinctio eum exercitationem, ipsa pariatur praesentium quos reiciendis. Accusantium aliquam amet atque commodi deserunt et exercitationem, itaque maiores numquam placeat quibusdam reiciendis repellendus sed vel, veritatis.",
      weight: "5",
      price: "1200",
    },
  ];
  return (
    <div className="middle-content">
      <div className="card-title"> Мои заказы</div>
      {orders.map((order) => (
        <Order order={order} />
      ))}
      ))}
    </div>
  );
};

export default Orders;
