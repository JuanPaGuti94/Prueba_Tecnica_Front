import { fetchProducts, fetchCreateProducts, fetchUpdateProducts, fetchDeleteProducts } from '../../../src/utils/products/product.utils';
import { getProducts, postProducts, putProducts, deleteProducts } from '../../../src/services/products.service';
import { showToast } from '../../../src/shared/notification/toast.component';
import { Product, ProductRequets } from '../../../src/interfaces/product.interface';
import { describe, vi, expect, afterEach, it, beforeEach, Mock } from 'vitest';

vi.mock('../../../src/services/products.service');
vi.mock('../../../src/shared/notification/toast.component');

describe('fetchProducts', () => {
    const setDataMock = vi.fn();

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should fetch products and set data on success', async () => {
        const mockProducts: Product[] = [{ id: '1', name: 'Product 1' }, { id: '2', name: 'Product 2' }];
        (getProducts as Mock).mockResolvedValue({ products: mockProducts });

        await fetchProducts(setDataMock);

        expect(getProducts).toHaveBeenCalled();
        expect(setDataMock).toHaveBeenCalledWith(mockProducts);
    });

    it('should handle errors gracefully', async () => {
        (getProducts as Mock).mockRejectedValue(new Error('Network Error'));

        await fetchProducts(setDataMock);

        expect(getProducts).toHaveBeenCalled();
        expect(setDataMock).not.toHaveBeenCalled(); // setData should not be called on error
    });
});

describe('fetchCreateProducts', () => {
    const requestMock: ProductRequets = { name: 'New Product' };

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should call postProducts and show success toast on success', async () => {
        (postProducts as Mock).mockResolvedValue({ status: true });

        await fetchCreateProducts(requestMock);

        expect(postProducts).toHaveBeenCalledWith(requestMock);
        expect(showToast).toHaveBeenCalledWith('success', 'Se ha Creado el producto con exito');
    });

    it('should handle errors gracefully', async () => {
        (postProducts as Mock).mockRejectedValue(new Error('Network Error'));

        await fetchCreateProducts(requestMock);

        expect(postProducts).toHaveBeenCalledWith(requestMock);
        expect(showToast).not.toHaveBeenCalled(); // showToast should not be called on error
    });
});

describe('fetchUpdateProducts', () => {
    const requestMock: ProductRequets = { name: 'Updated Product' };
    const productId = '1';

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should call putProducts and show success toast on success', async () => {
        (putProducts as Mock).mockResolvedValue({ status: true });

        await fetchUpdateProducts(productId, requestMock);

        expect(putProducts).toHaveBeenCalledWith(productId, requestMock);
        expect(showToast).toHaveBeenCalledWith('success', 'Se ha Actualziado el producto con exito');
    });

    it('should handle errors gracefully', async () => {
        (putProducts as Mock).mockRejectedValue(new Error('Network Error'));

        await fetchUpdateProducts(productId, requestMock);

        expect(putProducts).toHaveBeenCalledWith(productId, requestMock);
        expect(showToast).not.toHaveBeenCalled(); // showToast should not be called on error
    });
});

describe('fetchDeleteProducts', () => {
    const productId = '1';

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should call deleteProducts and show success toast on success', async () => {
        (deleteProducts as Mock).mockResolvedValue({ status: true });

        await fetchDeleteProducts(productId);

        expect(deleteProducts).toHaveBeenCalledWith(productId);
        expect(showToast).toHaveBeenCalledWith('success', 'Se ha eliminado el producto con exito');
    });

    it('should handle errors gracefully', async () => {
        (deleteProducts as Mock).mockRejectedValue(new Error('Network Error'));

        await fetchDeleteProducts(productId);

        expect(deleteProducts).toHaveBeenCalledWith(productId);
        expect(showToast).not.toHaveBeenCalled(); // showToast should not be called on error
    });
});