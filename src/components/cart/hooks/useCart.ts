import {useContext,useEffect, useState , useMemo} from "react";
import {CartStateContext} from "@/components/cart/context/CartContext";

const CART_KEY = "cart";

export const useCart = () => {
    const [cart, setCart] = useState([]);

    // useEffect(() => {
    //   const storedCart = localStorage.getItem(CART_KEY);
    //   if (storedCart) {
    //     setCart(JSON.parse(storedCart));
    //   } else {
    //     setCart([]);
    //   }
    // }, []);
  
    useEffect(() => {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }, [cart]);
    const context = useContext(CartStateContext);
    if (context === undefined) {
        throw new Error('useCount must be used within CountProvider');
    }
    return useMemo(() => context, [context]);
}

