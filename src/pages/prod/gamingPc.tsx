// @flow
import * as React from 'react';
import {nike_men} from "@/utils/outfit/nike_men.db";
import {PcCard} from "@/components/shoppingCart/PcCard";
import { useRouter} from 'next/router'
import { msi_pc} from "@/utils/pc";
import {Layout} from "@/components/layout/layout";

type Props = {

};

export default function GamingPc(props: Props) {
    const router = useRouter();
    const { proItem } = router.query;
    console.log('HERE is the item::=> ', proItem);


    return (
        <Layout>
            <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 mt-6
            grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
                {msi_pc.map((item, index) => (
                    <PcCard link={item.link} name={item.name}  description={item.description} price={item.price} key={index} />
                ))}
            </div>
        </Layout>
    );
}