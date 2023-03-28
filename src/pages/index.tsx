import { GetServerSideProps } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { getSession } from 'next-auth/react';
import { getEnv } from '@/utils/env';

import { Layout } from '@/components/layout/layout';
import Products from '@/components/products/Products';
import Checkout from '@/components/cart/Checkout';
import { getProducts } from '@/components/products/api/getProducts';
import ShoppingCart from '@/components/cart/ShoppingCart';
import { getProductCategoryList } from '@/lib/productCategories';

export default function Home() {
    return (
        <Layout>
            <Products />
            <Checkout />
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const queryClient = new QueryClient();
    const session = await getSession(context);

    //   await queryClient.prefetchQuery('products', getProducts);
    //* dynamically prefetch all categories and dehydrate
    const prefetchQueries = async () => {
        const categories = await getProductCategoryList();

        // map through the list of categories and prefetch the respective queries
        const promises = categories.map((category) => {
            const categoryName = category.params.prodName;
            const queryKey = [category.params.prodName];
            return queryClient.prefetchQuery(queryKey, () => getProducts(categoryName));
        });

        // wait for all queries to prefetch before returning
        await Promise.all(promises);
    };
    prefetchQueries();

    if (!session) {
        return {
            redirect: {
                destination: getEnv('NEXTAUTH_CALLBACK_URL'),
                permanent: false,
            },
            props: {
                dehydratedState: dehydrate(queryClient),
            },
        };
    }

    return {
        props: {
            session,
            dehydratedState: dehydrate(queryClient),
        },
    };
};
