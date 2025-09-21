import { GetCertainProduct } from '@/components/utils/getCertainProduct';
import { IClothing } from '@/components/utils/interfaces/Iclothing';
import React from 'react'
import ProductDetail from '@/components/pages/ProductDetail';

export const dynamic = 'force-dynamic';

export async function generateMetadata({params}: { params: {id: string} }){
 const res = await fetch(`https://api.redseam.redberryinternship.ge/api/products/${params.id}`, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
            },
            next: { revalidate: 0 },
        });
        if (!res.ok) {
          return {
          title: "Product not found",
          description: "",
          };
        }

        const MTData = await res.json();
        return {
            title: MTData.name,
        }
}

interface IPageProp {
    params: {id: string}
}
const page = async ({params}: IPageProp) => {
    const product: IClothing = await GetCertainProduct(params.id); 

  return (
    <>
    <ProductDetail product={product} />
    </>
  )
}

export default page
