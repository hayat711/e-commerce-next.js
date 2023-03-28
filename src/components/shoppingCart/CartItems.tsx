import {useQuery} from "react-query";
import type Prisma from "@prisma/client";
import { CartItem } from './CartItem';



type ProductProps = Readonly<Prisma.MsiLaptop>;
type CartItemsProps = {
    readonly products: Array<Prisma.MsiLaptop>;
};


export const CartItems = ({ products } : CartItemsProps) => (
    (
        <ul className='-my-6 divide-y'>
            {products.map((product: ProductProps) => (
                <CartItem key={product.id} {...product} />
            ))}
        </ul>
    )
)