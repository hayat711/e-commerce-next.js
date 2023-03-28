import {UseQueryResult, useQuery} from "react-query";
import {getNikeWomen, getProducts, getConverseTop, getNikeMen, getMsiPc, getMsiLaptop, getMsiMonitor, getAsusLaptop, getConverseLow, getConversePlat, getLeggings, getYuga, getMenTop, getAddidas} from "@/components/products/api/getProducts";


type ProductType = {
    name: string;
    func: () => Promise<any>;
  };

const products: ProductType[]  = [
    // { name: 'Perfume', func: getProducts },
    { name: 'Nike Women', func: getNikeWomen },
    { name: 'Nike Men', func: getNikeMen },
    { name: 'Msi GemingPc', func: getMsiPc },
    { name: 'Msi Laptop', func: getMsiLaptop },
    { name: 'Msi Monitor', func: getMsiMonitor },
    { name: 'Asus Laptop', func: getAsusLaptop },
    { name: 'Converse Top', func: getConverseTop },
    { name: 'Converse Low', func: getConverseLow },
    { name: 'Converse Plat', func: getConversePlat },
    { name: 'Leggings', func: getLeggings },
    { name: 'Yuga', func: getYuga },
    {name: 'Men Top', func: getMenTop},
    {name: 'Addidas', func: getAddidas},

  ];
  
type UseProductResult<T> = UseQueryResult<T, unknown>;

  export const useProduct = <T>(name: string): UseProductResult<T> => {
    const { func } = products.find((p) => p.name === name) || {};
    if (!func) throw new Error(`Invalid product name: ${name}`);
    return useQuery(name, func, {
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: false,
    }) as UseProductResult<T>;
};


// export const useGetProducts =  () => {
//     return useQuery('products', getProducts)
// }


// export const useNikeWomen = () => {
//     return useQuery('nike_women', getNikeWomen);

// }

// export const useNikeMen = () => {
//     return useQuery('nike_men', getNikeMen)
// }

// export const useMsiPc = () => {
//     return useQuery('msi_pc', getMsiPc)
// }
// export const useMsLaptop = () => {
//     return useQuery('msi_laptop', getMsiLaptop)
// }

// export const useMsiMonitor = () => {
//     return useQuery('msi_monitor', getMsiMonitor)
// }

// export const useAsusLaptop = () => {
//     return useQuery('asus_laptop', getAsusLaptop)
// }

// export const useConverseTop = () => {
//     return useQuery('converse_top', getConverseTop)
// }

// export const useConverseLow = () => {
//     return useQuery('converse_low', getConverseLow)
// }

// export const useConversePlat = () => {
//     return useQuery('converse_plat', getConversePlat)
// }

// export const useLeggings = () => {
//     return useQuery('leggings', getLeggings)
// }

// export const useYuga = () => {
//     return useQuery('yuga', getYuga)
// }

