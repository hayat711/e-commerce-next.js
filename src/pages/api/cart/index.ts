//@ts-nocheck
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prismadb';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const requestMethod = req.method;
        const body = JSON.parse(req.body);
        console.log('body req', body);
        console.log(req.method);

        switch (requestMethod) {
            case 'POST':
                
                const {
                    id,
                    name,
                    description,
                    price,
                    link,
                    color,
                    quantity,
                    categoryId,
                    createdAt,
                } = req.body;
                const cartResponse = await fetch('/api/createCart');
                const cartData = await cartResponse.json();
                const cartId = cartData.id;
                console.log('cartId inside the cartiem', cartId);
                const cartItem = await prisma.cartItem.createMany({
                    data: {
                        quantity,
                        product: {
                            connect: {
                                id: id,
                            },
                        },
                        cart: {
                            connect: {
                                id: cartId,
                            },
                        },
                    },
                });
                res.status(200).json(cartItem);
                console.log('cartitem 🔥 ', cartItem);
                break;

            case 'DELETE':
                const ProductId = req.query.id as string;
                const item = await prisma.cart.delete({
                    where: { id: ProductId },
                });
                if (item) {
                    res.status(200).json({ message: 'item deleted', item });
                } else {
                    res.status(404).json({ message: 'item not found' });
                }
                break;
            case 'PATCH':
                const {
                    id: itemId,
                    ProductQyt,
                }: { id: string; ProductQyt: number } = body;
                const updatedCartItem = await prisma.cartItem.update({
                    where: { id: itemId },
                    data: { ProductQyt },
                });
                res.status(200).json({
                    message: 'item updated',
                    item: updatedCartItem,
                });
                break;

            case 'GET':
                const cart = await prisma?.cart.findMany();

                if (cart) {
                    res.status(200).json(cart);
                    res.end();
                } else {
                    res.status(404);
                    res.end();
                }
                break;
            default:
                break;
        }
    } catch (e) {
        res.status(500).json({ message: 'internal server error ' });
    }
}
