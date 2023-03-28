//@ts-nocheck
import * as React from "react";
import {PcCard} from "@/components/shoppingCart/PcCard";

import {useRouter} from "next/router";

import { asus, msi_pc, msi_monitor, mis_laptop } from '@/utils/pc/';
import {Layout} from "@/components/layout/layout";




export default function Products() {
    const router = useRouter();
    const {productItem} = router.query;


    return (
        <Layout>
            <button className='btn btn-secondary btn-sm btn-outline mt-3 ml-2'
                onClick={() => {
                    router.push('/');
                }}
            >Back</button>
            <p>{productItem}</p>

            <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 mt-6
            grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>


                {msi_pc.map((item, index) => (
                    <PcCard link={item.link} name={item.name} category={'Gaming pc'} color={'New Comming'} description={item.description} price={item.price} key={index} />
                ))}
                {/* {msi_monitor.map((item, index) => (
                    <PcCard link={item.link} name={item.name} category={'Monitor'} color={'New Comming'}  description={item.description} price={item.price} key={index} />
                ))}
                {mis_laptop.map((item, index) => (
                    <PcCard link={item.link} name={item.name} category={'Laptop'} color={'New Comming'} description={item.description} price={item.price} key={index} />
                ))}
                {asus.map((item, index) => (
                    <PcCard link={item.link} name={item.name} category={'Laptop'} color={'New Comming'}  description={item.description} price={item.price} key={index} />
                ))} */}
            </div>
        </Layout>

    );
};
