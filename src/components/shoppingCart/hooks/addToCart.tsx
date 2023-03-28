
import { useQuery, useMutation } from 'react-query';
import type Prisma from '@prisma/client'

type productType = Readonly<Prisma.MsiLaptop>
const useAddCartItem = () => {
    return useMutation(async (product:productType) => {
    } )
}