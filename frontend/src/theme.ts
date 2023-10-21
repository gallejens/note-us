import {
  createTheme,
  DEFAULT_THEME,
  MantineThemeColors,
  mergeMantineTheme,
} from '@mantine/core';
import { DefaultMantineColor, MantineColorsTuple } from '@mantine/core';

type ExtendedCustomColors =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | DefaultMantineColor;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>;
  }
}

const COLORS = {
  primary: [
    '#EFFAFA',
    '#AFE8E4',
    '#7AD9D3',
    '#4ECDC4',
    '#32B1A8',
    '#288D86',
    '#20716B',
    '#1A5A56',
    '#144845',
    '#103A37',
  ],
  secondary: [
    '#56BFCF',
    '#36ACBF',
    '#2D8F9F',
    '#257884',
    '#1F646E',
    '#1A535C',
    '#15424A',
    '#11353B',
    '#0D2A2F',
    '#0B2226',
  ],
  tertiary: [
    '#FBE7E7',
    '#F8BEBE',
    '#F99595',
    '#FF6B6B',
    '#F65050',
    '#EA3B3B',
    '#DE2A2A',
    '#C52929',
    '#AA2C2C',
    '#932D2D',
  ],
  dark: [
    '#DBEDEC',
    '#BEE1DE',
    '#6ACEC7',
    '#3FBFB6', // Color of backgroundtext
    '#1A4950', // Color of borders
    '#1A4045',
    '#19383D', // Background color of input field for example
    '#193135', // Main background color of paper
    '#172B2E',
    '#162629',
  ],
} satisfies Partial<MantineThemeColors>;

const overrideTheme = createTheme({
  defaultRadius: 'sm',
  black: COLORS.dark[9],
  white: COLORS.dark[0],
  colors: COLORS,
  primaryColor: 'primary',
  primaryShade: 5,
  defaultGradient: {
    from: 'primary',
    to: 'secondary',
    deg: 80,
  },
});

export default mergeMantineTheme(DEFAULT_THEME, overrideTheme);
