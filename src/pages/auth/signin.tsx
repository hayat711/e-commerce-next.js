// @flow
import * as React from 'react';
import {Layout} from "@/components/layout/layout";
import {SignInButton} from "@/components/auth/SignInButton";


type Props = {

};

export default function SignIn(props: Props) {

    return (
        <Layout>
            <div className='m-auto mt-12'>

                <SignInButton />
            </div>
        </Layout>
    );
}