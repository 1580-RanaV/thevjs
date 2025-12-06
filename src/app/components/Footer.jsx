"use client";

import React, { useEffect, useState } from "react";

const Footer = () => {
  const [now, setNow] = useState(null);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const formatted =
    now &&
    new Intl.DateTimeFormat(undefined, {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(now);

  return (
    <footer className="mt-16 py-10 px-4 text-neutral-300 text-sm">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-2 text-center">
        <span className="text-white font-semibold tracking-tight">V Jaya Surya</span>
        <span className="text-neutral-400">
          {formatted || "--"}
        </span>
        <span className="text-neutral-500">
          © {new Date().getFullYear()} · Built by VRana
        </span>
      </div>
    </footer>
  );
};

export default Footer;
