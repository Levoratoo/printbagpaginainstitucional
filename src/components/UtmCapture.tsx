import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { mergeMarketingParamsFromSearch } from "@/lib/utmCapture";

/** Corre dentro do Router: grava UTMs / clids da URL em sessionStorage. */
export function UtmCapture() {
  const location = useLocation();

  useEffect(() => {
    mergeMarketingParamsFromSearch(location.search || "");
  }, [location.pathname, location.search]);

  return null;
}
