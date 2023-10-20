import { FC } from 'react';
import { useLoadingOverlayStore } from './stores/useLoadingOverlayStore';
import classes from './styles/loadingoverlay.module.scss';
import { Loader } from '@mantine/core';

export const LoadingOverlay: FC = () => {
  const { visible } = useLoadingOverlayStore();

  if (!visible) return null;

  return (
    <div className={classes.loadingoverlay}>
      <Loader size='xl' type='dots' />
    </div>
  );
};
