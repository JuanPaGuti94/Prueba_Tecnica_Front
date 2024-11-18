import { fetchOrder, fetchCreateOrder, fetchUpdateOrder, fetchDeleteOrders } from '../../../src/utils/orders/order.utils';
import { getOrders, postOrders, putOrders, deleteOrders } from '../../../src/services/orders.services';
import { showToast } from '../../../src/shared/notification/toast.component';
import { Order, OrderRequets } from '../../../src/interfaces/order.interface';
import { describe, vi, expect, afterEach, it, beforeEach, Mock } from 'vitest';

vi.mock('../../../src/services/orders.services');
vi.mock('../../../src/shared/notification/toast.component');

describe('fetchOrder', () => {
    const setDataMock = vi.fn();

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should fetch orders and set data on success', async () => {
        const mockOrders: Order[] = [{ id: '1', name: 'Order 1' }, { id: '2', name: 'Order 2' }];
        (getOrders as Mock).mockResolvedValue({ orders: mockOrders });

        await fetchOrder(setDataMock);

        expect(getOrders).toHaveBeenCalled();
        expect(setDataMock).toHaveBeenCalledWith(mockOrders);
    });

    it('should handle errors gracefully', async () => {
        (getOrders as Mock).mockRejectedValue(new Error('Network Error'));

        await fetchOrder(setDataMock);

        expect(getOrders).toHaveBeenCalled();
        expect(setDataMock).not.toHaveBeenCalled(); // setData should not be called on error
    });
});

describe('fetchCreateOrder', () => {
    const requestMock: OrderRequets = { name: 'New Order' }; // Ajusta el objeto según tu interfaz

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should call postOrders and show success toast on success', async () => {
        (postOrders as Mock).mockResolvedValue({ status: true });

        await fetchCreateOrder(requestMock);

        expect(postOrders).toHaveBeenCalledWith(requestMock);
        expect(showToast).toHaveBeenCalledWith('success', 'Se ha Creado un pedido con exito');
    });

    it('should handle errors gracefully', async () => {
        (postOrders as Mock).mockRejectedValue(new Error('Network Error'));

        await fetchCreateOrder(requestMock);

        expect(postOrders).toHaveBeenCalledWith(requestMock);
        expect(showToast).not.toHaveBeenCalled(); // showToast should not be called on error
    });
});

describe('fetchUpdateOrder', () => {
    const requestMock: OrderRequets = { name: 'Updated Order' }; // Ajusta el objeto según tu interfaz
    const orderId = '1';

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should call putOrders and show success toast on success', async () => {
        (putOrders as Mock).mockResolvedValue({ status: true });

        await fetchUpdateOrder(orderId, requestMock);

        expect(putOrders).toHaveBeenCalledWith(orderId, requestMock);
        expect(showToast).toHaveBeenCalledWith('success', 'Se ha Actualziado el Pedido con exito');
    });

    it('should handle errors gracefully', async () => {
        (putOrders as Mock).mockRejectedValue(new Error('Network Error'));

        await fetchUpdateOrder(orderId, requestMock);

        expect(putOrders).toHaveBeenCalledWith(orderId, requestMock);
        expect(showToast).not.toHaveBeenCalled(); // showToast should not be called on error
    });
});

describe('fetchDeleteOrders', () => {
    const orderId = '1';

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should call deleteOrders and show success toast on success', async () => {
        (deleteOrders as Mock).mockResolvedValue({ status: true });

        await fetchDeleteOrders(orderId);

        expect(deleteOrders).toHaveBeenCalledWith(orderId);
        expect(showToast).toHaveBeenCalledWith('success', 'Se ha eliminado el pedido con exito');
    });

    it('should handle errors gracefully', async () => {
        (deleteOrders as Mock).mockRejectedValue(new Error('Network Error'));

        await fetchDeleteOrders(orderId);

        expect(deleteOrders).toHaveBeenCalledWith(orderId);
        expect(showToast).not.toHaveBeenCalled(); // showToast should not be called on error
    });
});