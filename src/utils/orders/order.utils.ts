import { Order, OrderRequets } from "../../interfaces/order.interface";
import { deleteOrders, getOrders, postOrders, putOrders } from "../../services/orders.services";
import { showToast } from "../../shared/notification/toast.component";

export const fetchOrder= async (
  setData: (data: Order[]) => void
) => {
    try {
      const { orders } = await getOrders();
      if (orders) {
        setData(orders);
      }
    } catch (error) {
      console.error("Error fetching Order", error);
    }
};
export const fetchCreateOrder = async (
  createOrder:OrderRequets
) => {
    try {
      const { status } = await postOrders(createOrder);
      if (status) {
        showToast('success', 'Se ha Creado un pedido con exito');  
      }
    } catch (error) {
      console.error("Error fetching Order", error);
    }
};
export const fetchUpdateOrder = async (
  id:string,
  updateProduct:OrderRequets
) => {
    try {
      const { status } = await putOrders(id,updateProduct);
      if (status) {
        showToast('success', 'Se ha Actualziado el Pedido con exito');  
      }
    } catch (error) {
      console.error("Error fetching order", error);
    }
};
export const fetchDeleteOrders = async (
  id:string
) => {
    try {
      const { status } = await deleteOrders(id);
      if (status) {
        showToast('success', 'Se ha eliminado el pedido con exito');  
      }
    } catch (error) {
      console.error("Error fetching order", error);
    }
};