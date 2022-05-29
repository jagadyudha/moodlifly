import Layout from "@/components/layout/layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="my-10 max-w-7xl mx-auto sm:my-20 xl:px-0">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
