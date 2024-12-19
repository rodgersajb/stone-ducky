import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Poppins, Cormorant_Garamond, Dancing_Script } from "next/font/google";
import { Toaster } from "react-hot-toast";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins", // Define a CSS variable for this font.
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Select the weights you need
  style: ["italic", "normal"], // Include italic styles
  variable: "--font-cormorant",
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
      className={`${poppins.variable} ${dancingScript.variable}`}
    >
      <body className="font-poppins antialiased">
        <Navbar />
        {children}
        <Toaster position="bottom-center" />
        <Footer />
      </body>
    </html>
  );
}
