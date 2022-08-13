import * as React from "react";
import { ToastContainer } from "react-toastify";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
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
