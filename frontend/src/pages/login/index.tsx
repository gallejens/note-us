import { FC } from 'react';
import {
  Button,
  Checkbox,
  Divider,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigate } from '@tanstack/react-router';

import { useLoadingOverlayStore } from '../../components/loadingoverlay/stores/useLoadingOverlayStore';

import classes from './styles/login.module.scss';

type FormValues = {
  email: string;
  password: string;
  remember: boolean;
};

export const LoginPage: FC = () => {
  const navigate = useNavigate();
  const { setLoadingOverlayVisible } = useLoadingOverlayStore();

  const form = useForm<FormValues>({
    initialValues: {
      email: '',
      password: '',
      remember: false,
    },
    validate: {
      email: value => (!value ? 'Invalid Mail' : null),
      password: value => (!value ? 'Invalid Password' : null),
    },
    validateInputOnChange: true,
    validateInputOnBlur: true,
  });

  const handleSubmit = async (_values: FormValues) => {
    setLoadingOverlayVisible(true);
    // await LOGIN_FUNCTION(auth, values.email, values.password);
    setLoadingOverlayVisible(false);
    navigate({ to: '/' });
  };

  return (
    <div className={classes.login_modal}>
      <Paper>
        <Title>Log In</Title>
        <Divider style={{ margin: '1vh 0' }} />
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            withAsterisk
            label='Email'
            placeholder='hello@email.com'
            {...form.getInputProps('email')}
          />
          <PasswordInput
            withAsterisk
            label='Password'
            placeholder='**********'
            {...form.getInputProps('password')}
          />
          <Checkbox
            {...form.getInputProps('remember')}
            label='Keep me logged in'
          />
          <Button type='submit' fullWidth variant='gradient'>
            Log In
          </Button>
          <Text>
            Don't have an account?&nbsp;
            <Text
              span
              onClick={() => navigate({ to: '/register' })}
              className={classes.register_button}
            >
              Register now
            </Text>
          </Text>
        </form>
      </Paper>
    </div>
  );
};
