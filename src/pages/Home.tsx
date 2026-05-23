import { motion } from 'framer-motion';
import { ArrowRight, Shield, Server, Laptop, Network, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/89c5a5b9-15b6-443e-a65f-bd8bbd8283c9/hero-datacenter-d2afe0fc-1778423096524.webp"
            alt="Data Center"
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Powering Businesses Through <span className="text-primary">Technology</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Your trusted ICT partner for modern hardware, secure networking, and enterprise infrastructure solutions across East Africa.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link to="/products">Explore Products</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white" asChild>
                <Link to="/contact">Request a Consultation</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-slate-50 border-y">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">Trusted by Global Tech Brands</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
            {['HP', 'Dell', 'Cisco', 'Hikvision', 'Microsoft', 'Lenovo', 'Ubiquiti'].map((brand) => (
              <span key={brand} className="text-2xl font-bold text-slate-800">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete ICT Solutions</h2>
            <p className="text-slate-600">We provide end-to-end technology services designed to scale with your business needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Hardware Supply',
                desc: 'Premium laptops, servers, and peripherals from top global brands.',
                icon: <Laptop className="text-primary" size={32} />,
                color: 'bg-blue-50'
              },
              {
                title: 'Networking',
                desc: 'Reliable fiber, LAN, and wireless infrastructure for seamless connectivity.',
                icon: <Network className="text-primary" size={32} />,
                color: 'bg-teal-50'
              },
              {
                title: 'Security Systems',
                desc: 'Smart CCTV and biometric access control to protect your assets.',
                icon: <Shield className="text-primary" size={32} />,
                color: 'bg-slate-50'
              },
              {
                title: 'Enterprise Cloud',
                desc: 'Scalable server solutions and cloud migration for the modern era.',
                icon: <Server className="text-primary" size={32} />,
                color: 'bg-indigo-50'
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className={`p-8 rounded-2xl ${service.color} border border-slate-100 transition-all`}
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">{service.desc}</p>
                <Link to="/services" className="text-primary font-semibold flex items-center text-sm group">
                  Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Network className="absolute -top-20 -left-20 text-white" size={400} />
          <Server className="absolute -bottom-20 -right-20 text-white" size={400} />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Upgrade Your Tech?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Contact our technical team today for a customized quote tailored to your organization's specific needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="px-10 h-14 text-lg" asChild>
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button size="lg" className="px-10 h-14 text-lg bg-white text-primary hover:bg-slate-100" asChild>
              <Link to="/products">View Catalog</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/89c5a5b9-15b6-443e-a65f-bd8bbd8283c9/team-working-804f40df-1778423098331.webp"
                alt="Tech Team"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Partner With TechCore?</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We don't just supply equipment; we build lasting technology partnerships. Our commitment to quality and technical excellence sets us apart in the Kenyan market.
              </p>
              <div className="space-y-4">
                {[
                  'Genuine products with manufacturer warranties',
                  'Expert installation and configuration services',
                  'Dedicated 24/7 technical support response',
                  'Nationwide delivery and on-site maintenance',
                  'Flexible payment plans for institutions'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-green-500" size={20} />
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <Button className="mt-10 px-8" size="lg" asChild>
                <Link to="/about">About Our Company</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;