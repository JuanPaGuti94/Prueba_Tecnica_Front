import { toast } from 'react-hot-toast';
import { Notification, NotificationType } from './notification.component';

export const showToast = (
  type: NotificationType,
  title: string,
  body?: string,
): void => {
  toast.custom((t) => (
    <Notification
      type={type}
      message={{ title, body }}
      onClose={() => toast.dismiss(t.id)}
    />
  ), {
    duration: 5000,
    position: 'top-right'
  });
};
