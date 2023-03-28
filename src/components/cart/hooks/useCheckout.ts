import type Prisma from '@prisma/client';
import {useMutation} from "react-query";
import {redirectToCheckout} from "@/utils/stripe";
import {checkoutCart} from "@/components/cart/api/checkoutCart";

export const useCheckout = () => {
    return useMutation((products: Array<Prisma.Product>) => checkoutCart(products), {
        onSuccess: redirectToCheckout,
    });
};
