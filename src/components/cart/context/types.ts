

import type Prisma from '@prisma/client';

export type Action =
    | { type: "addProduct"; payload: Prisma.Product }
    | { type: "deleteProduct"; payload: Prisma.Product }
    | { type: "openMenu" }
    | { type: "closeMenu" }
    | { type: "setQuantity"; payload: Prisma.Product}
    | { type: "addToWishlist"; payload: Prisma.Product}
    | { type: "removeFromWishList"; payload: Prisma.Product}



export type State = {
    readonly products: Array<Prisma.Product>;
    readonly totalPrice: number;
    readonly isOpen : boolean;
    quantity: number;
    wishList : Array<Prisma.Product>;

}