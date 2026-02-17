import { Heart } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';
import { BUSINESS_INFO } from '../config/business';

export default function Footer() {
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'meerut-bats';

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img 
                src="/assets/generated/meerut-bats-logo.dim_512x512.png" 
                alt="Logo" 
                className="h-8 w-8 object-contain"
              />
              <span className="font-bold text-lg">{BUSINESS_INFO.name}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {BUSINESS_INFO.tagline}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Phone: {BUSINESS_INFO.phoneDisplay}</p>
              <p>Location: {BUSINESS_INFO.city}, India</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Follow Us</h3>
            <a 
              href={BUSINESS_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <SiInstagram className="h-4 w-4" />
              {BUSINESS_INFO.instagram.handle}
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using{' '}
            <a 
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
          <p className="mt-2">© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
