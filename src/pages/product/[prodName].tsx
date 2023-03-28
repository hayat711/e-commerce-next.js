// @flow
import * as React from 'react';
import { getProductCategoryList } from '@/lib/productCategories';
import {PcCard} from "@/components/shoppingCart/PcCard";
import {Layout} from "@/components/layout/layout";
import { QueryClient, dehydrate, useQuery } from 'react-query';
import { useProduct } from '@/components/products/hooks/useGetProducts';
import type Prisma from '@prisma/client'
import Checkout from "@/components/cart/Checkout";
import { getLeggings } from '@/components/products/api/getProducts';


type ProductType = Readonly<Prisma.Product>;

type props = {
    prodName:string;
}

export default function ProductItem({prodName}:props) {
    console.log('param name is 👉', prodName);
    const {data : products, isLoading, isFetched, isError, error} = useProduct<ProductType[]>(prodName);
    if(isLoading) return <h1>Loading...</h1>
    if (isError) return <h1>An Error </h1>

    return (
        <Layout>
            <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 mt-6
            grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>

                {products && products?.map((product : ProductType) => <PcCard key={product.id} {...product} />)}

            </div>
            <Checkout />
        </Layout>
    );
}





// @ts-ignore
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const prodName = params?.prodName;
    console.log('prodName in param is 👉', prodName);

    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(['Leggings'], () =>  getLeggings())
    // await queryClient.prefetchQuery([`${prodName}`], () => useProduct(`${prodName}`));

    return {
        props:
        {
            dehydratedState: dehydrate(queryClient),
            prodName,
        },
    };
  
    // const { data: products } = useQuery('products', fetchProducts);
    // const { data: products} = fetchProducts();
    // console.log('here is the dynamic routing data ❣️ ', products)

    // const url = `/api/products/${prodName}`;
    // console.log(url); 
    // const res = await fetch(url);
    // const productData = await res.json();
    // console.log('productDaata::=> ', productData);
    // // send req to backend to get teh prodName data
    // console.log('here is prodName from back end api 😀', prodName);
        
};

export async function getStaticPaths() {
    const paths = await getProductCategoryList();
    return {
        paths,
        fallback: false,
    };
}
