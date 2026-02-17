import { Phone } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';
import { BUSINESS_INFO } from '../config/business';
import { Button } from './ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/assets/generated/meerut-bats-logo.dim_512x512.png" 
            alt="Meerut Tennis Bats Logo" 
            className="h-10 w-10 object-contain"
          />
          <div>
            <h1 className="text-xl font-bold tracking-tight">{BUSINESS_INFO.name}</h1>
            <p className="text-xs text-muted-foreground">{BUSINESS_INFO.city}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">{BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </Button>
          
          <Button variant="ghost" size="sm" asChild>
            <a 
              href={BUSINESS_INFO.instagram.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <SiInstagram className="h-4 w-4" />
              <span className="hidden sm:inline">{BUSINESS_INFO.instagram.handle}</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
