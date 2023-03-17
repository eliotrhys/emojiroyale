import '../styles/globals.css';

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
    {
    }
      <head>
        <title>Emoji Royale</title>
        <link rel="stylesheet" href="https://use.typekit.net/wtd2uom.css"></link>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
      </head>
      <body>{children}</body>
    </html>
  );
}