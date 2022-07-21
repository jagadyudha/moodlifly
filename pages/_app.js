import React, { useContext } from "react";
import Layout from "@/components/layout/layout";
import Router, { useRouter } from "next/router";
import nprogress from "nprogress";
import Sidebar from "@/components/layout/sidebar";
import toast, { Toaster } from "react-hot-toast";
import "../styles/globals.css";
import "../styles/nprogress.css";
import { AuthProvider } from "context/auth";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps, ...appProps }) {
  const router = useRouter();

  //isr
  const [isSSR, setIsSSR] = React.useState(true);

  React.useEffect(() => {
    setIsSSR(false);
  }, []);

  Router.events.on("routeChangeStart", nprogress.start);
  Router.events.on("routeChangeError", nprogress.done);
  Router.events.on("routeChangeComplete", nprogress.done);

  // milik dashboard
  if (appProps.router.pathname.startsWith("/dashboard"))
    return (
      <Sidebar key={router.pathname}>
        <div>
          <Component {...pageProps} />{" "}
        </div>
      </Sidebar>
    );

  return (
    <>
      {!isSSR && (
        <AuthProvider>
          <DefaultSeo
            openGraph={{
              type: "website",
              locale: "id_ID",
              url: `https://moodlify.vercel.app`,
              site_name: "Moodlify",
              title: "Moodlify - Test Gangguan Kecemasan Gratis",
              description:
                "Moodlify adalah tes gangguan kecemasan online gratis yang menentukan apakah Anda menderita gangguan kecemasan umum, gangguan panik, gangguan kecemasan sosial, atau jenis gangguan kecemasan lainnya.",
              images: [
                {
                  url: "https://og.tailgraph.com/og?fontFamily=Poppins&title=Moodlify&titleTailwind=font-bold%20text-6xl%20text-green-600&text=Tes%20Gangguan%20Kecemasan%20Gratis&textTailwind=text-gray-700%20text-2xl%20mt-4&logoTailwind=h-8&bgTailwind=bg-white&footer=moodlify.vercel.app&footerTailwind=text-teal-600&t=1658412818101&refresh=1",
                  width: 1200,
                  height: 630,
                  alt: "Moodlify",
                  type: "image/jpeg",
                },
              ],
            }}
            twitter={{
              handle: "@handle",
              site: "@site",
              cardType: "summary_large_image",
            }}
            canonical={`https://moodlify.vercel.app${appProps.router.pathname}`}
          />
          <Layout key={router.pathname}>
            <div className="mx-auto my-10 max-w-7xl px-6 sm:my-20 md:px-24 xl:px-0">
              <Toaster />
              <Component {...pageProps} />
            </div>
          </Layout>
        </AuthProvider>
      )}
    </>
  );
}

export default MyApp;
