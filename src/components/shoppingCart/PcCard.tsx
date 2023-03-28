//@ts-nocheck
// @flow

import * as React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useState } from 'react';
import { useCart } from '@/components/cart/hooks/useCart';
import { useBuyProduct } from '@/components/products/hooks/useBuyProduct';
import type Prisma from '@prisma/client';
import { useMutation } from 'react-query';
import { useAddCartItem } from '@/components/shoppingCart/hooks/useAddCartItem';
import { useRouter } from 'next/router';
import { createCart } from './api/createCart';

type Props = {
    link: string;
    color?: string;
    category?: string;
    name: string;
    description: string;
    price: string | number;
};

type ProductProps = Readonly<Prisma.MsiLaptop>;

export function PcCard(product: ProductProps) {
    const { link, color, category, description, price, name } = product;
    const { mutate } = useAddCartItem();

    const { dispatch } = useCart();
    const { mutate: buyProductNow } = useBuyProduct();
    const router = useRouter();

    const addToCart = () => {
        mutate(product, {
            onSuccess: () => {
                // set the isOpen to true;
                // redirect to the Shopping Cart
                router.push('/ShoppingCart');
                console.log('product added to cart', product);
            },
            onError: () => {
                // do something on error.
            },
        });
    };
    // const addToCart =() => {
    //     dispatch({ type: 'addProduct', payload: product});
    //     dispatch({ type: 'openMenu'});
    // };

    // const buyProduct = () => {
    //     mutate(product);
    // }
    const buyProduct = () => {
        buyProductNow(product);
        console.log('buy product mutation is clicked !!');
    };

    const [liked, setLiked] = useState(false);
    const lable = category ? category : 'Technology';
    const style = color ? color : 'black';
    const nameStr = name.length >= 20 ? name.substring(0, 20) + '...' : name;
    return (
        <div className="relative">
            <div className="card glass card-compact w-96 bg-base-100 shadow-xl">
                <span
                    className="absolute right-6 top-4"
                    onClick={() => setLiked(!liked)}
                >
                    <AiOutlineHeart className="w-6 h-6" color="gray" />
                </span>
                {liked && (
                    <span
                        className="absolute right-6 top-4"
                        onClick={() => setLiked(!liked)}
                    >
                        <AiFillHeart className="w-6 h-6" color="red" />
                    </span>
                )}
                <figure>
                    <img src={link} alt="monitor" />
                </figure>
                <div className="card-body">
                    <h3 className="card-title">{nameStr}!</h3>
                    <div className="card-actions justify-between">
                        <span className="select-none text-md font-bold  py-1 px-2">
                            $ {price}
                        </span>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">{lable}</div>
                            <div className="badge badge-outline">Outfit</div>
                            <div className="badge badge-accent">{style}</div>
                        </div>
                    </div>
                    <p>
                        {description}Please log in to MSI official website,
                        enter "GS63VR 7R" in the index field at the top right
                        corner of the website.
                    </p>

                    <div className="card-actions justify-between">
                        <button
                            onClick={addToCart}
                            className="btn btn-sm btn-outline btn-secondary"
                        >
                            Add to Cart
                        </button>

                        <button
                            className="btn btn-sm btn-primary"
                            onClick={buyProduct}
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
