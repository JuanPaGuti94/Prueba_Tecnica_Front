import { Product, ProductRequets } from "../../interfaces/product.interface";
import { deleteProducts, getProducts, postProducts, putProducts } from "../../services/products.service";
import { showToast } from "../../shared/notification/toast.component";

export const fetchProducts = async (
  setData: (data: Product[]) => void
) => {
    try {
      const { products } = await getProducts();
      if (products) {
        setData(products);
      }
    } catch (error) {
      console.error("Error fetching Products", error);
    }
};
export const fetchCreateProducts = async (
  updateProduct:ProductRequets
) => {
    try {
      const { status } = await postProducts(updateProduct);
      if (status) {
        showToast('success', 'Se ha Creado el producto con exito');  
      }
    } catch (error) {
      console.error("Error fetching Products", error);
    }
};
export const fetchUpdateProducts = async (
  id:string,
  updateProduct:ProductRequets
) => {
    try {
      const { status } = await putProducts(id,updateProduct);
      if (status) {
        showToast('success', 'Se ha Actualziado el producto con exito');  
      }
    } catch (error) {
      console.error("Error fetching Products", error);
    }
};
export const fetchDeleteProducts = async (
  id:string
) => {
    try {
      const { status } = await deleteProducts(id);
      if (status) {
        showToast('success', 'Se ha eliminado el producto con exito');  
      }
    } catch (error) {
      console.error("Error fetching PRA:", error);
    }
};