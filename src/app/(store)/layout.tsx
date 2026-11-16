
import ScrollAwareHeader from "@/components/layout/ScrollAwareHeader";
import Footer from "@/components/layout/Footer";

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollAwareHeader />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}
