import Header from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";
import Seguranca from "@/components/footer-seguranca";
import HeaderFrases from "@/components/header-frases";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <HeaderFrases />
        <Header />
        {children}
        <Seguranca />
        <Footer />
      </body>
    </html>
  );
}
