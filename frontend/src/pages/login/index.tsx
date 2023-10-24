import { FC } from 'react';
import {
  Button,
  Checkbox,
  Divider,
  PasswordInput,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigate } from '@tanstack/react-router';

import { useLoadingOverlayStore } from '../../components/loadingoverlay/stores/useLoadingOverlayStore';

import classes from './styles/login.module.scss';
import { EMAIL_VALIDATE_REGEX } from './constants';
import { validatePassword } from '../../helpers/password';

type LoginFormValues = {
  email: string;
  password: string;
  remember: boolean;
};

type SignupFormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const LoginPage: FC = () => {
  const navigate = useNavigate();
  const { setLoadingOverlayVisible } = useLoadingOverlayStore();

  const loginForm = useForm<LoginFormValues>({
    initialValues: {
      email: '',
      password: '',
      remember: false,
    },
    validate: {
      email: value => (!value ? 'Invalid Mail' : null),
      password: value => (!value ? 'Invalid Password' : null),
    },
  });

  const signupForm = useForm<SignupFormValues>({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: {
      email: value =>
        !value || EMAIL_VALIDATE_REGEX.test(value) ? null : 'Invalid Mail',
      password: value =>
        !value || validatePassword(value).validated ? null : 'Invalid Password',
      confirmPassword: (value, values) =>
        value === values.password ? null : 'Passwords do not match',
    },
    validateInputOnChange: true,
    validateInputOnBlur: true,
  });

  const handleLoginSubmit = async (_values: LoginFormValues) => {
    setLoadingOverlayVisible(true);
    // await LOGIN_FUNCTION(auth, values.email, values.password);
    setLoadingOverlayVisible(false);
    navigate({ to: '/' });
  };

  const handleSignupSubmit = async (values: SignupFormValues) => {
    const validation = validatePassword(values.password);
    if (!validation.validated) return;

    if (values.password !== values.confirmPassword) return;

    setLoadingOverlayVisible(true);
    // await SIGNUP_FUNCTION(auth, values.email, values.password);
    setLoadingOverlayVisible(false);
    navigate({ to: '/' });
  };

  return (
    <div className={classes.login_page}>
      <div className={`${classes.wrapper} shadow`}>
        <div>
          <form onSubmit={loginForm.onSubmit(handleLoginSubmit)}>
            <Title>Log In</Title>
            <Divider style={{ margin: '1vh 0' }} />
            <TextInput
              withAsterisk
              label='Email'
              placeholder='hello@email.com'
              {...loginForm.getInputProps('email')}
            />
            <PasswordInput
              withAsterisk
              label='Password'
              placeholder='**********'
              {...loginForm.getInputProps('password')}
            />
            <Checkbox
              {...loginForm.getInputProps('remember')}
              label='Keep me logged in'
            />
            <Button type='submit' fullWidth variant='gradient'>
              Log In
            </Button>
          </form>
        </div>
        <div>
          <form onSubmit={signupForm.onSubmit(handleSignupSubmit)}>
            <Title>Register</Title>
            <Divider style={{ margin: '1vh 0' }} />
            <TextInput
              withAsterisk
              label='Email'
              placeholder='hello@email.com'
              {...signupForm.getInputProps('email')}
            />
            <PasswordInput
              withAsterisk
              label='Password'
              placeholder='**********'
              {...signupForm.getInputProps('password')}
            />
            {
              <PasswordInput
                withAsterisk
                label='Confirm Password'
                placeholder='**********'
                {...signupForm.getInputProps('confirmPassword')}
              />
            }
            <Button type='submit' fullWidth variant='gradient'>
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
