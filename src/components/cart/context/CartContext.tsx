import React, {
    ReactNode,
    createContext,
    useReducer,
    useContext,
    useMemo,
    useState,
    useEffect,
} from "react";
import { cartReducer } from "./reducer/CartReducer";
import type { Action, State } from "./types";
import { useLocalStorage } from "@/components/wishList/hooks/useLocalStorage";

type Dispatch = (action: Action) => void;
type CartProviderProps = { readonly children: React.ReactNode };

export const CartStateContext = createContext<
    { state: State; dispatch: Dispatch } | undefined
>(undefined);

const initialState: State = { products: [], totalPrice: 0, quantity: 1, isOpen: false, wishList: [] };

export const CartProvider = ({ children }: CartProviderProps) => {
    //@ts-ignore
    const [state, dispatch] = useReducer(cartReducer, initialState);
    const [storedState, setStoredState] = useLocalStorage('cartState', initialState);
    
    useEffect(() => {
        setStoredState(state);
    }, [state, setStoredState]);

    const value = useMemo(() => ({ state, dispatch }), [state]);

    return (
        <CartStateContext.Provider value={value}>
            {children}
        </CartStateContext.Provider>
    );
};
