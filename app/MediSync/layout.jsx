import Footer from "@/components/Footer";

export const metadata = {
	title: "VisionDx | MediSync",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
