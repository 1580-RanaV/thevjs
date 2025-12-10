import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://vjs.bio"),
  title: "V Jaya Surya | Portfolio",
  description:
    "Showcasing the journey, skills, and projects of V Jaya Surya. Discover my expertise, accomplishments, and passion for creating innovative solutions.",
  keywords:
    "V Jaya Surya, portfolio, web development, projects, skills, resume, personal website",
  author: "V Jaya Surya",
  openGraph: {
    title: "V Jaya Surya | Portfolio",
    description:
      "Showcasing the journey, skills, and projects of V Jaya Surya. Discover my expertise, accomplishments, and passion for creating innovative solutions.",
    url: "https://vjs.bio",
    siteName: "V Jaya Surya",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "V Jaya Surya favicon",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "V Jaya Surya | Portfolio",
    description:
      "Showcasing the journey, skills, and projects of V Jaya Surya. Discover my expertise, accomplishments, and passion for creating innovative solutions.",
    images: ["/android-chrome-192x192.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="V Jaya Surya" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700&family=EB+Garamond:ital,wght@1,500&display=swap"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
