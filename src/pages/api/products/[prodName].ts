import {NextApiRequest, NextApiResponse} from "next";
import {PrismaClient} from "@prisma/client";
import prisma from '@/lib/prismadb';


export default async (req: NextApiRequest, res: NextApiResponse) => {
    try{
        const { prodName }: { prodName: string } = req.query as { prodName: string };
        //@ts-ignore
        const products = await prisma.product.findMany({
            where: {
                category: {
                    name: prodName
                }
            }
        });
        

        if (products.length) {
            res.status(200).json(products);
            res.end();
        } else {
            res.status(404);
            res.end();
        }
    }catch{
        res.status(500);
    }

    // populate data
    // for (const pc of asus) {
    //     try {
    //         const ItemPrice  = Math.floor(Math.random() * (2000 - 800 + 1)) + 800;
    //         const prisma = new PrismaClient();
    //         //@ts-ignore
    //         const results = await prisma.AsusLaptop.create({
    //             data: {
    //                 name: pc.name,
    //                 link: pc.link,
    //                 price: ItemPrice.toString(),
    //                 //@ts-ignore
    //                 description: pc.description,
    //                 category: 'Laptop'
    //             }
    //         });
    //         console.log('Records added');
    //     } catch (e) {
    //         console.log('Error insert records: ', e);
    //     }
    // }

}