/**
 * A place for collecting and simplifying the color values used.
 *
 * Keys match css vars specified in `/styles/global.css` and `/styles/dept.css`.
*/
export const colors = {
  blue: "#0078d0",
  green: "#a4d037",
  yellow: "#fecd35",
  red: "#f05230",
  darkgrey: "#15171A",
  darkmidgrey: "#303a3e",
  midgrey: "#738a94",
  lightgrey: "#c5d2d9",
  whitegrey: "#e5eff5",
  pink: "#fa3a57",
  brown: "#a3821a",
  white: "#fff",
  black: "#000",
  // dept colors
  gray: "#646464",
  onyx: "#121212",
  platinum: "#F2F2F2",
  purple: "#5115F7",
  bluedark: "#011627",
}

export type Colors =  keyof typeof colors
