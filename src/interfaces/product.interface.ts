export interface ProductResponse {
    products: Product[]
  }
  
  export interface Product {
    id: number
    name: string
    price: number
    description: string
    img: string
    stock: number
  }

  export interface ApiResponse {
    message: string
    status: string
  }

  export interface ProductRequets {
    name: string
    price: number
    description: string
    img: string
    stock: number
  }

  export interface ProductDTO {
    imageUrl: string;
    title: string;
    description: string;
    price: number | string;
    availableQuantity: number | string;
  }
  