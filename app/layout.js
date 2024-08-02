import "@styles/globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Image from "next/image";

export const metadata = {
  title: "NIOV Labs",
  description: "Delivering the New Internet of Value",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body suppressHydrationWarning={true}
        className="background-image"
      >
        <main 
          className='app'
        >
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
