import { GraduationCap, Landmark, Hospital, Building2, Store, Hotel } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const industries = [
  {
    title: 'Education',
    icon: <GraduationCap size={40} className="text-primary" />,
    desc: 'Smart classrooms, school management systems, and high-speed campus WiFi.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/89c5a5b9-15b6-443e-a65f-bd8bbd8283c9/education-tech-0d151e56-1778423099832.webp'
  },
  {
    title: 'Healthcare',
    icon: <Hospital size={40} className="text-primary" />,
    desc: 'Secure patient data networks, medical imaging storage, and hospital security.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/89c5a5b9-15b6-443e-a65f-bd8bbd8283c9/healthcare-tech-d8503319-1778423096703.webp'
  },
  {
    title: 'Corporate & Finance',
    icon: <Landmark size={40} className="text-primary" />,
    desc: 'High-performance servers, cybersecurity, and redundant data systems.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format'
  },
  {
    title: 'Government',
    icon: <Building2 size={40} className="text-primary" />,
    desc: 'National-scale infrastructure, secure communications, and public kiosks.',
    image: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?w=800&auto=format'
  },
  {
    title: 'Hospitality',
    icon: <Hotel size={40} className="text-primary" />,
    desc: 'Guest WiFi solutions, IPTV systems, and hotel-wide surveillance.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format'
  },
  {
    title: 'Retail',
    icon: <Store size={40} className="text-primary" />,
    desc: 'Point of Sale (POS) hardware, inventory tracking, and retail analytics.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format'
  }
];

const Industries = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-xl text-slate-600">
            TechCore Kenya provides specialized ICT solutions designed for the unique challenges of your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((industry, index) => (
            <div key={index} className="group overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={industry.image} 
                  alt={industry.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors" />
              </div>
              <div className="p-8">
                <div className="mb-6 p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-primary/10 transition-colors">
                  {industry.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {industry.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Global Partnership */}
        <div className="mt-32 p-12 bg-slate-900 rounded-[3rem] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-[120px] rounded-full" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-bold mb-6">Need a Specialized Solution?</h2>
            <p className="text-lg text-slate-300 mb-8">
              Every organization is different. We offer custom ICT consulting to help you design infrastructure that perfectly fits your workflow and budget.
            </p>
            <Button size="lg" className="px-10" asChild>
              <Link to="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;