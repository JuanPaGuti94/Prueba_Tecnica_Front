import { useEffect, useState } from "react";
import { Order, OrderRequets } from "../../../interfaces/order.interface";
import { fetchProducts } from "../../../utils/products/product.utils";
import { Product } from "../../../interfaces/product.interface";
import { ProductSelectionForm } from "./selected-product.component";

interface OrderFormProps {
  onAddOrder: (product: OrderRequets) => void;
  onEditOrder: (id:number,product: OrderRequets) => void;
  type: string;
  dataEdit: Order;
  setCreateOrder: (createOrder: boolean) => void;
}

export const OrderForm: React.FC<OrderFormProps> = ({
  onAddOrder,
  onEditOrder,
  type,
  dataEdit,
  setCreateOrder,
}) => {
  const [customerName, setCustomerName] = useState("");
  const [identificationType, setIdentificationType] = useState("");
  const [identificationNumber, setIdentificationNumber] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<
    { id: number; quantity: number }[]
  >([]);
  const [total, setTotal] = useState<number>(0);
  const [dataProduct, setDataProduct] = useState<Product[]>([]);
  useEffect(() => {
    if (type === "edit" && dataEdit) {
      setCustomerName(dataEdit.customer_name);
      setIdentificationType(dataEdit.identification_type);
      setIdentificationNumber(dataEdit.identification_number);
      setOrderDate(new Date(dataEdit.order_date).toISOString().split("T")[0]);
      setSelectedProducts(dataEdit.products);
      const totalAmount = dataEdit.products.reduce((acc, product) => {
        const foundProduct = dataProduct.find((p) => p.id === product.id);
        return acc + (foundProduct ? foundProduct.price * product.quantity : 0);
      }, 0);
      setTotal(totalAmount);
    } else if (type === "add") {
      resetForm();
    }
  }, [type, dataEdit, dataProduct]);
  useEffect(() => {
    fetchProducts(setDataProduct);
  }, []);
  const resetForm = () => {
    setCustomerName("");
    setIdentificationType("");
    setIdentificationNumber("");
    setOrderDate("");
    setSelectedProducts([]);
    setTotal(0);
  };
  const handleAddProduct = (productId: number, quantity: number) => {
    const product = dataProduct.find((p) => p.id === productId);
    if (product) {
      const newProduct = { id: productId, quantity };
      setSelectedProducts((prev) => [...prev, newProduct]);
      setTotal((prev) => prev + product.price * quantity);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrder: OrderRequets = {
      customer_name: customerName,
      identification_type: identificationType,
      identification_number: identificationNumber,
      order_date: new Date(orderDate).toISOString(),
      products: selectedProducts,
      total: total,
    };
    if (type === 'edit') {
      onEditOrder(dataEdit.id,newOrder);
    }else{
      onAddOrder(newOrder);
    }
    resetForm();
  };
  const handleRemoveProduct = (productId: number) => {
    setSelectedProducts((prev) => {
      const updatedProducts = prev.filter((item) => item.id !== productId);
      const productToRemove = prev.find((item) => item.id === productId);
      if (productToRemove) {
        const product = dataProduct.find((p) => p.id === productId);
        if (product) {
          setTotal((prevTotal) => prevTotal - product.price * productToRemove.quantity);
        }
      }
      
      return updatedProducts;
    });
  };
  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded">
      <h2 className="text-lg font-bold mb-2">Crear Nuevo Pedido</h2>
      <div className="mb-2">
        <label className="block mb-1">Nombre del Cliente:</label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
          className="border rounded w-full p-2"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Tipo de Identificación:</label>
        <select
          value={identificationType}
          onChange={(e) => setIdentificationType(e.target.value)}
          required
          className="border rounded w-full p-2"
        >
          <option value="" disabled>
            Selecciona un tipo
          </option>
          <option value="CC">CC - Cédula de Ciudadanía</option>
          <option value="CE">CE - Cédula de Extranjería</option>
        </select>
      </div>
      <div className="mb-2">
        <label className="block mb-1">Número de Identificación:</label>
        <input
          type="text"
          value={identificationNumber}
          onChange={(e) => setIdentificationNumber(e.target.value)}
          required
          className="border rounded w-full p-2"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Fecha de Pedido:</label>
        <input
          type="date"
          value={orderDate}
          onChange={(e) => setOrderDate(e.target.value)}
          required
          className="border rounded w-full p-2"
        />
      </div>
      <label className="block mb-1">Producto:</label>
      <ProductSelectionForm
        dataProduct={dataProduct}
        onAddProduct={handleAddProduct}
      />

<div className="mb-2">
  <h3 className="text-md font-bold mb-1">Productos Seleccionados:</h3>
  {selectedProducts.length > 0 ? (
    <ul>
      {selectedProducts.map((item, index) => {
        const product = dataProduct.find((p) => p.id === item.id);
        return (
          <li key={index} className="flex justify-between items-center">
            <span>
              {product?.name} - Cantidad: {item.quantity}
            </span>
            <button
              type="button" 
              onClick={(e) => {
                e.stopPropagation(); 
                handleRemoveProduct(item.id);
              }}
              className="ml-2 text-red-500 hover:text-red-700"
              title="Eliminar producto"
            >
              Eliminar
            </button>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No se han seleccionado productos.</p>
  )}
</div>

      <div className="mb-2">
        <label className="block mb-1">Total:</label>
        <input
          type="number"
          value={total}
          readOnly
          className="border rounded w-full p-2 bg-gray-100"
        />
      </div>

      <div className="flex justify-center gap-[24px] w-full">
        <button
          type="submit"
          className="bg-[#3C6090] text-white p-2 px-4 rounded"
          data-testid="confirmar"
        >
          {type === 'edit' ? 'Editar Pedido' : 'Crear Pedido'}
        </button>
        <button
          type="button"
          onClick={() => {
            resetForm();
            setCreateOrder(false);
          }}
          className="bg-[#b12c2c] text-white py-2 px-4 rounded"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};
