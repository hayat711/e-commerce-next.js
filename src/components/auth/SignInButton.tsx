// @flow
import * as React from 'react';
import {useAuth} from './hooks/useAuth';

type Props = {

};

export const  SignInButton = (props: Props) => {
    const { signIn } = useAuth();
    // const handleSignIn = () => signIn('google');
    const handleSignIn = () => signIn('github');
    return (
        <button
            className="btn btn-outline btn-wide btn-secondary"
            onClick={handleSignIn}
        >
            Sign in with Github
        </button>
    );
};