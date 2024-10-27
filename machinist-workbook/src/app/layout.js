import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Providers } from './components/Providers';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar />

        <Providers>{children}</Providers>
        
        <Footer />  
      </body>
    </html>
  );
}
