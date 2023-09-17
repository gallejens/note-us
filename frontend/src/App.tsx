import { FC } from 'react';
import { MantineProvider, Button } from '@mantine/core';
import { theme } from './theme';
import { Notifications, notifications } from './components/notifications';
import { ErrorBoundary } from 'react-error-boundary';

export const App: FC = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <Notifications maxItems={3} />
        <div className='app'>
          <Button
            onClick={() => {
              notifications.add({
                message: new Date().toLocaleTimeString(),
                autoClose: 5000,
              });
            }}
          >
            Add Notification
          </Button>
          <Button
            onClick={() => {
              notifications.clear();
            }}
          >
            Clear Notifications
          </Button>
        </div>
      </MantineProvider>
    </ErrorBoundary>
  );
};
