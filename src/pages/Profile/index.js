import React from "react";
import Container from "../../components/Container";
import RightSidebar from "../../sections/RightSidebar";
import ProfileInformation from "../../sections/ProfileInformation";
import ProfileRating from "../../sections/ProfileRating";
import ProfileReviews from "../../sections/ProfileReviews";

const Profile = () => {
  return (
    <>
      <Container>
        <ProfileInformation />
        <ProfileRating />
        <ProfileReviews />
      </Container>
      <RightSidebar />
    </>
  );
};

export default Profile;
