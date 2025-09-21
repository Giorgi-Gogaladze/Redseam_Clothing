import { ICartProduct } from "./interfaces/cartPost";

export async function addProductToCart(prodId: number, data: ICartProduct ){
    const res = await fetch(`https://api.redseam.redberryinternship.ge/api/cart/products/${prodId}`, {
        method: 'POST',
        headers: {
            "Accept":"application/json" ,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            data,
        })
    })
    if(!res.ok){
        throw new Error('failed to add product in card')
    }
    const result = await res.json();
    return result;
}