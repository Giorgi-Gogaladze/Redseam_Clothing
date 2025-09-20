
export interface IClothing {
  id: number;
  name?: string;
  description?: string;
  release_date?: string;
  cover_image?: string;
  images?: string[];
  price?: number;
  available_colors?: string[];
  available_sizes?: string[];
  total_price?: number;
  quantity?: number;
  color?: string;
  size?: string;
  brand?: Brand;
}
interface Brand {
  id?: number;
  name?: string;
  image?: string;
}
