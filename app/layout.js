import "@styles/globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata = {
  title: "NIOV Labs",
  description: "Delivering the New Internet of Value",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body suppressHydrationWarning={true}
        style={{ 
          backgroundImage: "url('/assets/images/desktopParticles.png')", 
          backgroundSize: '80%', 
          backgroundPosition: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.9)' 
        }}
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
