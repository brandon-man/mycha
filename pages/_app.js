import { ChakraProvider } from "@chakra-ui/react"
import { Global, css } from "@emotion/react";

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          ::selection {
            background-color: brown;
            color: #fefefe;
          }
          ::-moz-selection {
            background: brown;
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
    <ChakraProvider>
      <GlobalStyle>
      <Component {...pageProps} />
      </GlobalStyle>
    </ChakraProvider>
  )
}

export default MyApp