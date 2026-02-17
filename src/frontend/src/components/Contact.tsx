import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Phone, MapPin, Instagram } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';
import { Button } from './ui/button';
import { BUSINESS_INFO } from '../config/business';

export default function Contact() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions or need assistance? We're here to help you find the perfect bat.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <Phone className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Call Us</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                For orders, inquiries, or any issues
              </CardDescription>
              <Button variant="outline" className="w-full" asChild>
                <a href={`tel:${BUSINESS_INFO.phone}`}>
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <MapPin className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {BUSINESS_INFO.city}, Uttar Pradesh
                <br />
                India's Sports Manufacturing Hub
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Instagram className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Follow Us</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                See our latest bats and customer reviews
              </CardDescription>
              <Button variant="outline" className="w-full" asChild>
                <a 
                  href={BUSINESS_INFO.instagram.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <SiInstagram className="h-4 w-4" />
                  {BUSINESS_INFO.instagram.handle}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
