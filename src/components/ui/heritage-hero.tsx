import { useCounter } from "@/hooks/use-counter";

export function HeritageHero() {
  const artifactsCounter = useCounter({ end: 10000, duration: 4000 });
  const collectionsCounter = useCounter({ end: 500, duration: 3500 });
  const institutionsCounter = useCounter({ end: 50, duration: 2500 });
  const countriesCounter = useCounter({ end: 25, duration: 2500 });

  return (
    <section className="relative py-20 md:py-32 bg-gradient-heritage overflow-hidden">
      {/* Background pattern using the mandala design */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 bg-repeat" 
          style={{
            backgroundImage: `url('/lovable-uploads/5622ef21-7684-40a7-8470-8c0d22fb8d75.png')`,
            backgroundSize: '200px 200px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Digital Heritage
            <span className="block text-primary">Archives</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A comprehensive digital platform dedicated to preserving, researching, and sharing 
            cultural heritage through advanced AI-powered tools and community collaboration.
          </p>
          

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center" ref={artifactsCounter.ref}>
              <div className="text-3xl font-bold text-primary">{artifactsCounter.count.toLocaleString()}+</div>
              <div className="text-sm text-muted-foreground">Artifacts</div>
            </div>
            <div className="text-center" ref={collectionsCounter.ref}>
              <div className="text-3xl font-bold text-primary">{collectionsCounter.count.toLocaleString()}+</div>
              <div className="text-sm text-muted-foreground">Collections</div>
            </div>
            <div className="text-center" ref={institutionsCounter.ref}>
              <div className="text-3xl font-bold text-primary">{institutionsCounter.count}+</div>
              <div className="text-sm text-muted-foreground">Institutions</div>
            </div>
            <div className="text-center" ref={countriesCounter.ref}>
              <div className="text-3xl font-bold text-primary">{countriesCounter.count}+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
