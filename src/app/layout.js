import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import { Toaster } from "react-hot-toast";

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
      className={`${sourceSans.variable} ${libreBaskerville.variable}`}
    >
      <body className="font-sourceSans antialiased">
        <Navbar />
        {children}
        <Toaster position="bottom-center" />
        <Footer />
      </body>
    </html>
  );
}
