// @flow
import * as React from 'react';
import {ReactNode} from 'react';
import {Navbar} from "@/components/layout/navbar/Navbar";

type Props = {
    readonly children: ReactNode;
};

export function Layout({ children }: Props) {
    return (
        <>
            <Navbar />
            <main className='w-full h-full flex flex-col items-center justify-center'>
                {/*<h2 className='prose prose-zinc prose-xl font-bold text-red-400 mt-4'>Full Stack Next.js + Nest.js E-commerce</h2>*/}
                {children}
            </main>
        </>
    );
}