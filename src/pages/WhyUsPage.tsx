import { Shield, Clock, Globe, Users, TrendingUp, Award, Headphones, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function WhyUsPage() {
  const reasons = [
    {
      icon: Shield,
      title: 'Trusted & Reliable',
      description: '17 years of proven track record in delivering secure and reliable freight forwarding services across the globe.',
    },
    {
      icon: Clock,
      title: 'Time-Bound Delivery',
      description: 'Commitment to predetermined timelines with efficient logistics planning and execution for on-time deliveries.',
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Extensive network of agents across the globe ensuring seamless connectivity to major destinations worldwide.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated and trained professionals with deep industry knowledge and commitment to customer success.',
    },
    {
      icon: TrendingUp,
      title: 'Cost Effective',
      description: 'Competitive pricing with optimized routes and consolidation services ensuring best value for your investment.',
    },
    {
      icon: Award,
      title: 'Quality Service',
      description: 'World-class facilities operated with advanced technology systems and highest quality standards.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer service and real-time tracking for complete peace of mind.',
    },
    {
      icon: CheckCircle,
      title: 'Single Window Solution',
      description: 'Comprehensive sea, air, and road logistics services all under one roof for simplified management.',
    },
  ];

  const benefits = [
    'Customized and integrated logistics solutions',
    'Advanced tracking and monitoring systems',
    'Professional customs clearance and compliance',
    'Secure warehousing and distribution facilities',
    'Dedicated account management',
    'Flexible service options tailored to your needs',
    'Competitive rates with transparent pricing',
    'Insurance coverage for cargo protection',
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="mb-6">Why Choose Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90">
            Your trusted logistics partner delivering excellence through reliability, 
            efficiency, and customer-focused solutions
          </p>
        </div>
      </section>

      {/* Key Reasons */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="mb-4">Our Competitive Advantages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What sets us apart in the international freight forwarding industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card key={index} className="card-hover border-2 text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Additional Benefits</h2>
              <p className="text-lg text-muted-foreground">
                Experience the complete advantage of partnering with Shubh Laabh Logistics
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start p-4 rounded-lg bg-background">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-foreground font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Commitment to Excellence</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  At Shubh Laabh Logistics, we don't just move cargo – we build partnerships. Our commitment 
                  goes beyond basic freight forwarding to provide strategic supply chain solutions that give 
                  you a competitive edge in today's global marketplace.
                </p>
                <p>
                  With 17 years of industry experience, we understand the complexities of international trade 
                  and logistics. Our team of experts leverages this knowledge along with cutting-edge technology 
                  to deliver solutions that are not just effective, but transformative for your business.
                </p>
                <p>
                  We believe in transparency, integrity, and building long-term relationships based on trust 
                  and mutual success. When you choose Shubh Laabh Logistics, you're choosing a partner dedicated 
                  to your growth and success.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">17+</div>
                  <div className="text-sm text-muted-foreground">Years of Experience</div>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">Shipments Delivered</div>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="mb-6">Experience the Difference</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Join hundreds of satisfied clients who trust us with their global logistics needs
          </p>
          <a 
            href="mailto:sales@sllpl.com"
            className="inline-block bg-background text-foreground hover:bg-background/90 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Journey With Us
          </a>
        </div>
      </section>
    </div>
  );
}
