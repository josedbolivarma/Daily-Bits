import { createGlobalStyle } from "styled-components";
import Nunito from "./font";
const GlobalStyle = createGlobalStyle`

${Nunito}

:root {
  --color-white: #fffffe; 
  --color-black: #16161a; 
  --color-primary: #7f5af0; 
  --color-secondary: #a786df; 
  --color-tertiary: #72757e; 
  --color-green: #2cb67d; 
  --color-grey: #94a1b2; 
  --color-purple: #6b47dc; 
  --color-neutral: #232e35; 
  --color-red: #ef4565; 
  --subtitle2: 600 0.75rem/normal Nunito; 
  --headline-headline1: extrabold 1.5rem/normal Nunito; 
  --headline-headline2: 700 1.375rem/normal Nunito; 
  --subtitle-subtitle1: 600 1.125rem/normal Nunito; 
  --body1-regular: 400 1rem/1.5rem Nunito; 
  --body1-bold: 700 1rem/1.5rem Nunito; 
  --body2-regular: 400 0.875rem/normal Nunito; 
  --body2-bold: 700 0.875rem/normal Nunito; 
  --button-button: 600 0.875rem/1rem Nunito; 
  --caption-caption: 400 0.6875rem/normal Nunito;   
}

body {
  margin: unset;
  padding: unset;
  color: var(--color-white);
  background-color: var(--color-black);
  font: var(--body1-regular);
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
html {
  min-height: 100%;
  position: relative;
}
body {
  margin: unset;
  padding: unset;
  background-color: var(--color-black);
  font-family: "Nunito", sans-serif;
  color: var(--color-white);
}

.option-select-default {
  border: 2px solid var(--color-white);
}

.option-select-success {
  border: 2px solid var(--color-green) !important;
}
.option-select-failed {
  border: 2px solid var(--color-red) !important;
}

.radio-default {
  background-image: url("../assets/svg/check-default.svg");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 50%;
}
.radio-success {
  background-image: url("../assets/svg/check-success.svg");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 50%;
}
.radio-failed {
  background-image: url("../assets/svg/check-failed.svg");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 50%;
}
.show {
  display: flex !important;
  bottom: 0px !important;
  z-index: 1 !important;
}

.large {
  width: 156px;
  height: 40px;
}
.mid {
  width: 136px;
  height: 40px;
}
.small {
  width: 68px;
  height: 40px;
}
`;

export default GlobalStyle;