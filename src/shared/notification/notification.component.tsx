import { FC } from 'react';

export type NotificationType = 'success' | 'warning' | 'danger';

type NotificationProps = {
  type: NotificationType;
  message: {
    title: string;
    body?: string;
  };
  onClose: () => void;
};

export const Notification: FC<NotificationProps> = ({
  type,
  message,
  onClose,
}) => {
  const getStyles = (
    type: NotificationType,
  ): {
    backgroundColor: string;
    textColor: string;
    icon: JSX.Element | null;
  } => {
    switch (type) {
      case 'success':
        return {
          backgroundColor: '#3C6090',
          textColor: '#ffffff',
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z"
                fill="white"
              />
            </svg>
          ),
        };
      case 'warning':
        return {
          backgroundColor: '#b12c2c',
          textColor: '#000000',
          icon: null,
        };
      case 'danger':
        return {
          backgroundColor: '#b12c2c',
          textColor: '#ffffff',
          icon: null,
        };
      default:
        return {
          backgroundColor: '#3C6090',
          textColor: '#ffffff',
          icon: null,
        };
    }
  };

  const { backgroundColor, textColor, icon } = getStyles(type);

  return (
    <div
      className={`flex w-[400px] items-center gap-3 px-[12px] py-[12px] relative rounded-lg overflow-hidden`}
      style={{ backgroundColor }}
    >
{      type === 'success' &&<div className="flex items-center justify-center w-8 h-8 rounded-full">
        {icon}
      </div>}
      <div className="flex flex-col items-start relative flex-1 grow">
        <p
          className="relative self-stretch mt-[-1.00px] font-bold font-Lato-Regular text-[16px]"
          style={{ color: textColor }}
        >
          {message.title}
        </p>
        {!!message.body?.length && (
          <p className="relative self-stretch" style={{ color: textColor }}>
            {message.body}
          </p>
        )}
      </div>
      <button
        className="relative w-5 h-5 cursor-pointer opacity-50"
        onClick={onClose}
        style={{ color: textColor }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M13.3811 12.0483C13.7621 12.4292 13.7621 13.0007 13.3811 13.3816C13.1906 13.5721 13.0002 13.6673 12.7144 13.6673C12.4287 13.6673 12.2383 13.5721 12.0478 13.3816L7.00016 8.33398L1.95254 13.3816C1.76207 13.5721 1.57159 13.6673 1.28588 13.6673C1.00016 13.6673 0.809687 13.5721 0.61921 13.3816C0.238258 13.0007 0.238258 12.4292 0.61921 12.0483L5.66683 7.00065L0.61921 1.95303C0.238258 1.57208 0.238258 1.00065 0.61921 0.619699C1.00016 0.238746 1.57159 0.238746 1.95254 0.619699L7.00016 5.66732L12.0478 0.619699C12.4287 0.238746 13.0002 0.238746 13.3811 0.619699C13.7621 1.00065 13.7621 1.57208 13.3811 1.95303L8.3335 7.00065L13.3811 12.0483Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};
