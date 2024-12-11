"use client";

import { useEffect, useState } from "react";
import HelioCheckout from "../../components/HelioCheckoutVanilla";

export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  

  if (!isClient) return null;

  return (
    <div>
      <h1>Checkout Page</h1>
      <HelioCheckout />
    </div>
  );
}
