import React from "react";
import { ProductRequets } from "../../../interfaces/product.interface";
import useStage from "../../../hooks/stage-store.hook";

interface ProductFormProps {
  onCreate: (product: ProductRequets) => void; // Prop para manejar la creación del producto
}

export const ProductForm: React.FC<ProductFormProps> = ({ onCreate }) => {
  const { setCreateProduct     ,
     productName,
    setProductName,
    image,
    setImage,
    productDescription,
    setProductDescription,
    productPrice,
    setProductPrice,
    productStock,
    setProductStock } = useStage();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación de campos
    if (
      productName === "" ||
      productDescription === "" ||
      productPrice === "" ||
      productStock === "" ||
      image === ""
    ) {
      return;
    }

    const newProduct: ProductRequets = {
      name: productName,
      description: productDescription,
      price: Number(productPrice),
      stock: Number(productStock),
      img: image,
    };

    onCreate(newProduct);
    setImage("");
    setProductName("");
    setProductDescription("");
    setProductPrice("");
    setProductStock("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Crear Nuevo Producto</h2>

      <div className="mb-4">
        <label className="block mb-1" htmlFor="name">Nombre del Producto:</label>
        <input
          id="name"
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="border rounded w-full p-2"
          required
          aria-labelledby="name"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Descripción:</label>
        <textarea
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          className="border rounded w-full p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">
          Imagen:{" "}
          <span className="text-gray-400">
            (Ejemplo: https://http2.mlstatic....)
          </span>
        </label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border rounded w-full p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Precio:</label>
        <input
          type="number"
          value={productPrice}
          onChange={(e) => {
            setProductPrice(
              e.target.value === "" ? "" : Number(e.target.value)
            );
          }}
          className="border rounded w-full p-2"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Cantidad:</label>
        <input
          type="number"
          value={productStock}
          onChange={(e) =>
            setProductStock(e.target.value === "" ? "" : Number(e.target.value))
          }
          className="border rounded w-full p-2"
          required
        />
      </div>

      <div className=" flex justify-center gap-[24px] w-full">
        <button
          type="submit"
          className="bg-[#3C6090] text-white p-2 px-4 rounded"
          data-testid='confirmar'
        >
          Crear Producto
        </button>
        <button
          onClick={() => setCreateProduct(false)}
          className="bg-[#b12c2c] text-white py-2 px-4 rounded"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};
