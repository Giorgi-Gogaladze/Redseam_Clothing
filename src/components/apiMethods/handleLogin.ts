export async function handleLogin(data: {email: string, password: string}){
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const respDat  = await response.json();
        if(!response.ok){
            throw respDat;
        }
        return respDat;
    } catch (error) {
        throw error;
    }
}