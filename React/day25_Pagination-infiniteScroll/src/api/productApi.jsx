import axios from "axios"

export const getProducts = async(limit, pageParam) => {
    try {
        let res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${pageParam}`);
        console.log(pageParam)
        return res.data
    } catch (error) {
        console.log("Product api erro: ", error)
    }
}