
export interface IClothing {
  id: number;
  name: string;
  description: string;
  release_date: string; // ISO date string
  cover_image: string;
  images: string[];
  price: number;
  total_price: number;
  quantity: number;
  brand: Brand;
}
interface Brand {
  id: number;
  name: string;
  image: string;
}
