export interface Product {
    id: number;
    quantity: number;
  }
  
  export interface Order {
    id: number;
    customer_name: string;
    identification_type: string;
    identification_number: string;
    order_date: string;
    products: Product[];
    total: number;
  }
  export interface OrderDTO {
    customer_name: string
    identification_type: string
    identification_number: string
    order_date: string
    products: Product[]
    total: number
  }
 export type OrderTableProps = {
      dataOrder: Order[];
      onEdit: (order: Order) => void; 
      onDelete: (id:number) => void;
  }