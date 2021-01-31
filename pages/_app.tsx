import Container from "../components/Container";
import "reflect-metadata";
import "../styles/globals.css";
import { Provider } from "next-auth/client";
function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </Provider>
  );
}

export default MyApp;
