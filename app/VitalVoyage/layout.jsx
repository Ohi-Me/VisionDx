import Footer from "@/components/Footer";

export const metadata = {
	title: "VisionDx | VitalVoyage",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
