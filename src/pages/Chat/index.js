import React, { useEffect, useState } from "react";
import ContainerFluid from "../../components/ContainerFluid";
import Dialogues from "../../sections/Dialogues";
import Dialogue from "../../sections/Dialogue";
import { useDispatch, useSelector } from "react-redux";
import { getProfileReviews } from "../../store/actions/Profile/profilePreview";
import { getDialogues } from "../../store/actions/Chat/DIALOGUES";

const Chat = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [newData, setNewData] = useState([]);
  const chat = useSelector((state) => state.Dialogues);
  useEffect(() => {
    dispatch(getDialogues(page));
  }, [page]);
  return (
    <ContainerFluid>
      <div className="d-flex h-100 rounded">
        <Dialogues loading={chat.isFetching} data={chat.data} />
        <Dialogue />
      </div>
    </ContainerFluid>
  );
};

export default Chat;
