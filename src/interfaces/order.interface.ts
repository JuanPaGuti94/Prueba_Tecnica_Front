export interface OrderResponse {
    orders: Order[]
  }
  
  export interface Order {
    id: number
    customer_name: string
    identification_type: string
    identification_number: string
    order_date: string
    products: ProductOrder[]
    total: number
  }
  
  export interface ProductOrder {
    id: number
    quantity: number
  }

  export interface OrderRequets {
    customer_name: string
    identification_type: string
    identification_number: string
    order_date: string
    products: ProductOrder[]
    total: number
  }