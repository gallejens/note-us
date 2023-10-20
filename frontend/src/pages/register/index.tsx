import {
  Button,
  Divider,
  Paper,
  PasswordInput,
  TextInput,
  Title,
  Text,
} from '@mantine/core';
import { FC } from 'react';
import classes from './styles/register.module.scss';
import { useForm } from '@mantine/form';
import { validatePassword } from '../../helpers/password';
import { useNavigate } from '@tanstack/react-router';
import { useLoadingOverlayStore } from '../../components/loadingoverlay/stores/useLoadingOverlayStore';

type FormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const RegisterPage: FC = () => {
  const navigate = useNavigate();
  const { setLoadingOverlayVisible } = useLoadingOverlayStore();

  const form = useForm<FormValues>({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: {
      email: value =>
        !value || EMAIL_REGEX.test(value) ? null : 'Invalid Mail',
      password: value =>
        !value || validatePassword(value).validated ? null : 'Invalid Password',
      confirmPassword: (value, values) =>
        value === values.password ? null : 'Passwords do not match',
    },
    validateInputOnChange: true,
    validateInputOnBlur: true,
  });

  const handleSubmit = async (values: FormValues) => {
    const validation = validatePassword(values.password);
    if (!validation.validated) return;

    if (values.password !== values.confirmPassword) return;

    setLoadingOverlayVisible(true);
    // await SIGNUP_FUNCTION(auth, values.email, values.password);
    setLoadingOverlayVisible(false);
    navigate({ to: '/' });
  };

  // TODO: Show missing password requirements when registering

  return (
    <div className={classes.register_modal}>
      <Paper>
        <Title>Register</Title>
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
          {
            <PasswordInput
              withAsterisk
              label='Confirm Password'
              placeholder='**********'
              {...form.getInputProps('confirmPassword')}
            />
          }
          <Button type='submit' fullWidth variant='gradient'>
            Register
          </Button>
          <Text>
            Already have an account?&nbsp;
            <Text
              span
              onClick={() => navigate({ to: '/login' })}
              className={classes.login_button}
            >
              Log in instead
            </Text>
          </Text>
        </form>
      </Paper>
    </div>
  );
};
