export async function getCart(token: string) {
    try {
            const response = await fetch('https://api.redseam.redberryinternship.ge/api/cart', {
                method: 'GET',
                headers: {
                    "Accept":"application/json",
                    "Authorization": `Bearer ${token}`,
                },
            })
            if(!response.ok){
                throw new Error('failed ot fetch data')
            }
            const res = await response.json();
            return res
    } catch (error) {
        throw new Error('failed to get cart')
    }
}