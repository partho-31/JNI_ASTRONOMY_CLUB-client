"use client"

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    //   easing: "ease-out-cubic",
    })

    //  IMPORTANT for Server Components
    AOS.refresh()
  }, [])

  return null
}
