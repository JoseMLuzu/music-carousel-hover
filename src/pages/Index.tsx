import { AlbumCarousel } from "@/components/AlbumCarousel";

const Index = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 w-full flex justify-between items-center p-6 z-50">
        <button className="text-sm uppercase tracking-wider hover:opacity-75 transition-opacity">
          Back
        </button>
        <h1 className="text-xl font-bold">EXPLORE</h1>
        <button className="text-sm uppercase tracking-wider hover:opacity-75 transition-opacity">
          Shop
        </button>
      </nav>
      
      <AlbumCarousel />
      
      <div className="fixed bottom-8 left-0 w-full text-center">
        <h2 className="text-2xl font-bold mb-2">UTOPIA ALBUM</h2>
        <div className="flex justify-center">
          <img src="/placeholder.svg" alt="Album label" className="h-12 w-12" />
        </div>
      </div>
    </main>
  );
};

export default Index;