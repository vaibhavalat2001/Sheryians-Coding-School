import { useContext, useState } from "react";
import useApi from "../api/api";
import { useEffect } from "react";
import { urlsStore } from "../context/urlStore";
import { toast } from "react-toastify";

export const useUrls = () => {
  const api = useApi();
  const { setUrls, setUrlResult } = useContext(urlsStore);
  const [url, setUrl] = useState({ url: "" });

  function handleChange(data) {
    setUrl({ [data.target.name]: data.target.value });
  }

  const handleSubmit = async (data) => {
    data.preventDefault();
    try {
      await api.post("/urls/", url);
      toast.success("short url generated", {
        closeOnClick: true,
      })
    } catch (error) {
      console.log("error while gererating shortcode", error);
    }

    getAllUrls();
    setUrl({ url: "" });
  };

  async function getAllUrls() {
    try {
      const res = await api.get("/urls");
      const response = res.data.data.urls;
      setUrls(response);
      setUrlResult(response[response.length - 1]);
    } catch (error) {
      setUrls([]);
      console.log("error while fetching all urls", error.message);
    }
  }

  async function deleteUrl(id) {
    try {
      await api.delete(`urls/${id}`);
      getAllUrls();
    } catch (error) {
      console.log("error while deleting url", error);
    }
  }

  useEffect(() => {
    getAllUrls();
  }, []);

  return {
    url,
    getAllUrls,
    handleChange,
    handleSubmit,
    deleteUrl,
  };
};
