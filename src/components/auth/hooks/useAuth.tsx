import {signIn, signOut, useSession} from "next-auth/react";
import {useMemo} from "react";


export const useAuth = () => {
    const { data: session, status } = useSession();
    // useMemo return the result of calling <factory> with no args
    
    return useMemo(
        () => ({
            session,
            status,
            signIn,
            signOut,
        } as const ),
        [session, status]
    );
}