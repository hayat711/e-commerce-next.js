import * as y from 'yup';
import type Prisma from '@prisma/client';

// @ts-ignore
export const productSchema: y.SchemaOf<Prisma.Product> = y.object().shape({
    id: y.string().required(),
    title: y.string().required(),
    brand:y.string().required(),
    category: y.string().required(),
    price: y.string().required(),
    discount: y.string().required(),
    rating: y.string().required(),
    inStock: y.boolean().required(),
    fastDelivery: y.boolean().required(),
    image: y.string().required(),
});

export const productsSchema = y.array(productSchema);

//@ts-ignore
export const prodSchema: y.SchemaOf<Prisma.NikeWomen> = y.object().shape({
    id: y.string().required(),
    link: y.string().required(),

})

export const prodsSchema = y.array(prodSchema)