import * as React from "react";
import { AppProps, AppContext } from "next/app";

// Store
import { wrapper } from "../redux/store";

// Components
import Layout from "../components/Layout";


type GetInitialProps = (context: AppContext) => unknown;

const WrappedApp: React.FC<AppProps> & { getInitialProps: GetInitialProps } = ({
  Component,
  pageProps,
}) => (
  <Layout>
    <Component {...pageProps} />{" "}
  </Layout>
);

// Acá puede llamar data cada vez que se hace el build de la applicacion, es decir, puede llamar data una vez para toda la app, si lo necesita me avisa,
// o si necesita data cada vez que cambie de página también lo puede hacer, todo esto desde el server, así le llega cargada al momento de renderizar
// o la puede llamar desde el client side (más fácil) como le dejé de ejemplo
WrappedApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  return {
    pageProps: {
      // Call page-level getInitialProps
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
      // Some custom thing for all pages
      pathname: ctx.pathname,
    },
  };
};

export default wrapper.withRedux(WrappedApp);
