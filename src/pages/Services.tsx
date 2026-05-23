import { Network, Shield, Cloud, HardDrive, Headphones, Lock, Server, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Networking Solutions',
    description: 'Complete LAN/WAN setup, fiber optic cabling, WiFi optimization, and data center infrastructure.',
    icon: <Network className="text-primary" size={40} />,
    features: ['Structured Cabling', 'Network Monitoring', 'Switch & Router Configuration', 'WiFi Heatmapping']
  },
  {
    title: 'CCTV & Security',
    description: 'High-definition surveillance, biometric access control, and smart security systems for buildings.',
    icon: <Shield className="text-primary" size={40} />,
    features: ['IP Camera Installation', 'Facial Recognition', 'Remote Monitoring', 'Alarm Systems']
  },
  {
    title: 'Enterprise Cloud',
    description: 'Azure & AWS migration, Microsoft 365 setup, and secure cloud storage solutions for business.',
    icon: <Cloud className="text-primary" size={40} />,
    features: ['Cloud Backup', 'Virtualization', 'M365 Management', 'Email Hosting']
  },
  {
    title: 'Cybersecurity',
    description: 'Protecting your digital assets with firewalls, endpoint security, and regular security audits.',
    icon: <Lock className="text-primary" size={40} />,
    features: ['Firewall Management', 'Anti-Ransomware', 'Vulnerability Assessment', 'VPN Setup']
  },
  {
    title: 'IT Support & Maintenance',
    description: 'Comprehensive Annual Maintenance Contracts (AMC) and on-call technical support.',
    icon: <Headphones className="text-primary" size={40} />,
    features: ['24/7 Remote Helpdesk', 'On-site Repair', 'Hardware Upgrades', 'Preventive Maintenance']
  },
  {
    title: 'Server Management',
    description: 'Installation, configuration, and monitoring of high-performance physical and virtual servers.',
    icon: <Server className="text-primary" size={40} />,
    features: ['Windows/Linux Support', 'Server RAID Setup', 'Cluster Configuration', 'Data Recovery']
  }
];

const Services = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-bold mb-6">Our Solutions & Services</h1>
          <p className="text-xl text-slate-600">
            We deliver tailored ICT solutions that solve real business challenges, enhance productivity, and secure your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col">
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl w-fit">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/contact">Enquire About This Service</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Technical Delivery Process</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">How we ensure every project is delivered to the highest standards.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'We assess your current needs and future goals.' },
              { step: '02', title: 'Design', desc: 'Our engineers design a custom scalable solution.' },
              { step: '03', title: 'Implementation', desc: 'Professional installation with minimal downtime.' },
              { step: '04', title: 'Support', desc: 'Ongoing maintenance and technical optimization.' }
            ].map((p, i) => (
              <div key={i} className="relative p-8 bg-slate-50 rounded-2xl text-center">
                <span className="absolute top-4 left-4 text-4xl font-black text-slate-200">{p.step}</span>
                <h4 className="text-xl font-bold mt-4 mb-2 relative z-10">{p.title}</h4>
                <p className="text-slate-600 text-sm relative z-10">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;