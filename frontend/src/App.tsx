import { FC } from 'react';
import { Button, MantineProvider } from '@mantine/core';
import { theme } from './theme';
import { Notifications, notifications } from './components/notifications';
import { ErrorBoundary } from 'react-error-boundary';
import { useColorScheme } from './hooks/useColorScheme';
import { RouterProvider } from '@tanstack/react-router'
import router from './router'

export const App: FC = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ ...theme, colorScheme }}
      >
        <Notifications maxItems={3} />
        <Button onClick={() => toggleColorScheme()}>Toggle Color Scheme</Button>
        <Button onClick={() => notifications.add({ message: 'Test' })}>Add Notif</Button>

        <RouterProvider router={router} />
      </MantineProvider>
    </ErrorBoundary>
  );
};
