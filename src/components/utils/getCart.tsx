export async function getCart(token: string) {
    if(!token) return null;
    try {
            const response = await fetch('https://api.redseam.redberryinternship.ge/api/cart', {
                method: 'GET',
                headers: {
                    "Accept":"application/json",
                    "Authorization": `Bearer ${token}`,
                },
            })
            if(!response.ok){
                return null
            }
            const res = await response.json();
            return res
    } catch (error) {
        throw new Error('failed to get cart')
    }
}