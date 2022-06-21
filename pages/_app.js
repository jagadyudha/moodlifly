import Layout from "@/components/layout/layout";
import Router, { useRouter } from "next/router";
import nprogress from "nprogress";
import Sidebar from "@/components/layout/sidebar";

import "../styles/globals.css";
import "../styles/nprogress.css";

function MyApp({ Component, pageProps, ...appProps }) {
  const router = useRouter();

  // milik dashboard
  if (appProps.router.pathname.startsWith("/dashboard"))
    return (
      <Sidebar key={router.pathname}>
        <div>
          <Component {...pageProps} />{" "}
        </div>
      </Sidebar>
    );

  Router.events.on("routeChangeStart", nprogress.start);
  Router.events.on("routeChangeError", nprogress.done);
  Router.events.on("routeChangeComplete", nprogress.done);

  return (
    <Layout key={router.pathname}>
      <div className="mx-auto my-10 max-w-7xl px-6 sm:my-20 md:px-24 xl:px-0">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
