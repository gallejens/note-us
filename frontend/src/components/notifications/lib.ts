const dispatchNotificationEvent = (eventData: Notifications.Event) => {
  const event = new CustomEvent<Notifications.Event>('notification', {
    detail: eventData,
  });
  window.dispatchEvent(event);
};

export const notifications = {
  add: (notification: Notifications.Notification) => {
    dispatchNotificationEvent({
      action: 'add',
      notification,
    });
  },
  clear: () => {
    dispatchNotificationEvent({
      action: 'clear',
    });
  },
};
