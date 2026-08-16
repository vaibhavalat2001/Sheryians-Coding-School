import { useQuery } from "@tanstack/react-query"
import { getProductsDataApi } from "../api/productApi"

export const useProductApi = () => {
    const {isPending, data, error} = useQuery({
        queryKey: ['products'],
        queryFn: getProductsDataApi,
        staleTime: 30000
    })
    return {
        isPending, data, error
    }
}
