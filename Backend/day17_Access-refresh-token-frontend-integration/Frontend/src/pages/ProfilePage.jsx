import React, { useContext, useEffect } from "react";
import { userStore } from "../context/userContext";
import { useApi } from "../api/apiInstance";

const ProfilePage = () => {
  const { setUser, user, accessToken } = useContext(userStore);
  const api = useApi();
  const userProfile = async () => {
    const res = await api.get("/auth/me");

    setUser(res.data.data.user);
  };

  useEffect(() => {
    userProfile();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div>Name: {user?.name}</div>
      <div>Email: {user?.email}</div>
    </div>
  );
};

export default ProfilePage;
