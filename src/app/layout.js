import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import {
  Poppins,
  Libre_Baskerville,
  Dancing_Script,
  Source_Sans_3,
  Lato,
  Playfair_Display
} from "next/font/google";
import { Toaster } from "react-hot-toast";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins", // Define a CSS variable for this font.
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source-sans",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing-script",
});

export const metadata = {
  title: {
    default: "Stone Ducky Restaurant",
    template: "%s | Stone Ducky Restaurant",
  },
  description:
    "Stone Ducky is a casual and intimate restaurant offering fresh, homemade pizza and creatively inspired dishes. Close proximity to the ocean provides scenic view to enhance your dining experience.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`$lato.variable} ${dancingScript.variable}`}
    >
      <body className="font-lato antialiased">
        <Navbar />
        {children}
        <Toaster position="bottom-center" />
        <Footer />
      </body>
    </html>
  );
}
