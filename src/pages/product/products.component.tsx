import { FC, useEffect, useState } from "react";
import { Product, ProductDTO, ProductRequets } from "../../interfaces/product.interface";
import { Card } from "../../shared/cards/cards.component";
import {
  fetchCreateProducts,
  fetchDeleteProducts,
  fetchProducts,
  fetchUpdateProducts,
} from "../../utils/products/product.utils";
import useStage from "../../hooks/stage-store.hook";
import { ProductForm } from "./components/product-form.component";

export const ProductosPage: FC = () => {
  const [data, setData] = useState<Product[]>([]); 
  const [isLoading, setIsLoading] = useState(true); 
  const { createProduct, setCreateProduct } = useStage();
  useEffect(() => {
    const loadProducts = async () => {
      await fetchProducts(setData);
      setIsLoading(false);
    };
    loadProducts();
  }, []);
  const create = async (createdProduct: ProductRequets) => {
    await fetchCreateProducts({
      name: createdProduct.name,
      price: createdProduct.price,
      description: createdProduct.description,
      img: createdProduct.img,
      stock: createdProduct.stock
    });
    fetchProducts(setData);
    setCreateProduct(false)
  };
  const deleteProduct = async (id: number) => {
    await fetchDeleteProducts(id.toString());
    fetchProducts(setData);
  };

  const editProduct = async (id: number, updatedProduct: ProductDTO) => {
    await fetchUpdateProducts(id.toString(), {
      name: updatedProduct.title,
      price: parseInt(updatedProduct.price as string),
      description: updatedProduct.description,
      img: updatedProduct.imageUrl,
      stock: parseInt(updatedProduct.availableQuantity as string),
    });
    fetchProducts(setData);
  };

  return (
    <div className="px-[16px] md:px-[5%] pt-[16px] pb-[24px]">
      <h1 className="text-4xl font-bold text-center mb-4 text-[#3C6090]">
        ¡Descubre Nuestros Productos!
      </h1>
      <h2 className="text-2xl text-center text-gray-600 mb-8">
        Calidad y variedad al mejor precio
      </h2>
      <div className=" flex flex-col md:flex-row gap-[24px]">
        <p className="text-2xl text-center text-gray-600 ">
          ¿Desea crear un producto?
        </p>
        <button
          className="bg-[#3C6090] text-white py-2 px-4 rounded"
          onClick={() => setCreateProduct(true)}
          data-testid='crear'
        >
          CREAR
        </button>
      </div>
      {createProduct && (
        <div className=" my-10">
          <ProductForm onCreate={(createdProduct) =>
                create(createdProduct as unknown as ProductRequets)
              } />
        </div>
      )}
      <h1 className="text-4xl font-bold text-center mb-4 text-[#3C6090]">
        Catalogo
      </h1>
      {isLoading ? (
        <p className="text-center">Cargando productos...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-20">
          {data.map((product) => (
            <Card
              key={product.id}
              imageUrl={product.img}
              title={product.name}
              description={product.description}
              price={product.price}
              onEdit={(updatedProduct) =>
                editProduct(product.id, updatedProduct as unknown as ProductDTO)
              }
              onDelete={() => deleteProduct(product.id)}
              availableQuantity={product.stock}
            />
          ))}
        </div>
      )}
    </div>
  );
};
