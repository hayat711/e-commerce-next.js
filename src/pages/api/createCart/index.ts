import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prismadb';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const reqMethod = req.method;

        const userId = req.body;
        console.log('body of create Cart fun 🚀', req.body);
        console.log('body of create Cart userId  🚀', userId);

        switch (reqMethod) {
            case 'POST':
                const cart = await prisma.cart.create({
                    data: {
                        userId: userId,
                        totalItems: 0,
                        totalPrice: 0,
                    },
                });
                res.status(200).json(cart);
        }
    } catch (e) {
        res.status(500).json({ message: 'server error' });
    }
}
