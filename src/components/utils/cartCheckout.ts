import { ICheckoutData } from "./interfaces/checkoutData";

export async function cartCheckout(token:string | undefined, data: ICheckoutData){
    try {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('surname', data.surname);
        formData.append('email', data.email);
        formData.append('address', data.address);
        formData.append('zip_code', data.zip_code.toString());
        const res = await fetch('https://api.redseam.redberryinternship.ge/api/cart/checkout', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: formData,
        })
        if(!res.ok){
            const errorData = await res.json()
            throw errorData;
        }
        return res.json();
    } catch (error) {
        throw error
    }
}