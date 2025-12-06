import localFont from "next/font/local";

export const generalSans = localFont({
  src: [
    { path: "./fonts/GeneralSans-Regular.woff", weight: "400", style: "normal" },
    { path: "./fonts/GeneralSans-Medium.woff", weight: "500", style: "normal" },
    { path: "./fonts/GeneralSans-Semibold.woff", weight: "600", style: "normal" },
    { path: "./fonts/GeneralSans-Bold.woff", weight: "700", style: "normal" },
  ],
  variable: "--font-general-sans",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "sans-serif"],
  preload: true,
});
