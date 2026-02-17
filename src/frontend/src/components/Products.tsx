import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { CheckCircle2 } from 'lucide-react';

export default function Products() {
  const features = [
    {
      title: "Premium Quality Wood",
      description: "Carefully selected Kashmir willow for optimal performance and durability"
    },
    {
      title: "Perfect Balance",
      description: "Expertly crafted for the ideal weight distribution and swing"
    },
    {
      title: "Professional Grade",
      description: "Used by players across all skill levels, from beginners to professionals"
    },
    {
      title: "Durable Construction",
      description: "Built to withstand intense gameplay and last for seasons"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Why Choose Our Bats?
          </h2>
          <p className="text-lg text-muted-foreground">
            Every bat is crafted with attention to detail, ensuring you get the best performance on the field.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-2">
              <CardHeader>
                <CheckCircle2 className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
