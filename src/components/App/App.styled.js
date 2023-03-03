import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

ul,
ol {
  padding: 0;
}

h1,
h2,
h3,
h4,
p,
ul,
ol,
li,
dl,
dd {
  margin: 0;
}

* {
    font-family: 'Montserrat';
    font-style: normal;
}
`;
