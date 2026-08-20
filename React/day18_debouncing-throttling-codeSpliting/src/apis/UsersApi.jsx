import axios from "axios";

export const getData = async () => {
    console.log("Api loaded...");
    let res = await axios.get("https://fakestoreapi.com/users");
    console.log(res.data);
  };
