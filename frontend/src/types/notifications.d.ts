namespace Notifications {
  type Notification = {
    color?: string;
    icon?: React.ReactNode;
    title?: string;
    message: string;
    loading?: boolean;
    hideCloseButton?: boolean;
    autoClose?: number;
  };

  type Event =
    | {
        action: 'add';
        notification: Notification;
      }
    | {
        action: 'clear';
      };
}
