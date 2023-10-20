import { FC } from 'react';
import { MantineProvider } from '@mantine/core';
import theme from './theme';
import { Notifications } from './components/notifications';
import { LoadingOverlay } from './components/loadingoverlay';
import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from '@tanstack/react-router';
import { ModalOverlay } from './components/modaloverlay';
import router from './router';
import '@mantine/core/styles.css';

export const App: FC = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <MantineProvider theme={theme} defaultColorScheme='dark'>
        <LoadingOverlay />
        <ModalOverlay />
        <Notifications maxItems={3} />
        <RouterProvider router={router} />
      </MantineProvider>
    </ErrorBoundary>
  );
};

