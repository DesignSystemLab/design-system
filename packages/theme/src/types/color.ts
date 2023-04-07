type HEX = `#${string}`;

interface UniqueColorScheme {
  100: HEX;
  200: HEX;
  300: HEX;
  400: HEX;
  500: HEX;
  600: HEX;
  700: HEX;
  800: HEX;
  900: HEX;
}

interface BaseColorScheme {
  base: HEX;
  lighten1: HEX;
  lighten2: HEX;
  lighten3: HEX;
  lighten4: HEX;
  lighten5: HEX;
  darken1: HEX;
  darken2: HEX;
  darken3: HEX;
  darken4: HEX;
}

interface AccentColorScheme extends BaseColorScheme {
  accent1: HEX;
  accent2: HEX;
  accent3: HEX;
  accent4: HEX;
}

type ShadesColorSchme = {
  black: HEX;
  white: HEX;
  transparent: 'transparent';
};

type UniquePallete = 'primary' | 'secondary';

type StatusPallete = 'success' | 'info' | 'warning' | 'error' | 'disabled';

type ExtendedPalette =
  | 'red'
  | 'pink'
  | 'purple'
  | 'deepPurple'
  | 'indigo'
  | 'blue'
  | 'blue'
  | 'lightBlue'
  | 'cyan'
  | 'teal'
  | 'green'
  | 'lightGreen'
  | 'lime'
  | 'yellow'
  | 'amber'
  | 'orange'
  | 'deepOrange';
type CommonPalette = 'brown' | 'blueGrey' | 'grey';
type ShadesPalette = 'shades';

type ColorToken =
  | `${StatusPallete}`
  | `${UniquePallete}-${keyof UniqueColorScheme}`
  | `${ExtendedPalette}-${keyof AccentColorScheme}`
  | `${CommonPalette}-${keyof BaseColorScheme}`
  | `${ShadesPalette}-${keyof ShadesColorSchme}`;

type Color = {
  [key: string]: any;
  primary: Readonly<UniqueColorScheme>;
  secondary: Readonly<UniqueColorScheme>;
  red: Readonly<AccentColorScheme>;
  pink: Readonly<AccentColorScheme>;
  purple: Readonly<AccentColorScheme>;
  deepPurple: Readonly<AccentColorScheme>;
  indigo: Readonly<AccentColorScheme>;
  blue: Readonly<AccentColorScheme>;
  lightBlue: Readonly<AccentColorScheme>;
  cyan: Readonly<AccentColorScheme>;
  teal: Readonly<AccentColorScheme>;
  green: Readonly<AccentColorScheme>;
  lightGreen: Readonly<AccentColorScheme>;
  lime: Readonly<AccentColorScheme>;
  yellow: Readonly<AccentColorScheme>;
  amber: Readonly<AccentColorScheme>;
  orange: Readonly<AccentColorScheme>;
  deepOrange: Readonly<AccentColorScheme>;
  brown: Readonly<BaseColorScheme>;
  blueGrey: Readonly<BaseColorScheme>;
  grey: Readonly<BaseColorScheme>;
  shades: Readonly<ShadesColorSchme>;
  success: HEX;
  info: HEX;
  warning: HEX;
  error: HEX;
};

export type { HEX, ColorToken, Color };
