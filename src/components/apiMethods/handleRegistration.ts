

export async function handleRegistration(formData: FormData) {
    try {
        const res  = await fetch(`/api/registration`, {
            method: 'POST',
            body: formData,
            headers: {
                Accept: 'application/json'
            },
        })
        const data = await res.json();
        if(!res.ok){
            throw data;
        }
        return data;
    } catch (error) {
        throw error;
    }
}