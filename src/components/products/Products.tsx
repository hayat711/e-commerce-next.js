// @flow
import * as React from 'react';
import type Prisma from '@prisma/client';
import { Product } from './Product';
import { useQuery } from 'react-query';
import { useProduct } from './hooks/useGetProducts';

type ProductProps = Readonly<Prisma.Product>;

export default function Products() {
    // const fetchProducts = async () => {
    //     const response = await fetch('/api/products/Product'); //! have to fix the endpoint after testing
    //     return response.json();
    // }
    //
    //
    // // const { data: products } = useQuery('products', fetchProducts);
    const { data: products }: any = useProduct('Leggings');
    console.log('data 👈', products);

    return (
        <div
            className="card max-w-4xl mx-8 py-8 px-2 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-4 mt-6
            grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
        >
            {products &&
                products?.map((product: ProductProps) => (
                    <Product key={product.id} {...product} />
                ))}
        </div>
    );
}
