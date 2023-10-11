import dynamic from "next/dynamic";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata = {
	title: "VisionDx | Explore",
	description: "VisionDx - Empowering Health, Unlocking Insights.",
};


  export default function RootLayout({ children }) {
	return (
	  <html lang="en">
		<body>
		  <NavBar />
		  {children}
		</body>
	  </html>
	);
  }
