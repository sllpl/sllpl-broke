import { Link } from 'react-router-dom';
import { ArrowRight, Ship, Plane, Truck, Package, Globe, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function HomePage() {
  const services = [
    {
      icon: Ship,
      title: 'Sea Freight',
      description: 'Comprehensive ocean freight solutions for global shipping needs',
    },
    {
      icon: Plane,
      title: 'Air Freight',
      description: 'Fast and reliable air cargo services worldwide',
    },
    {
      icon: Truck,
      title: 'Road Logistics',
      description: 'Efficient ground transportation and delivery services',
    },
    {
      icon: Package,
      title: 'Warehousing',
      description: 'Secure storage and distribution facilities',
    },
    {
      icon: Globe,
      title: 'Custom Clearance',
      description: 'Expert customs brokerage and compliance services',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer service and tracking',
    },
  ];

  const stats = [
    { value: '17+', label: 'Years Experience' },
    { value: '1000+', label: 'Shipments Delivered' },
    { value: '50+', label: 'Countries Served' },
    { value: '100%', label: 'Customer Satisfaction' },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-primary-foreground section-padding overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="mb-6">
             Shubh Laabh Logistics Pvt Ltd
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Your trusted partner for seamless sea, air, and road logistics services. 
              Single window solutions for all your freight forwarding needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto font-bold">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive multimodal logistics services tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="card-hover border-2">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-card-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">About Shubh Laabh Logistics</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We are a modern model of international freight & logistics management with 17 years 
                of rich industry experience. As a highly professional, independent, and full-service 
                freight forwarder / NVOCC operator, we offer our valued customers a highly dependable 
                and extensive suite of multimodal logistics services.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We function as a single window for sea, air, and road logistics solutions provider, 
                ensuring tailor-made and time-bound solutions for all your shipping needs.
              </p>
              <Link to="/about">
                <Button size="lg" className="font-bold">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070"
                alt="Logistics operations"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Ship with Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Contact us today for immediate assistance and get a customized quote for your logistics needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="font-bold">
                Contact Us Now
              </Button>
            </Link>
            <a href="tel:+919027350616">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold">
                Call: +91 9027350616
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
