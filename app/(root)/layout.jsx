"use client"
import SideBar from "@/components/SideBar";

export default function RootLayout({ children }) {
	return (
		<>
			<SideBar/>
			{children}
		</>
	);
}
