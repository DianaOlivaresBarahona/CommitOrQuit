import React from "react";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <div>
      <h2>My profile</h2>
      <p><strong>Email adress:</strong> {user.email}</p>
    </div>
  );
};

export default Profile;
