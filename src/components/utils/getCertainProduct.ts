import { IClothing } from "./interfaces/Iclothing";
export async function GetCertainProduct(id: string) {
    try {
        const res = await fetch(`https://api.redseam.redberryinternship.ge/api/products/${id}`, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
            }
        });
        const data:IClothing = await res.json();
        return data;
    } catch (error) {
        throw new Error('failed to fetch that certain data')
    }
}