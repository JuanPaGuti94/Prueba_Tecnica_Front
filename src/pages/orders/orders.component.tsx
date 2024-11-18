import { FC, useEffect, useState } from "react";
import OrdersTable from "./componenets/orders-table.component";
import { Order, OrderRequets } from "../../interfaces/order.interface";
import { fetchCreateOrder, fetchDeleteOrders, fetchOrder, fetchUpdateOrder } from "../../utils/orders/order.utils";
import { OrderForm } from "./componenets/form-table.component";
import useStage from "../../hooks/stage-store.hook";
export const OrdersPage: FC = () => {
  const [data, setData] = useState<Order[]>([]);
  const [dataEdit, setDataEdit] = useState<Order>();
  const [type, setType] = useState('add');
  const { createOrder, setCreateOrder } = useStage();
  useEffect(() => {
    const loadProducts = async () => {
      await fetchOrder(setData);
    };
    loadProducts();
  }, []);
  const create = async (createdProduct: OrderRequets) => {
    await fetchCreateOrder({
      customer_name: createdProduct.customer_name,
      identification_type: createdProduct.identification_type,
      identification_number: createdProduct.identification_number,
      order_date: createdProduct.order_date,
      products: createdProduct.products,
      total: createdProduct.total,
    });
    fetchOrder(setData);
    setCreateOrder(false);
  };
  const deleteOrder = async (id: number) => {
    await fetchDeleteOrders(id.toString());
    fetchOrder(setData);
  };
  const editchange = (order: Order) => {
    setCreateOrder(true)
    setType('edit'); 
    setDataEdit(order);
  };
  const editOrder = async (id: number, updatedProduct: OrderRequets) => {
    await fetchUpdateOrder(id.toString(), {
      customer_name: updatedProduct.customer_name,
      identification_type: updatedProduct.identification_type,
      identification_number: updatedProduct.identification_number,
      order_date: updatedProduct.order_date,
      products: updatedProduct.products,
      total: updatedProduct.total
    });
    fetchOrder(setData);
    setCreateOrder(false);
  };

  return (
    <div className="px-[16px] md:px-[5%] pt-[16px] pb-[24px] ">
      <div>
        <h1 className="text-4xl font-bold text-center mb-4 text-[#3C6090]">
          ¡Gestión de Pedidos!
        </h1>
        <h2 className="text-2xl text-center text-gray-600 mb-8">
          Optimiza y controla el flujo de pedidos de manera eficiente y
          sencilla.
        </h2>
        <div className=" flex flex-col md:flex-row gap-[24px]">
          <p className="text-2xl text-center text-gray-600 ">
            ¿Desea crear un Pedido?
          </p>
          <button
            className="bg-[#3C6090] text-white py-2 px-4 rounded"
            onClick={() => {
              setCreateOrder(true)
              setType('add')}
            }
            data-testid="crear"
          >
            CREAR
          </button>
        </div>
        {createOrder && (
          <div className=" my-10">
            <OrderForm
              onAddOrder={(createdProduct) => create(createdProduct as unknown as OrderRequets)}
              type={type} dataEdit={dataEdit!} setCreateOrder={setCreateOrder} 
              onEditOrder={(id,updateOrder) => editOrder(id,updateOrder) }            />
          </div>
        )}
        <div className="w-full mt-10">
          <OrdersTable dataOrder={data}
          onDelete={(id) => deleteOrder(id)} onEdit={(order)=>editchange(order) }  />
        </div>
      </div>
    </div>
  );
};
