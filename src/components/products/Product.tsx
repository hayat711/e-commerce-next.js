// @flow
import * as React from 'react';
import type Prisma from '@prisma/client';
import { useBuyProduct } from '@/components/products/hooks/useBuyProduct';
import { useCart } from '@/components/cart/hooks/useCart';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';


type ProductProps = Readonly<Prisma.Product>;

export const Product = (product: ProductProps) => {
    const { id, name, link, price, color, description } = product;
    const [liked, setLiked] = React.useState(false);
    const style = color ? color : 'black';
    const nameStr = name.length >= 20 ? name.substring(0, 20) + '...' : name;


    const { dispatch } = useCart();
    const { mutate } = useBuyProduct();

    const addToCart = () => {
        dispatch({ type: 'addProduct', payload: product });
        dispatch({ type: 'openMenu' });
    };

    const addToWishList = () => {
        dispatch({ type: 'addToWishlist', payload: product });
        console.log('this produc added to wish list 🔥', product);
    };

    const removeFromWishList = () => {
        dispatch({ type: 'removeFromWishList', payload: product});
        console.log('this removed product from wish list 🔥', product);

    }

    const buyProduct = () => {
        mutate(product);
    };
    const truncatedTitle = name?.substring(0, 40);

    return (
        <div className="relative">
            <div className="card  card-compact w-96 bg-base-100 shadow-xl">
                <span
                    className="absolute right-6 top-4"
                    onClick={() => {
                        if (liked) {
                            removeFromWishList();
                        } else {
                            addToWishList();
                        }
                        setLiked(!liked);
                    }}
                >
                    {liked ? (
                        <AiFillHeart className="w-6 h-6" color="red" />
                    ) : (
                        <AiOutlineHeart className="w-6 h-6" color="gray" />
                    )}
                </span>

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
                            <div className="badge badge-outline">Sale</div>
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
};
