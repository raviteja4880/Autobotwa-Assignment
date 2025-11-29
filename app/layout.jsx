export const metadata = {
  title: "Araku Coffee — Crafted in the Hills",
  description: "A responsive landing page for Araku Coffee built with Next.js + Tailwind. Parts prototyped using Vercel v0."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
