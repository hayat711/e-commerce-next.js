import {fetcher} from '@/utils/fetcher';
import {prodsSchema, productsSchema} from '../utils/schemas';

export const getProducts = async (categoryName: string) => {
    return await fetcher(`/api/products/${categoryName}`, {
        method: 'GET',
        //@ts-ignore
        schema: productsSchema,
    });
};


export const getNikeWomen = async () => {
    return await fetcher('/api/products/Nike Women', {
        method: 'GET',
        //@ts-ignore
        schema: prodsSchema,
    })
}

export const getNikeMen= async () => {
    return await fetcher('/api/products/Nike Men', {
        method: 'GET',
        //@ts-ignore
        schema: prodsSchema,
    })
}

export const getLeggings= async () => {
    return await fetcher('/api/products/Leggings', {
        method: 'GET',
        //@ts-ignore
        schema: prodsSchema,
    })
}

export const getAddidas= async () => {
    return await fetcher('/api/products/Addidas', {
        method: 'GET',
        //@ts-ignore
        schema: prodsSchema,
    })
}

export const getAsusLaptop= async () => {
    return await fetcher('/api/products/Asus Laptop', {
        method: 'GET',
        //@ts-ignore
        schema: prodsSchema,
    })
}

export const getConverseLow= async () => {
    return await fetcher('/api/products/Converse Low', {
        method: 'GET',
        //@ts-ignore
        schema: prodsSchema,
    })
}

export const getConverseTop= async () => {
    return await fetcher('/api/products/Converse Top', {
        method: 'GET',
        //@ts-ignore
        schema: prodsSchema,
    })
}

export const getConversePlat= async () => {
    return await fetcher('/api/products/Converse Plat', {
        method: 'GET',
        //@ts-ignore
        schema: prodsSchema,
    })
}

export const getMenTop= async () => {
    return await fetcher('/api/products/Men Top', {
        method: 'GET',
        //@ts-ignore
        schema: prodsSchema,
    })
}

export const getMsiLaptop= async () => {
    return await fetcher('/api/products/Msi Laptop', {
        method: 'GET',
        //@ts-ignore
        schema: prodsSchema,
    })
}

export const getMsiMonitor= async () => {
    return await fetcher('/api/products/Msi Monitor', {
        method: 'GET',
        //@ts-ignore
        schema: prodsSchema,
    })
}

export const getMsiPc= async () => {
    return await fetcher('/api/products/Msi GamingPc', {
        method: 'GET',
        //@ts-ignore
        schema: prodsSchema,
    })
}

export const getYuga= async () => {
    return await fetcher('/api/products/Yuga', {
        method: 'GET',
        //@ts-ignore
        schema: prodsSchema,
    })
}

