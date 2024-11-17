import { vi, it, expect, describe, Mock } from 'vitest';
import { toast } from 'react-hot-toast';
import { showToast } from '../../../src/shared/notification/toast.component';
import { NotificationType } from '../../../src/shared/notification/notification.component';


vi.mock('react-hot-toast', () => ({
  toast: {
    custom: vi.fn(),
    dismiss: vi.fn(),
  },
}));

describe('showToast', () => {
  it('should call toast.custom with correct parameters', () => {
    const type: NotificationType = 'success';
    const title = 'Test Title';
    const body = 'Test Body';

    showToast(type, title, body);

    expect(toast.custom).toHaveBeenCalledWith(expect.any(Function), {
      duration: 5000,
      position: 'top-right',
    });

    const customToastCallback = (toast.custom as Mock).mock.calls[0][0];
    const mockToast = { id: 'test-id', visible: true };

    const component = customToastCallback(mockToast);

    expect(component.props.type).toBe(type);
    expect(component.props.message).toEqual({ title, body });

    component.props.onClose();
    expect(toast.dismiss).toHaveBeenCalledWith(mockToast.id);
  });
});