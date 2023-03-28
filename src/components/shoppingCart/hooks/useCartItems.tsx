import {useQuery} from "react-query";
import {getCartItems} from "@/components/shoppingCart/api/getCart";


export const useCartItems = (discountCode?:string) => {
    return useQuery({ queryKey: ['cartItems', 'totalPrice', discountCode],
        queryFn: () => getCartItems(discountCode),
        keepPreviousData: true, refetchOnWindowFocus: false});
}
