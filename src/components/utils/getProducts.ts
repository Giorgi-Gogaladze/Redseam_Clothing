type TsortBy = 'created_at' | 'price' | '-price';
type TFilter = {priceFrom: number, priceTo: number} 

export async function GetProducts(sort: TsortBy, page:number = 1, filters: TFilter){
const params = new URLSearchParams();
params.append('page', page.toString());
if(sort) params.append('sort', sort.toString());
if(filters.priceFrom) params.append('filter[price_from]', filters.priceFrom.toString());
if(filters.priceTo) params.append('filter[price_to]', filters.priceTo.toString())

    const url = `https://api.redseam.redberryinternship.ge/api/products?${params.toString()}`;
    const resp = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        },
    });
    if(!resp.ok){
        throw new Error('failed to fetch products')
    }
    return resp.json()
}