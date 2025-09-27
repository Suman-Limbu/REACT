import Header from "@/Components/Header";
import config from "@/config";
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
        {children}
        <footer>This is footer</footer>
      </body>
    </html>
  );
}
