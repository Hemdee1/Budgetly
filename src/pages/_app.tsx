import Alert from "@/components/alert";
import AuthHeader from "@/components/authHeader";
import DesktopIcon from "@/icons/desktop";
import useUserStore from "@/store/user";
import "@/styles/globals.css";
import { API } from "@/utils/api";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { user, setUser } = useUserStore();
  // const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // let browserWidth = window.innerWidth;

    // if (browserWidth < 1200) {
    //   return setIsSmallScreen(true);
    // }

    const autoLogin = async () => {
      const res = await API.get("/user/autologin");

      if (res.data) {
        setUser(res.data);
      } else {
        setUser(undefined);
        console.log(res.error);
      }
    };

    autoLogin();
  }, [setUser]);

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>Budgetly - Track your expenses</title>
        <meta
          name="description"
          content="Track your expenses, get AI-generated categories, earn points for recording expenses, and stay consistent with streaks."
        />
        <meta
          name="keywords"
          content="expense tracking, budgeting app, AI-generated categories, financial management, streak rewards, financial education, expense reports"
        />
        <meta name="author" content="Budgetly" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon.png"
        />

        {/* Open Graph Meta Tags (for social media previews) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Budgetly - Track your expenses" />
        <meta
          property="og:description"
          content="Track your expenses, get AI-generated categories, earn points for recording expenses, and stay consistent with streaks."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dgdf3kemb/image/upload/v1728016216/budgetease/thumbnail_msepvf.png"
        />
        <meta property="og:url" content="https://www.budgetly.me" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Budgetly" />

        {/* Twitter Meta Tags (for Twitter cards) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Budgetly - Track your expenses" />
        <meta
          name="twitter:description"
          content="Track your expenses, get AI-generated categories, earn points for recording expenses, and stay consistent with streaks."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dgdf3kemb/image/upload/v1728016216/budgetease/thumbnail_msepvf.png"
        />
        <meta name="twitter:site" content="@trybudgetly" />

        {/* Robots and Googlebot Indexing */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* Canonical URL for SEO */}
        <link rel="canonical" href="https://www.budgetly.me" />

        {/* Additional Security and Performance Meta Tags */}
        {/* <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; img-src https:; script-src 'self' 'unsafe-inline' https://apis.google.com"
        /> */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Alert />
      <Component {...pageProps} />
    </>
  );

  // return isSmallScreen ? (
  //   <>
  //     <AuthHeader />
  //     <div className="h-[90vh] text-center px-10 flex justify-center items-center flex-col gap-3">
  //       <DesktopIcon />
  //       <h1 className="font-bold text-xl">Optimized for Desktop</h1>
  //       <h4 className="px-3">
  //         Kindly open on laptops and big screens to view the product
  //       </h4>
  //     </div>
  //   </>
  // ) : (
  //   <>
  //     <Alert />
  //     <Component {...pageProps} />
  //   </>
  // );
}
