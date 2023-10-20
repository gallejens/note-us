import { FC } from 'react';
import classes from './styles/background.module.scss';
import { Paper } from '@mantine/core';

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
