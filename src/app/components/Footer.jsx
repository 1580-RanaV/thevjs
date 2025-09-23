import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-6 text-xs md:text-sm text-neutral-500 border-neutral-800 font-regular">
      <p>
        © {new Date().getFullYear()} V Jaya Surya ·{" "}
        <a
          href="https://www.jayasurya.site"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-300 transition-colors underline underline-offset-4"
        >
          www.jayasurya.site
        </a>
      </p>
      <p className="mt-1">
        Designed & built by <span className="underline underline-offset-4">
          <a
          href="https://www.linkedin.com/in/vrana11/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-300 transition-colors underline underline-offset-4"
        >
          Rana
        </a></span>
      </p>
    </footer>
  );
};

export default Footer;
