import type Prisma from '@prisma/client';
import type Stripe from 'stripe';

export const transformProduct = ({
    name,
    price,
    link,
    description,
}: Prisma.Product) : Stripe.Checkout.SessionCreateParams.LineItem => ({
    price_data: {
        currency: 'USD', 
        product_data: {
            name: name,
            images: [link],
        },
        unit_amount: price
    },
    quantity: 1,
})