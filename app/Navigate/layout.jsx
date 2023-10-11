import Footer from "@/components/Footer";

export const metadata = {
	title: "VisionDx | Navigate",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
