import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black" >
      <div className="container  mx-auto px-12 py-10 ">
        <HeroSection />
      </div>
  </main>
  );
}
