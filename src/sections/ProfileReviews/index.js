import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import InfinityScrollBlock from "../../components/InfinityScrollBlock";
import { timeAgoUnix } from "../../utils/time";
import { useDispatch, useSelector } from "react-redux";
import { getProfileReviews } from "../../store/actions/Profile/profilePreview";

const ProfileReviews = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [newData, setNewData] = useState([]);
  const reviews = useSelector((state) => state.profile.reviews);
  useEffect(() => {
    dispatch(getProfileReviews(page));
  }, [page]);

  useEffect(() => {
    const result = reviews.data?.map((item) => ({
      field0: item.customer.avatar?.file,
      field1: item.title,
      field2: item.rating,
      field3: item.description,
      field6: `${item.customer.first_name} ${item.customer.last_name}`,
      field7: item.created_at,
    }));
    setNewData(result);
  }, [reviews.data]);
  return (
    <>
      <Title title="Отзывы" />
      <InfinityScrollBlock
        data={newData}
        page={page}
        setPage={(e) => setPage(e)}
        loading={reviews.isFetching}
        error={reviews.error}
        hasMore={reviews.hasMore}
        type="avatar-card"
      />
    </>
  );
};

export default ProfileReviews;
