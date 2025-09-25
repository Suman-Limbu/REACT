import "./globals.css";

export const metadata = {
  title: "ShopNest",
  description: "E-commerce website",
  keywords:"online shopping ,e-commerce ,buy and sell"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>This is header</header>
        {children}
        <footer>This is footer</footer>
        </body>
    </html>
  );
}
