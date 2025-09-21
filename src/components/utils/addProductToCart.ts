import { ICartProduct } from "./interfaces/cartPost";

export async function addProductToCart(prodId: string, data: ICartProduct, token: string | undefined ){
    const res = await fetch(`https://api.redseam.redberryinternship.ge/api/cart/products/${Number(prodId)}`, {
        method: 'POST',
        headers: {
            "Accept":"application/json" ,
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
    if(!res.ok){
        throw new Error('failed to add product in card')
    }
    const result = await res.json();
    return result;
}