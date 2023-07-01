import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`${() => css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  html,
  body,
  #root {
    height: 100%;
  }

  body {
    position: relative;
    overflow-y: scroll; // blocking vertical scrolling when opening any modal window
    font-size: 16px;
    background-color: #fff;
    margin: 0;
    padding: 0;
    font-feature-settings: 'liga', 'kern';
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    z-index: 1;
    width: 100%;
  }

  body,
  * {
    font-family: Inter, sans-serif;
    margin: 0;
    padding: 0;
    scrollbar-width: none;
    -webkit-tap-highlight-color: transparent;
    outline: none;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  li,
  ol {
    list-style: none;
  }

  #__next {
    min-height: 100%;
    //position: relative;
    //overflow: scroll;
  }

  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  /* Optional: show position indicator in red */
`}
`
