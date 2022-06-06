import Layout from "@/components/layout/layout";
import { useRouter } from "next/router";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout key={router.pathname}>
      <div className="mx-auto my-10 max-w-7xl px-6 sm:my-20 md:px-24 xl:px-0">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
