// components/HelioCheckout.tsx

"use client";

import { useEffect } from "react";


export default function HelioCheckoutVanilla() {




  //TODO: Move to env variables
  const helioConfig = {
    paylinkId: "6750bcba8d6e36f94b3c8295",
  };

  useEffect(() => {

  

    const loadCheckout = () => {
      //@ts-ignore
      if (typeof window !== "undefined" && window.helioCheckout) {
        //@ts-ignore
        window.helioCheckout(
          document.getElementById("helioCheckoutContainer"),
          {
            paylinkId: helioConfig.paylinkId,
            theme: { themeMode: "dark" },
            network: "test",
            //@ts-ignore
            additionalJSON: { userId: "asdasdasd", test: "test" },
          }
        );
      }
    };

    const script = document.createElement("script");
    script.src = "https://embed.hel.io/assets/index-v1.js";
    script.type = "module";
    script.onload = loadCheckout;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* The container where Helio Checkout will be mounted */}
      <div id="helioCheckoutContainer"></div>
    </>
  );
}
