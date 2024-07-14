import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.Fragment>
);
// pages/_app.js

import React from "react";
import App from "/App"; // Adjust path as needed
import { useRouter } from "next/router"; // Import useRouter for handling routes

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter(); // Use useRouter for routing in Next.js

  // You can handle global state, layouts, etc., here

  return (

    <React.Fragment>
      <App />
      <Component {...pageProps} />
    </React.Fragment>
   
  );
};

export default MyApp;
