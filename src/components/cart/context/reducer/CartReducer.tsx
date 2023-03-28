import type Prisma from '@prisma/client';

import type { Action, State } from '../types';

const calculateTotalPrice = (products: Array<Prisma.Product>) => {
    let totalPrice = 0;
    products.forEach((product) => {
        if (typeof product.price === 'number') {
            totalPrice += product.price;
        } else if (typeof product.price === 'string') {
            const priceAsNumber = parseFloat(product.price);
            if (!isNaN(priceAsNumber)) {
                totalPrice += priceAsNumber;
            } else {
                throw new Error(`Invalid price for product`);
            }
        } else {
            throw new Error(`Invalid price type for product`);
        }
    });
    return totalPrice;
};

export const cartReducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'addProduct': {
            const products = [...state.products];
            const newProduct = { ...action.payload, quantity: 1 };
            const isTheNewProductInCart = products.find(
                (product) => product.id === newProduct.id
            );

            const newProducts = [newProduct, ...products];

            const totalPrice = calculateTotalPrice(newProducts);

            if (!isTheNewProductInCart) {
                return {
                    ...state,
                    products: newProducts,
                    totalPrice,
                };
            }
        }

        case 'setQuantity': {
            const products = [...state.products];
            const { id, quantity } = action.payload;

            const productToUpdate = products.find(
                (product) => product.id === id
            );
            if (productToUpdate) {
                console.log('product to update ', productToUpdate);
                productToUpdate.quantity = quantity;
            }
        }

        case 'addToWishlist': {
            const newProduct = { ...action.payload, quantity: 1 };

            const isTheNewProductInWishList = state.wishList.find(
                (product) => product.id === newProduct.id
            );

            if (!isTheNewProductInWishList) {
                return {
                    ...state,
                    wishList: [newProduct, ...state.wishList],
                };
            }
        }

        case 'removeFromWishList': {
            const wishList = [...state.wishList];
            const productToRemove = action.payload;

            const newWishlist = wishList.filter(
                (product) => product.id !== productToRemove.id
            );

            if (newWishlist.length !== wishList.length) {
                return {
                    ...state,
                    wishlist: newWishlist,
                };
            } else {
                return state;
            }
        }

        case 'deleteProduct': {
            const products = [...state.products];
            const productToDelete = action.payload;

            const newProducts = products.filter(
                (product) => product.id !== productToDelete.id
            );

            const totalPrice = calculateTotalPrice(newProducts);

            return {
                ...state,
                products: [...newProducts],
                totalPrice,
            };
        }

        case 'openMenu': {
            return {
                ...state,
                isOpen: true,
            };
        }

        case 'closeMenu': {
            return {
                ...state,
                isOpen: false,
            };
        }

        default: {
            throw new Error('Unhandled action type');
        }
    }
};
