import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import store from "../redux/store"; //Importing redux store

import theme from "../styles/theme";

import "@fontsource/raleway";
import "@fontsource/asap";

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          ::selection {
            background-color: green;
            color: #fefefe;
          }
          ::-moz-selection {
            background: green;
            color: #fefefe;
          }
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Provider store={store}>
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
