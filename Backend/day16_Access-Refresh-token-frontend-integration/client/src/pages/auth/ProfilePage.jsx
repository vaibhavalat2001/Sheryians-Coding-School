import React, { useContext, useEffect, useRef } from "react";
import useApi from "../../config/api";
import { userStore } from "../../context/registerContext";

const ProfilePage = () => {
  const { user, setUser } = useContext(userStore);
  const api = useApi();
  async function fetchProfile() {
    const res = await api.get("/auth/me");
    setUser(res.data.data.user);
  }

  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div className="h-screen gap-4 flex flex-col justify-center items-center">
      <div>Name: {user?.name}</div>
      <div>Email: {user?.email}</div>
    </div>
  );
};

export default ProfilePage;
