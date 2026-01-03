import { Ship, Plane, Truck, Package, FileText, Warehouse, Globe, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ServicesPage() {
  const services = [
    {
      icon: Ship,
      title: 'Sea Freight / NVOCC Operations',
      description: 'Comprehensive ocean freight solutions including FCL and LCL shipments, project cargo handling, and specialized container movements. Our NVOCC operations ensure competitive rates and reliable schedules.',
      features: [
        'Full Container Load (FCL)',
        'Less than Container Load (LCL)',
        'Project Cargo Handling',
        'ODC & Special Container Movements',
        'Port-to-Port Services',
      ],
    },
    {
      icon: Plane,
      title: 'Air Freight',
      description: 'Fast and efficient air cargo services connecting you to major destinations worldwide. Time-critical shipments handled with precision and care.',
      features: [
        'Express Air Freight',
        'Consolidated Shipments',
        'Door-to-Door Service',
        'Dangerous Goods Handling',
        'Temperature Controlled Cargo',
      ],
    },
    {
      icon: Truck,
      title: 'Road Logistics',
      description: 'Reliable ground transportation solutions for domestic and cross-border movements. Our fleet ensures safe and timely delivery of your cargo.',
      features: [
        'Full Truck Load (FTL)',
        'Part Truck Load (PTL)',
        'Last Mile Delivery',
        'Cross-Border Transportation',
        'Express Ground Services',
      ],
    },
    {
      icon: FileText,
      title: 'Custom Clearance & Brokerage',
      description: 'Expert customs clearance services ensuring smooth and compliant import/export operations. Our team handles all documentation and regulatory requirements.',
      features: [
        'Import/Export Documentation',
        'Duty & Tax Calculation',
        'DGFT Compliance',
        'License Management',
        'Tariff Classification',
      ],
    },
    {
      icon: Warehouse,
      title: 'Warehousing & Distribution',
      description: 'State-of-the-art warehousing facilities with advanced inventory management systems. We provide 3PL services tailored to your business needs.',
      features: [
        'Bonded Warehousing',
        'Inventory Management',
        'Order Fulfillment',
        'Distribution Services',
        'Value-Added Services',
      ],
    },
    {
      icon: Package,
      title: 'Personal Effects & Relocation',
      description: 'Professional packing and moving services for personal belongings. We ensure safe transit with high-quality materials and careful handling.',
      features: [
        'Professional Packing',
        'Labeling & Inventory',
        'International Relocation',
        'Door-to-Door Service',
        'Insurance Coverage',
      ],
    },
    {
      icon: Globe,
      title: 'Cross Trade & Consolidation',
      description: 'Buyers consolidation and cross-trade management services connecting suppliers and buyers globally without cargo touching your country.',
      features: [
        'Buyers Consolidation',
        'Multi-Vendor Coordination',
        'Quality Inspection',
        'Cross Trade Management',
        'Global Network Access',
      ],
    },
    {
      icon: Shield,
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain solutions with advanced technology systems. We help optimize your logistics operations for better efficiency.',
      features: [
        'Supply Chain Optimization',
        'Real-time Tracking',
        'Vendor Management',
        'Risk Mitigation',
        'Performance Analytics',
      ],
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90">
            Comprehensive multimodal logistics services designed to move your cargo efficiently 
            across sea, air, and road networks worldwide
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="card-hover border-2">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom text-center">
          <h2 className="mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team specializes in creating tailor-made logistics solutions for unique requirements. 
            Contact us to discuss your specific needs.
          </p>
          <a 
            href="mailto:sales@sllpl.com"
            className="btn-primary inline-block"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </div>
  );
}
