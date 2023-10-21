import { FC } from 'react';
import { Paper } from '@mantine/core';

import classes from './styles/background.module.scss';

export const Background: FC<{ width: string; heigth: string }> = props => {
  return (
    <Paper
      className={classes.background}
      style={{ width: props.width, height: props.heigth }}
    >
      <img src='/background_gradiant.svg'></img>
    </Paper>
  );
};
