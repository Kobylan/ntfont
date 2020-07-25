import React, { useEffect, useState } from "react";
import ContainerFluid from "../../components/ContainerFluid";
import Dialogues from "../../sections/Dialogues";
import Dialogue from "../../sections/Dialogue";
import { useDispatch, useSelector } from "react-redux";
import { getDialogues } from "../../store/actions/Chat/DIALOGUES";

const Chat = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const chat = useSelector((state) => state.Dialogues);
  const [currentDilogue, setCurrentDilogue] = useState();
  const [dialoguesIsOpen, setDialoguesIsOpen] = useState(false);
  useEffect(() => {
    dispatch(getDialogues(page));
  }, [page]);
  return (
    <ContainerFluid>
      <div className="d-flex h-100 rounded">
        <Dialogues
          data={chat.data}
          page={page}
          setPage={(e) => setPage(e)}
          loading={chat.isFetching}
          error={chat.error}
          hasMore={chat.hasMore}
          setDialogue={setCurrentDilogue}
          setIsOpen={setDialoguesIsOpen}
        />
        <Dialogue Dialogue={currentDilogue} isOpen={dialoguesIsOpen} />
      </div>
    </ContainerFluid>
  );
};

export default Chat;
