export async function patchProduct(id: number, token: string, newQuantity: number){
    try {      
        const response = await fetch(`https://api.redseam.redberryinternship.ge/api/cart/products/${id}`, {
        method: 'PATCH',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({quantity: newQuantity})
    })
    } catch (error) {
        throw new Error('failed to update quantity')
    }
}