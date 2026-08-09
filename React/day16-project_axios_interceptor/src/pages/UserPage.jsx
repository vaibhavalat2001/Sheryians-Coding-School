import axios from "axios";
import React, { use, useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { axiosInstance } from "../config/axiosInstance";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUsers = async () => {
    try {
      let res = await axiosInstance("/users?limit=208");
      setUsers(res.data.users);
      setIsLoading(false);
    } catch (error) {
      console.log("Api Error:", error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading)
    return (
      <div className="flex h-full justify-center items-center">
        <div className="h-15 w-15 animate-spin rounded-full border-4 border-gray-200 border-t-indigo-600"></div>
      </div>
    );
  return (
    <div className="py-10 px-6 grid grid-cols-1 2xl:grid-cols-5 xl:grid-cols-4  lg:grid-cols-3  min-[850px]:grid-cols-3 min-[640px]:grid-cols-2 gap-6 place-items-center">
      {users.map((val) => (
        <UserCard key={val.id} user={val} />
      ))}
    </div>
  );
};

export default UserPage;
