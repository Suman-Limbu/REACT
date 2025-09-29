import Header from "@/Components/Header";
import config from "@/config";
import Footer from './../Components/Footer';
import "./globals.css";

export const metadata = {
  title: {
    default: config.appName,
    template: `%s | ${config.appName}`,
  },
  description: "E-commerce website",
  keywords: "online shopping ,e-commerce ,buy and sell",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
