import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
	title: "VisionDx | Explore",
	description: "VisionDx - Empowering Health, Unlocking Insights.",
};


  export default function RootLayout({ children }) {
	return (
	  <html lang="en">
		<body>
		  <Navbar />
		  {children}
		</body>
	  </html>
	);
  }
