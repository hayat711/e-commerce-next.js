import {useMutation, useQueryClient} from "react-query";
import {addItem} from "@/components/shoppingCart/api/getCart";

export const useAddCartItem = () => {
    const queryClient = useQueryClient();
    console.log('Inside the useAddCatItem hookkkkk, queryClient', queryClient);
    return useMutation(addItem, {
        onSuccess: (data) => {
            console.log('data', data);
            queryClient.setQueryData('cartItems', data);
        },
    });
};
