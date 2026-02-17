import { Button } from './ui/button';
import { BUSINESS_INFO } from '../config/business';

interface HeroProps {
  onOrderClick: () => void;
}

export default function Hero({ onOrderClick }: HeroProps) {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/assets/generated/meerut-hero.dim_1600x900.png)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>
      
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl space-y-6">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            From {BUSINESS_INFO.city} - India's Sports Capital
          </div>
          
          <h2 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Premium Raza Cricket Tennis Bats
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-xl">
            {BUSINESS_INFO.tagline}. Handcrafted with precision, customized to your style.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" onClick={onOrderClick} className="text-lg px-8">
              Order Your Bat
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8">
              <a href="#speciality">Our Speciality</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
