import * as React from "react";
import "antd/dist/antd.css";
import { ToastContainer } from "react-toastify";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorHandler from "../components/ErrorHandler";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ErrorBoundary FallbackComponent={<ErrorHandler />}>
        <Component {...pageProps} />
      </ErrorBoundary>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default MyApp;
