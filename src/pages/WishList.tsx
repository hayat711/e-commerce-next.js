import { Layout } from '@/components/layout/layout';
import WishListPage from '@/components/wishList';
import React from 'react';

type Props = {};

const WishList = (props: Props) => {
    return (
        <>
            <Layout>
                <WishListPage />
            </Layout>
        </>
    );
};

export default WishList;
