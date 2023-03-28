import {useContext, useEffect, useMemo, useState} from "react";
import {CartStateContext} from "@/components/cart/context/CartContext";

// import { cartReducer } from "@/components/cart/context/reducer/CartReducer"
// import { useReducer } from "react"
// import { State, Action } from "@/components/cart/context/types";
// import type Prisma from "@prisma/client";


const WIHSHLIST_KEY = 'whishlist';

export const useWishList = () => {
    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        const storedWhishList = localStorage.getItem(WIHSHLIST_KEY);
        if (storedWhishList) {
            setWishList(JSON.parse(storedWhishList));
        } else {
            setWishList([])
        }
    }, []);
    
    const context = useContext(CartStateContext);
    if (context === undefined) {
        throw new Error('useCount must be used within CountProvider');
    }
    return useMemo(() => context, [context]);
}

// type Product = Prisma.Product;

// type Dispatch = (action: Action) => void;
// const initialState: State = { products: [], totalPrice: 0, quantity: 1, isOpen: false, wishList: [] };


// const useWishList = () => {
//     const [state, dispatch] = useReducer(cartReducer, initialState);

//     const handleAddToWishlist = (product: Product) => {
//         dispatch({ type: "addToWishlist", payload: product });
//       };
    
//       const handleRemoveFromWishlist = (product: Product) => {
//         dispatch({ type: "removeFromWishList", payload: product });
//         console.log('this product removed from wishlist : ', product);
//       };
    
//       return { state, handleAddToWishlist, handleRemoveFromWishlist };
// }

// export default useWishList;