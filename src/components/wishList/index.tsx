import React, { useContext, useState } from 'react';
import type Prisma from '@prisma/client';
import { CartStateContext } from '../cart/context/CartContext';
import { useWishList } from './hooks/useWishList';
import { useCart } from '../cart/hooks/useCart';

type Product = Prisma.Product;

const WishListPage = () => {
    // const { id, name } = product;
    const {
        state: { wishList, products, quantity, totalPrice, isOpen },
    } = useWishList();
    console.log('here is wishList; 😀', wishList);
    const { dispatch } = useCart();



    return (
        <div>
            <h2 className='font-bold px-12 pt-4'>Wishlist</h2>
            {wishList.length === 0 && <p>Your wishList is empty.</p>}
            <div
                className="card max-w-4xl mx-8 py-8 px-2 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-4 mt-6
            grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
            >
                
                {wishList.map((product) => (
                    <div key={product.id}>
                        <img src={product.link} alt={product.name} />
                        <div className='bg-primary-500 font-bold'>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                        </div>

                        {/* <button
                            onClick={() => handleRemoveFromWishlist(product)}
                        >
                            Remove from Wishlist
                        </button> */}
                    </div>
                ))}
            </div>
        </div>
        // </div>
    );
};

export default WishListPage;
