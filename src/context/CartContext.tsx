'use client'

import { IClothing } from "@/components/utils/interfaces/Iclothing"
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie'
import { getCart } from "@/components/utils/getCart";
import { removeProduct } from "@/components/utils/removeProducts";

interface ICartContext {
    savedProducts: IClothing[] | null;
    setSavedProducts: React.Dispatch<React.SetStateAction<IClothing[] | null>>
    isLoading: boolean;
    fetchCart: () => Promise<void>;
    handleProdRemove: (prod: IClothing) => Promise<void>;
}

const CartContext = createContext<ICartContext | undefined>(undefined);

export function CartProvider ({children}: {children: ReactNode}) {
    const [savedProducts, setSavedProducts] = useState<IClothing[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchCart = async () => {
        const token = Cookies.get('token');
        if (!token){ 
            return;}
        try {
            setIsLoading(true);
            const prods = await getCart(token);
            setSavedProducts(prods);
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => { fetchCart(); }, []);

   const handleProdRemove = async (prod: IClothing) => {
       const token = Cookies.get('token');
       if (!token) throw new Error('No token available');

       const duplicate = savedProducts?.filter(p => p.id === prod.id) || [];

       if(duplicate.length > 1){
        setSavedProducts(prev => prev ? prev.filter(p => !(p.id === prod.id && p.color === prod.color && p.size === prod.size)) : null)
       }else {
        await removeProduct(prod.id, token);
        setSavedProducts(prev => prev ? prev.filter(p => !(p.id === prod.id && p.color === prod.color && p.size === prod.size)) : null);
       }
    }
    return (
        <CartContext.Provider value={{ savedProducts, setSavedProducts, isLoading, fetchCart, handleProdRemove }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = ()=> {
    const context = useContext(CartContext)
    if(!context) throw new Error('no cartcontext available ')
     return context;
}