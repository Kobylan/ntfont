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
        "Engage, gravimetric future!To some, a spirit is a hypnosis for hearing.Small, sticky pudding is best varnished with divided worcestershire sauce.",
      weight: "5",
      price: "1200",
    },
    {
      id: "2",
      title: "Lorem ipsum dolor",
      avatar:
        "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg",
      description:
        "Instead of rinsing whole salsa verde with pumpkin seeds, use one package cracker crumps sauce and one container brown sugar grinder.The blessing of understanding masters is pure.",
      weight: "5",
      price: "1200",
    },
    {
      id: "3",
      title: "Lorem",
      avatar:
        "https://avatars.mds.yandex.net/get-pdb/1705881/f8db19d4-c10e-4d27-83a3-db53d4f52430/s600",
      description:
        "Luna azureus valebat est. Amors ire in tolosa! Amicitia bi-color habitio est. Cobaltum, scutum, et turpis. Consiliums mori! Sunt impositioes manifestum gratis, barbatus nuptiaes. Altus danista recte prensionems lanista est. Nunquam imperium guttus. A falsis, terror castus repressor. Mori una ducunt ad teres cobaltum. Ubi est varius usus? Onus de domesticus bulla, transferre orgia! Bullas nocere in tolosa! Varius danista sed mire reperires lura est. Lumens favere in brema! Medicina placidus scutum est. Epos barbatus historia est. Cum castor peregrinationes, omnes spatiies tractare domesticus, bassus medicinaes.",
      weight: "5",
      price: "1200",
    },
    {
      id: "4",
      title: "Lorem",
      avatar:
        "https://avatars.mds.yandex.net/get-pdb/1705881/f8db19d4-c10e-4d27-83a3-db53d4f52430/s600",
      description:
        "The honorable politics of vision is to praise with attitude. When one needs trust and shame, one is able to feel pain. When the saint of issue views the results of the yogi, the love will know teacher. Totality happens when you meet truth so essentially that whatsoever you are becoming is your moonlight?",
      weight: "5",
      price: "1200",
    },
    {
      id: "5",
      title: "Lorem",
      avatar:
        "https://avatars.mds.yandex.net/get-pdb/1705881/f8db19d4-c10e-4d27-83a3-db53d4f52430/s600",
      description:
        "Aw, gutless cannibal. you won't blow the bikini atoll.This plasma has only been accelerated by a post-apocalyptic c-beam.Rusticus, magnum messors saepe transferre de grandis, talis devirginato.Tobaccos are the dubloons of the small urchin.Trust, attitude and a celestine realm of dogma.",
      weight: "5",
      price: "1200",
    },
    {
      id: "6",
      title: "Lorem",
      avatar:
        "https://avatars.mds.yandex.net/get-pdb/1705881/f8db19d4-c10e-4d27-83a3-db53d4f52430/s600",
      description:
        "Where is the interstellar planet? Where is the spheroid particle? Mysterious ferengis, to the port. Carnivorous particles, to the solar system. Galaxy at the bridge was the adventure of assimilation, controlled to a futile queen!",
      weight: "5",
      price: "1200",
    },
  ];
  return (
    <div className="w-100">
      <div className=" text-white w-100 mt-20 mb-5 font-size-20">
        Мои заказы
      </div>
      {orders.map((order) => (
        <Order order={order} />
      ))}
      ))}
    </div>
  );
};

export default Orders;
