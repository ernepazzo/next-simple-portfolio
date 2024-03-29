import classNames from "classnames";
import { useRouter } from "next/router";
import nProgress from "nprogress";
import { useEffect } from "react";
import Navbar from "./Navbar";

const Layout = ({ children, title, footer = true, dark = false }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      nProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => nProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <div className={classNames({ "bg-dark": dark, 'bg-light': !dark })}>
      <Navbar />
      <main className="container py-4">
        {title && (
          <h1 className={classNames("text-center", { "text-light": dark })}>
            {title}
          </h1>
        )}
        {children}
      </main>

      {footer && (
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h1>&copy; Ryan Ray Portfolio</h1>
            <p>2000 - {new Date().getFullYear()}</p>
            <p>All rights Reserverd.</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
