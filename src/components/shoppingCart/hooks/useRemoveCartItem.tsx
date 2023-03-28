import {useMutation, useQueryClient} from "react-query";
import {removeItem} from "@/components/shoppingCart/api/getCart";

export const useRemoveCartItem = () => {
    const queryClient = useQueryClient();

    return useMutation(removeItem, {
        onSuccess: (data) => {
            queryClient.setQueryData('cartItems', data);
        },
    });
};
