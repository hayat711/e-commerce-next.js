import type Prisma from '@prisma/client';
import {transformProduct} from "@/components/products/utils/transforms";
import {fetcher} from "@/utils/fetcher";
import {stripeSessionSchema} from "@/utils/stripe";


export const buyProduct = async (product: Prisma.Product) => {
    const stripeItem = transformProduct(product);

    return await fetcher(`/api/checkout/products/`, {
        method: 'POST',
        body: [stripeItem],
        schema: stripeSessionSchema
    })
}