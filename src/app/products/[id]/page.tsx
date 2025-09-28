import { GetCertainProduct } from '@/components/utils/getCertainProduct';
import { IClothing } from '@/components/utils/interfaces/Iclothing';
import React from 'react'
import ProductDetail from '@/components/pages/ProductDetail';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({params}: ProductPageProps):Promise<Metadata>{
    const { id } = await params;

    const res = await fetch(`https://api.redseam.redberryinternship.ge/api/products/${id}`, {
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

const Page = async ({params}: ProductPageProps) => {
    const { id } = await params;
    
    const product: IClothing = await GetCertainProduct(id); 

  return (
    <>
    <ProductDetail product={product} id={id} />
    </>
  )
}

export default Page
