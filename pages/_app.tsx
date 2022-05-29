import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Title from "../components/Title";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/cl39zv7no07cu01z2gjet3ce5/master",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Title />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  );
}

export default MyApp;
