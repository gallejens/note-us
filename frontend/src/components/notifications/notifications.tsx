import { FC, useEffect, useState } from 'react';
import { Notification } from '@mantine/core';
import { v4 as uuidv4 } from 'uuid';

import { DEFAULT_MAX_NOTIFICATION_ITEMS } from './constants';

import classes from './styles/notifications.module.scss';

export const Notifications: FC<{ maxItems?: number }> = props => {
  const [notifications, setNotifications] = useState<
    ({ id: string } & Notifications.Notification)[]
  >([]);

  const maxItems = props.maxItems ?? DEFAULT_MAX_NOTIFICATION_ITEMS;

  useEffect(() => {
    const timeouts = new Set<number>();
    const handler = (e: CustomEventInit<Notifications.Event>) => {
      const eventData = e.detail;
      if (!eventData)
        throw new Error('No event data provided for notification event');
      switch (eventData.action) {
        case 'add': {
          const id = uuidv4();
          setNotifications(n => [...n, { id, ...eventData.notification }]);

          if (eventData.notification.autoClose) {
            const timeout = setTimeout(() => {
              timeouts.delete(timeout);
              setNotifications(n => n.filter(n => n.id !== id));
            }, eventData.notification.autoClose);
            timeouts.add(timeout);
          }
          break;
        }
        case 'clear':
          setNotifications([]);
          break;
        default:
          throw new Error(
            `Unknown notification event action: ${
              (eventData as { action: string }).action
            }`
          );
      }
    };
    window.addEventListener('notification', handler);
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
      window.removeEventListener('notification', handler);
    };
  }, []);

  const handleNotificationClose = (id: string) => {
    setNotifications(n => n.filter(n => n.id !== id));
  };

  if (notifications.length === 0) return null;

  return (
    <div className={classes.notifications}>
      {notifications.slice(0, maxItems).map(n => (
        <Notification
          key={n.id}
          color={n.color}
          icon={n.icon}
          title={n.title}
          loading={n.loading}
          withCloseButton={!n.hideCloseButton}
          onClose={() => {
            handleNotificationClose(n.id);
          }}
          closeButtonProps={{
            'aria-label': 'Hide notification',
          }}
          variant='outlined'
        >
          {n.message}
        </Notification>
      ))}
    </div>
  );
};
