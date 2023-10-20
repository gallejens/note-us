const MINIMUM_PASSWORD_LENGTH = 8;

type PasswordRequirement = 'length' | 'noSpaces' | 'hasNumber';

const REQUIREMENTS: Record<
  PasswordRequirement,
  { validator: (password: string) => boolean }
> = {
  length: {
    validator: (password: string) => password.length >= MINIMUM_PASSWORD_LENGTH,
  },
  noSpaces: {
    validator: (password: string) => !password.includes(' '),
  },
  hasNumber: {
    validator: (password: string) => /\d/.test(password),
  },
};

export const validatePassword = (password: string) => {
  const requirements = {} as Record<PasswordRequirement, boolean>;
  let validated = true;

  for (const [reqKey, { validator }] of Object.entries(REQUIREMENTS)) {
    const validForRequirement = validator(password);
    requirements[reqKey as PasswordRequirement] = validForRequirement;
    validated &&= validForRequirement;
  }

  return {
    validated,
    requirements,
  };
};
