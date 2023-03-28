import type Prisma from "@prisma/client";
import Image from "next/image";
import {useCart} from "@/components/cart/hooks/useCart";
import {useMutation} from "react-query";
import {useRemoveCartItem} from "@/components/shoppingCart/hooks/useRemoveCartItem";




export const CartItem = (product: Prisma.MsiLaptop) => {
    const { id, name, category, description,  price, link } = product;

    const { dispatch } = useCart();
    const { mutate: deleteItem } = useRemoveCartItem();


    // const handleDelete = (product: Prisma.MsiLaptop) => {
    //     dispatch({ type: 'deleteProduct', payload: product});
    // };

    const handleDelete = (product: Prisma.MsiLaptop) => {
        deleteItem(product.id);
    }

    return(
        <li className='py-6 flex'>
            <div className='flex-shrink-0 w-24 h-24 border border-accent rounded-md overflow-hidden'>
                <img
                    src={link}
                    alt={name}
                    className='w-full h-full object-center object-cover'
                />
            </div>
            <div className='ml-4 flex-1 flex flex-col'>
                <div className='flex justify-between text-base font-medium text-secondary'>
                    <h3>{name}</h3>
                    <p className='ml-4'> $ {price}</p>
                </div>
                <div className='flex-1 flex items-end justify-between text-sm'>
                    <div className='flex justify-between'>
                        <button
                            type='button'
                            onClick={() => handleDelete(product)}
                            className='text-accent'>
                            Remove from Cart
                        </button>
                    </div>
                </div>
            </div>
        </li>
    )
}