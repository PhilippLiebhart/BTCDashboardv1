import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


:root {
  --primary: #00adb5;
  --secondary: rgb(196, 196, 196);
  --dashBgDark:#393f48;
  --dashWidgetBgDark:  #222831;
  --dashWidgetBgDarker:  #1c2128;
  --dashHrLight: #2c3139;

  // --blue: #007bff;
  // --indigo: #6610f2;
  // --purple: #6f42c1;
  // --pink: #e83e8c;
  // --red: #dc3545;
  // --orange: #fd7e14;
  // --yellow: #ffc107;
  --green: #28a745;
  // --teal: #20c997;
  // --cyan: #17a2b8;
  // --white: #fff;
  // --gray: #6c757d;
  // --gray-dark: #343a40;
  --success: #28a745;
  // --info: #17a2b8;
  // --warning: #ffc107;
  --danger: #dc3545;
  // --light: #f8f9fa;
  // --dark: #343a40;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
}



/* SIDE NAV */
.sidenav---sidenav---_2tBP {
  background-color: rgba(57, 63, 72, 0.9);
  /* background: repeat url("/Users/philos/Documents/_REACT_PROJECT/_APPs/_ My Apps/BTC-Dashboard-v1/client/src/assets/img/logo.svg"); */
}



/* SCROLLBAR */
html {
  --scrollbarBG: #cfd8dc;
  --thumbBG: var(--secondary);

}

*::-webkit-scrollbar {
  width: 5px;
}
* {
  scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--body-bg);
  /* margin-right: 3px; */
}
*::-webkit-scrollbar-track {
  background: var(--body-bg);
}
*::-webkit-scrollbar-thumb {
  background-color: var(--thumbBG);
  border-radius: 6px;
  border: none;
}

/* UTILITY */

.hideItem {
  display: none !important;
}
.pm-0 {
  padding:0 !important;
  margin:0 !important;
}
.m-0 {
  margin:0 !important;

}
.p-1 {
  padding: 10px !important;
}

/* colors */
.primary {
  color: var(--primary)
}
.secondary {
  color: var(--secondary)
}
 /* TYPOGRAPHY */

.text-center {
  text-align: center !important;
}

.font-weight-light {font-weight:200 !important;}
.font-weight-normal {font-weight:400 !important;}
.font-weight-bold {font-weight:700 !important;}
.font-weight-bolder {font-weight:900 !important;}

p {
  margin-bottom: 1rem;
}

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.75rem;
}

h4 {
  font-size: 1.5rem;
}

h5 {
  font-size: 1.25rem;
}

h6 {
  font-size: 1rem;
}

a {
  color: var(--secondary);
  text-decoration: none;
}

/* LAYOUT ELEMENTS */

.widget--base {
  border-radius: 10px;
  text-align: left;
  
  background-color: var(--dashWidgetBgDarker);
  
  color: var(--primary);

  hr {
    opacity: 0.3;
  }
}
`;

export default GlobalStyle;
