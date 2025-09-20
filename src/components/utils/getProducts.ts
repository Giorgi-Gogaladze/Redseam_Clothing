export type TsortBy = 'created_at' | 'price' | '-price';
export type TFilter = {priceFrom: number | undefined, priceTo: number | undefined}

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
    const result = await resp.json();
    console.log('data:', result);
    return result
}