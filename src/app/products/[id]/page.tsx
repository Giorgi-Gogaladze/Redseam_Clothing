import { GetCertainProduct } from '@/components/utils/getCertainProduct';
import { IClothing } from '@/components/utils/interfaces/Iclothing';
import React from 'react'

export async function generateMetadata({params}: { params: {id: string} }){
 const res = await fetch(`https://api.redseam.redberryinternship.ge/api/products/${params.id}`, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
            }
        });
        const MTData = await res.json();
        return {
            title: MTData.name,
            description: MTData.description,
        }
}

interface IPageProp {
    params: {id: string}
}
const page = async ({params}: IPageProp) => {
    const product: IClothing = await GetCertainProduct(params.id);    
  return (
    <div>here is the id: {product.id}</div>
  )
}

export default page