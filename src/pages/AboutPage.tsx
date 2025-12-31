import { Target, Eye, Award, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function AboutPage() {
  const coreValues = [
    'We are committed to exceed the expectations of our customers',
    'We respect each other, recognizing geographic and cultural differences and gender diversity',
    'We work in a manner that is safe to ourselves and the people around us',
    'We have the capability to provide customize & integrated solutions',
    'We are a good corporate neighbour and active in the community',
    'We conduct business with integrity and trust',
    'We collaborate with our customers, supplier partners, employees and each other to achieve collective goal',
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="mb-6">About Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90">
            17 years of excellence in international freight forwarding and logistics management
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-center">Who We Are</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                We, <span className="font-semibold text-foreground">Shubh Laabh Logistics</span>, young but with 17 years of rich experience of Industry, 
                is a Modern Model of International Freight & Logistics Management World. A highly professional, 
                independent and Full services Freight Forwarder / NVOCC Operator, we offer our valued customers 
                a highly dependable and extensive suite of <span className="font-semibold text-foreground">MULTIMODAL LOGISTICS SERVICES</span>.
              </p>
              <p>
                The highlight being - we function as a <span className="font-semibold text-foreground">SINGLE WINDOW - SEA - AIR - ROAD - LOGISTICS SOLUTIONS PROVIDER</span>.
              </p>
              <p>
                An extensive and strong relationship with a TEAM OF AGENTS ACROSS THE GLOBE, ensures that we can 
                deliver tailor-made and time bound solutions, for an array of multi-surface shipping and freight 
                forwarding services. With a dedicated and committed team, we deliver to clients a series of solutions 
                that help them move cargo to desired destinations within predetermined timelines, as well as cost effectiveness.
              </p>
              <p>
                Our Supply Chain and Logistics solutions help our clients achieve a strategic position of vantage 
                in the current competitive business environment and there-by achieve sustainable competitive edge 
                over competition, as our world class facilities are operated by trained employees who are enabled 
                by advance technology systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Mission */}
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We, Shubh Laabh Logistics make ourselves as the best SCM and Logistics Business Partner for our Customers.
                  </p>
                  <p>
                    We introduce fresh ideas in the Logistics Industry through High Tech Technologies and the latest equipment's.
                  </p>
                  <p>
                    We make ourselves 100% commitment towards Customer satisfaction. We bring most cost effective and 
                    tailor-made solution as per Customer need.
                  </p>
                  <p>
                    We explore new Talents and create a joyful & best working environment for employees.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
                <p className="text-lg text-muted-foreground">
                  Our vision is to become a Global Leader and most Trusted International SCM & Logistics Solution 
                  Service provider by delivery commitment & values towards our Customers & Employees.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center mr-4">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Core Values</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <p className="text-muted-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Core Team of Management</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Led by industry veterans with decades of combined experience
            </p>
          </div>

          <Card className="max-w-4xl mx-auto border-2">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mr-6 flex-shrink-0">
                  <Users className="h-10 w-10 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Naveen Kumar Bansal</h3>
                  <p className="text-lg text-primary font-semibold">Director</p>
                </div>
              </div>

              <div className="space-y-6 text-muted-foreground">
                <p>
                  Naveen Kumar Bansal has been located in Noida NCR. With his professional experience, he specializes 
                  in Sea Cargo, NVOCC Operations, handling Project movements, ODC & special container movements, 
                  matters related to Custom Brokerage, Custom Clearance, DGFT, Licence and other, which include 
                  Buyers Consolidation, Cross Trade Management, 3PL and Warehousing management.
                </p>

                <div>
                  <h4 className="font-semibold text-lg mb-4 text-foreground">Professional Experience</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="font-bold text-primary mr-3">2009:</span>
                      <p>
                        Joined OM Shailshuta Logistics Private Limited, Group Company of Times & Space Haullers 
                        as Import Head and Finance Manager.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="font-bold text-primary mr-3">2020:</span>
                      <p>
                        Resigned as Finance Manager & Import Head from Om Shailshuta Logistics Pvt Ltd.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="font-bold text-primary mr-3">2020:</span>
                      <p className="font-semibold text-foreground">
                        Established Shubh Laabh Logistics Pvt. Ltd.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Personal Effects Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Personal Effects</h2>
            <p className="text-lg text-muted-foreground">
              We take care for smart packaging with help of labelled on the packaging is clearly the product 
              that can be found inside. We use packaging with highest quality of material with wrapping of every items.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
