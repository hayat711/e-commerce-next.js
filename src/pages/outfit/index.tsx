//@ts-nocheck
import {useRouter} from "next/router";
import {PcCard} from "@/components/shoppingCart/PcCard";
import * as React from "react";

import {addidasDb, leggings, nike_women, top_high, yuga} from "@/utils/outfit";
import {nike_men} from "@/utils/outfit/nike_men.db";

export default function Outfit() {
    const router = useRouter();


    return (
        <>
            <div className=''
                // style={{ backgroundImage: "url('/bg.jpg')"}}
            >
                <button className='btn btn-secondary btn-sm btn-outline mt-3 ml-2'
                        onClick={() => {
                            router.push('/');
                        }}
                >Back</button>


                <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 mt-6
            grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
                    {leggings.map((item, index) => (
                        <PcCard link={item.link} name={item.name} color={item.color} category={item.category} description={item.category} price={item.price} key={index} />
                    ))}
                    {top_high.map((item, index) => (
                        <PcCard link={item.link} name={item.name} color={item.color} category={item.category} description={item.category} price={item.price} key={index} />
                    ))}
                    {yuga.map((item, index) => (
                        <PcCard link={item.link} name={item.name} color={item.color} category={item.category} description={item.category} price={item.price} key={index} />
                    ))}
                    {addidasDb.map((item, index) => (
                        <PcCard link={item.link} name={item.name} color={item.color} category={item.category} description={item.category} price={item.price} key={index} />
                    ))}


                    {nike_women.map((item, index) => (
                        <PcCard link={item.link} name={item.name} color={item.color} category={item.category} description={item.category} price={item.price} key={index} />
                    ))}

                    {nike_men.map((item, index) => (
                        <PcCard link={item.link} name={item.name} color={item.color} category={item.category} description={item.category} price={item.price} key={index} />
                    ))}

                </div>
            </div>
        </>


    );
};
