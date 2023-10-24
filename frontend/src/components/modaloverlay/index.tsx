import { FC } from 'react';

import classes from './styles/modaloverlay.module.scss';

export const ModalOverlay: FC = () => {
  const active = false;

  if (!active) return null;

  return <div className={classes.modaloverlay}></div>;
};
