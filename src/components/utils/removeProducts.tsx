export async function removeProduct(id: number,token: string |  undefined ) {
        const res = await fetch (`https://api.redseam.redberryinternship.ge/api/cart/products/${(id)}`, {
            method: 'DELETE',
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        })
        if(!res.ok){
            throw new Error('product did not remove')
        }
         try {
            return await res.json();
        } catch {
        return true;
        }
}