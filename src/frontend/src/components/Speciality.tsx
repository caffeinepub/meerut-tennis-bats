import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Palette, Sparkles, Users } from 'lucide-react';
import { BUSINESS_INFO } from '../config/business';

export default function Speciality() {
  return (
    <section id="speciality" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            <Sparkles className="h-4 w-4" />
            Our Speciality
          </div>
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            {BUSINESS_INFO.speciality}
          </h2>
          <p className="text-lg text-muted-foreground">
            We don't just sell bats – we create personalized equipment tailored to your unique playing style and preferences.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          <Card className="text-center border-2">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Choose Your Colors</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Select from a wide range of grip colors and patterns to match your style and team colors.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="text-center border-2">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Comfort & Feel</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                We customize grip thickness, texture, and material based on your hand size and comfort preferences.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="text-center border-2">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Your Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Have a specific design in mind? We'll work with you to bring your custom grip vision to life.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
