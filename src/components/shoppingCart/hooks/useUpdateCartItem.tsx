import {useMutation, useQueryClient} from "react-query";
import {updateItemQuantity} from "@/components/shoppingCart/api/getCart";

export const useUpdateCartItem = () => {
    const queryClient = useQueryClient();
    //@ts-ignore
    return useMutation(updateItemQuantity, {
        onSuccess: (data) => {
            queryClient.setQueryData('cartItems', data);
        },
    });
};

