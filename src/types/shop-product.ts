export type ShopProduct = {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  badge?: string;
  stockStatus: "in-stock" | "low-stock" | "out-of-stock";
  imageColor: string;
};