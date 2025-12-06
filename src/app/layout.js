import "./globals.css";

export const metadata = {
  title: "V Jaya Surya | Portfolio",
  description: "Showcasing the journey, skills, and projects of V Jaya Surya. Discover my expertise, accomplishments, and passion for creating innovative solutions.",
  keywords: "V Jaya Surya, portfolio, web development, projects, skills, resume, personal website",
  author: "V Jaya Surya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="V Jaya Surya" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
