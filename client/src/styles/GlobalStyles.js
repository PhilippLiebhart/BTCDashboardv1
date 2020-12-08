import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,900;1,100;1,200;1,300;1,400;1,500;1,900&display=swap");


:root {
  --primary: #00adb5;
  --secondary: rgb(196, 196, 196);
  --dashBgDark:#393f48;
  --dashWidgetBgDark:  #222831;
  --dashHrLight: #2c3139;

  // --blue: #007bff;
  // --indigo: #6610f2;
  // --purple: #6f42c1;
  // --pink: #e83e8c;
  // --red: #dc3545;
  // --orange: #fd7e14;
  // --yellow: #ffc107;
  // --green: #28a745;
  // --teal: #20c997;
  // --cyan: #17a2b8;
  // --white: #fff;
  // --gray: #6c757d;
  // --gray-dark: #343a40;
  // --success: #28a745;
  // --info: #17a2b8;
  // --warning: #ffc107;
  // --danger: #dc3545;
  // --light: #f8f9fa;
  // --dark: #343a40;
  // --breakpoint-xs: 0;
  // --breakpoint-sm: 576px;
  // --breakpoint-md: 768px;
  // --breakpoint-lg: 992px;
  // --breakpoint-xl: 1200px;
}

/* 200;0,300;0,400;0,500;0,600;0,900;1,100;1,200;1,300;1,400;1,500;1,900 */
 /* FONTS */
 
 .--light {
   font-weight: 200;
 }

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;

  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  background-color: var(--dashBgDark)
}

/* SCROLLBAR */
html {
  --scrollbarBG: #cfd8dc;
  --thumbBG: #90a4ae;
}
*::-webkit-scrollbar {
  width: 11px;
}
* {
  scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--body-bg);
}
*::-webkit-scrollbar-track {
  background: var(--body-bg);
}
*::-webkit-scrollbar-thumb {
  background-color: var(--thumbBG);
  border-radius: 6px;
  border: 3px solid var(--dashBgDark);
}

`;

export default GlobalStyle;
