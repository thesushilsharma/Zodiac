import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Horoscope from "@/components/Horoscope";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <section className="flex-1 container flex flex-col items-center justify-center py-8 md:py-12 lg:py-16">
        <div className="w-full max-w-3xl mx-auto">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <Horoscope />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}