"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// optional config
NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
});

export default function RouteLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.start();

    const timer = setTimeout(() => {
      NProgress.done();
    }, 300); // smooth finish

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return null;
}
