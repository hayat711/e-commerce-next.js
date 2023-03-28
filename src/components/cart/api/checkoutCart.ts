import type Prisma from '@prisma/client';
import {transformProduct} from "@/components/products/utils/transforms";
import { fetcher } from '@/utils/fetcher';
import {stripeSessionSchema} from "@/utils/stripe";

export const checkoutCart = async (products: Array<Prisma.Product>) => {
    const stripeItems = products.map((product) => transformProduct(product));

    return await fetcher(`/api/checkout/products`, {
        method: 'POST',
        body: stripeItems,
        schema: stripeSessionSchema
    });
};
