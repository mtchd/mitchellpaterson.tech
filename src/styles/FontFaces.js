import { createGlobalStyle } from 'styled-components'

const FontFaces = createGlobalStyle`
/* cyrillic-ext */
@font-face {
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 700;
  src: local('Merriweather Bold'), local('Merriweather-Bold'), url(https://fonts.gstatic.com/s/merriweather/v19/u-4n0qyriQwlOrhSvowK_l52xwNZVcf6hPvhPUWH.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  font-display: swap;
}

/* cyrillic */
@font-face {
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 700;
  src: local('Merriweather Bold'), local('Merriweather-Bold'), url(https://fonts.gstatic.com/s/merriweather/v19/u-4n0qyriQwlOrhSvowK_l52xwNZXMf6hPvhPUWH.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  font-display: swap;
}

/* vietnamese */
@font-face {
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 700;
  src: local('Merriweather Bold'), local('Merriweather-Bold'), url(https://fonts.gstatic.com/s/merriweather/v19/u-4n0qyriQwlOrhSvowK_l52xwNZV8f6hPvhPUWH.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
  font-display: swap;
}

/* latin-ext */
@font-face {
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 700;
  src: local('Merriweather Bold'), local('Merriweather-Bold'), url(https://fonts.gstatic.com/s/merriweather/v19/u-4n0qyriQwlOrhSvowK_l52xwNZVsf6hPvhPUWH.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  font-display: swap;
}

/* latin */
@font-face {
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 700;
  src: local('Merriweather Bold'), local('Merriweather-Bold'), url(https://fonts.gstatic.com/s/merriweather/v19/u-4n0qyriQwlOrhSvowK_l52xwNZWMf6hPvhPQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  font-display: swap;
}

/* vietnamese */
@font-face {
  font-family: 'Muli';
  font-style: normal;
  font-weight: 400;
  src: local('Muli Regular'), local('Muli-Regular'), url(https://fonts.gstatic.com/s/muli/v12/7Auwp_0qiz-afT3GLQjUwkQ1OQ.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
  font-display: swap;
}

/* latin-ext */
@font-face {
  font-family: 'Muli';
  font-style: normal;
  font-weight: 400;
  src: local('Muli Regular'), local('Muli-Regular'), url(https://fonts.gstatic.com/s/muli/v12/7Auwp_0qiz-afTzGLQjUwkQ1OQ.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  font-display: swap;
}

/* latin */
@font-face {
  font-family: 'Muli';
  font-style: normal;
  font-weight: 400;
  src: local('Muli Regular'), local('Muli-Regular'), url(https://fonts.gstatic.com/s/muli/v12/7Auwp_0qiz-afTLGLQjUwkQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  font-display: swap;
}

/* vietnamese */
@font-face {
  font-family: 'Muli';
  font-style: normal;
  font-weight: 700;
  src: local('Muli Bold'), local('Muli-Bold'), url(https://fonts.gstatic.com/s/muli/v12/7Au_p_0qiz-adYnjOCr2z24PMFk-0g.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
  font-display: swap;
}

/* latin-ext */
@font-face {
  font-family: 'Muli';
  font-style: normal;
  font-weight: 700;
  src: local('Muli Bold'), local('Muli-Bold'), url(https://fonts.gstatic.com/s/muli/v12/7Au_p_0qiz-adYnjOCv2z24PMFk-0g.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  font-display: swap;
}

/* latin */
@font-face {
  font-family: 'Muli';
  font-style: normal;
  font-weight: 700;
  src: local('Muli Bold'), local('Muli-Bold'), url(https://fonts.gstatic.com/s/muli/v12/7Au_p_0qiz-adYnjOCX2z24PMFk.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  font-display: swap;
}
`

export default FontFaces