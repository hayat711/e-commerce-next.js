import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prismadb';
import type Prisma from '@prisma/client'

type ProductType = Prisma.Product
type CategoryType = Prisma.Category


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { category, products } = req.body;

    try {
      const createdCategory = await prisma.category.create({ data: { name: category } });

      const createdProducts = await Promise.all(
        products.map(async (product : ProductType) => {
          return prisma.product.create({
            data: {
              name: product.name,
              link: product.link,
              color: product.color,
              description: product.description,
              price: product.price,
              quantity: product.quantity,
              categoryId: createdCategory.id,
            },
          });
        })
      );

      res.status(201).json({ message: 'Category and Products created successfully', createdCategory, createdProducts });
      console.log('Category and products created successfully 🚀 🚀');
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to create Category and Products' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
