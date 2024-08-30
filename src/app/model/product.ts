export interface Product {
    id: string;
    code: string;
    title: string;
    description: string;
    image: string;
    price: Number;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number;
  }
  
  export interface ProductDTO {
    data: Product[];
  }
  