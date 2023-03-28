
type CartItemType = {
    id: string;
    name: string;
    price: number | string;
    quantity: number;
    category?: string;
};
export type CartResponse = {
    cartItems: CartItemType[];
    totalPrice: number;
};


export const getCartItems = async (discountCode?: string): Promise<CartResponse> => {
    const res = await fetch('/api/cart');
    const data = await res.json();
    console.log('here is data back from back end', data.cartItems);
    // calculate the total price
    let totalPrice = 0;
    data.cartItems?.forEach((item : CartItemType) => {
        totalPrice += Number(item.price) * item.quantity;
    });
    // apply discount code
    if (discountCode) {

    }

    return {
        cartItems: data.cartItems,
        totalPrice,
    }
};

export const addItem = async (item: CartItemType) => {
    const res = await fetch('/api/cart', {
        method: 'POST',
        body: JSON.stringify(item),
    });
    const data = await res.json();
    console.log('here is data back, addItem from backend:', data.cartItems)
    return data.cartItems;
};

export const removeItem = async (id: string) => {
    const res = await fetch(`/api/cart/${id}`, {
        method: 'DELETE',
    });
    const data = await res.json();
    return data.cartItems;
};


export const updateItemQuantity = async (id: string, quantity: number) => {
    const res = await fetch(`/api/cart/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ quantity }),
    });
    const data = await res.json();
    return data.cartItems;
};

export * as Cart from './getCart';
