import React from 'react';
import { OrderTableProps } from '../../../interfaces/order-table.interface';

const OrdersTable: React.FC<OrderTableProps> = ({ dataOrder,onEdit,onDelete }) => {
  return (
    <div className='w-full'>
      <div className='overflow-x-auto rounded-lg border w-full '>
        <table className='min-w-[800px] w-full'> 
          <thead>
            <tr className='bg-[#d1cdcd] '>
              <th className='min-w-[35px]'>ID</th>
              <th className='min-w-[200px]'>Nombre del Cliente</th>
              <th className='min-w-[100px]'>Tipo de Identificación</th>
              <th className='min-w-[130px]'>Número de Identificación</th>
              <th className='min-w-[190px]'>Fecha de Pedido</th>
              <th className='min-w-[80px]'>Total</th>
              <th className='min-w-[150px]'>Producto ID</th> 
              <th className='min-w-[50px]'>Cantidad</th>
              <th className='min-w-[190px]'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {dataOrder.map(order => (
              <tr key={order.id} className='border border-b'>
                <td className='text-center py-10'>{order.id}</td>
                <td className='text-center'>{order.customer_name}</td>
                <td className='text-center'>{order.identification_type}</td>
                <td className='text-center'>{order.identification_number}</td>
                <td className='text-center'>{new Date(order.order_date).toLocaleString()}</td>
                <td className='text-center'>{order.total}</td>
                <td className='text-center'>
                  {order.products.map(product => (
                    <div key={product.id}>
                       {product.id} 
                    </div>
                  ))}
                </td>
                <td className='text-center'>
                  {order.products.map(product => (
                    <div key={product.id}>
                      {product.quantity}
                    </div>
                  ))}
                </td>
                <td className='text-center'>
                  <button className="bg-[#3C6090] text-white py-2 px-4 rounded mr-4" onClick={() => onEdit(order)}>Editar</button>
                  <button className="bg-[#b12c2c] text-white py-2 px-4 rounded" onClick={() => onDelete(order.id)}>Borrar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;