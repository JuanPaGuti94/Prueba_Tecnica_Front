import React, { useState } from 'react';
import { Product } from "../../../interfaces/product.interface";

interface ProductSelectionFormProps {
  dataProduct: Product[];
  onAddProduct: (productId: number, quantity: number) => void;
}

export const ProductSelectionForm: React.FC<ProductSelectionFormProps> = ({ dataProduct, onAddProduct }) => {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [quantity, setQuantity] = useState<string>(""); 

  const handleAddProduct = () => {
    if (selectedProductId !== null && quantity) {
      onAddProduct(selectedProductId, Number(quantity)); 
      setSelectedProductId(null); 
      setQuantity(""); 
    }
  };

  return (
    <div className="mb-2 flex gap-2">
      <select 
        value={selectedProductId || ""}
        onChange={(e) => setSelectedProductId(Number(e.target.value))}
        className="border rounded w-full p-2"
      >
        <option value="" disabled>Selecciona un producto</option>
        {dataProduct.map(product => (
          <option key={product.id} value={product.id}>
            {product.name} - ${product.price}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={quantity}
        min="1"
        onChange={(e) => setQuantity(e.target.value)} 
        className="border rounded w-20 p-2"
        placeholder="Cantidad"
      />
      <button
        type="button" 
        onClick={handleAddProduct}
        className="bg-[#3C6090] text-white p-2 rounded"
      >
        Agregar
      </button>
    </div>
  );
};