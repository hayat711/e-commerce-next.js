import { useQuery, useMutation, useQueryClient } from 'react-query';
import React, { useState } from 'react';

type Product = {
    id: number;
    name: string;
    price: number;
};

type CartItem = {
    product: Product;
    quantity: number;
};

type Cart = {
    items: CartItem[];
    total: number;
};

const getCart = async (): Promise<Cart> => {
    // Here you would fetch the cart data from your server/database
    return {
        items: [],
        total: 0,
    };
};

const addToCart = async (productId: number): Promise<Cart> => {
    // Here you would send a request to your server to add the product to the cart
    return {
        items: [{ product: { id: productId, name: 'Example Product', price: 9.99 }, quantity: 1 }],
        total: 9.99,
    };
};

const removeFromCart = async (productId: number): Promise<Cart> => {
    // Here you would send a request to your server to remove the product from the cart
    return {
        items: [],
        total: 0,
    };
};

const updateQuantity = async (productId: number, quantity: number): Promise<Cart> => {
    // Here you would send a request to your server to update the quantity of the product in the cart
    return {
        items: [{ product: { id: productId, name: 'Example Product', price: 9.99 }, quantity }],
        total: 9.99 * quantity,
    };
};

const Cart: React.FC = () => {
    const queryClient = useQueryClient();

    // Fetch cart data
    const { data: cart, isLoading, isError } = useQuery('cart', getCart);

    // Define mutations to add, remove, and update quantities of products in cart
    const { mutate: addToCartMutation } = useMutation(addToCart, {
        onSuccess: (data) => queryClient.setQueryData('cart', data),
    });
    const { mutate: removeFromCartMutation } = useMutation(removeFromCart, {
        onSuccess: (data) => queryClient.setQueryData('cart', data),
    });
    const { mutate: updateQuantityMutation } = useMutation(updateQuantity, {
        onSuccess: (data) => queryClient.setQueryData('cart', data),
    });

    const [addingProductId, setAddingProductId] = useState<number | null>(null);

    const handleAddToCart = (productId: number) => {
        setAddingProductId(productId);
        addToCartMutation(productId).finally(() => {
            setAddingProductId(null);
        });
    };

    const handleRemoveFromCart = (productId: number) => {
        removeFromCartMutation(productId);
    };

    const handleQuantityChange = (productId: number, quantity: number) => {
        updateQuantityMutation(productId, quantity);
    };

    const calculateTotalPrice = (cartItems: CartItem[]) => {
        return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };

    if (isLoading) {
        return <div>Loading cart...</div>;
    }

    if (isError) {
        return <div>Error loading cart data</div>;
    }

    return (
        <div>
            {isLoadingProducts ? (
                <p>Loading products...</p>
            ) : (
                <>
                    <h2>Products</h2>
                    <ul>
                        {products?.map((product) => (
                            <li key={product.id}>
                                <div>{product.name}</div>
                                <div>{product.price}</div>
                                <button onClick={() => addToCart(product.id)}>Add to Cart</button>
                            </li>
                        ))}
                    </ul>
                </>
            )}

            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.product.id}>
                                <div>{item.product.name}</div>
                                <div>{item.product.price}</div>
                                <div>
                                    <button onClick={() => removeFromCart(item.product.id)}>
                                        -
                                    </button>
                                    {item.quantity}
                                    <button onClick={() => addToCart(item.product.id)}>+</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p>Total: {calculateTotalPrice()}</p>
                </>
            </div>
        </div>
    )