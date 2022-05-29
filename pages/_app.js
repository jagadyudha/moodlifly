import Layout from "@/components/layout/layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="mx-auto my-10 max-w-7xl px-6 sm:my-20 md:px-24 xl:px-0">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
