import { ShieldCheck, Target, Users, Award, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Mission/Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Kenya's Trusted ICT Infrastructure Partner</h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              TechCore Solutions Kenya was founded on the principle that organizations in East Africa deserve world-class technology infrastructure that is reliable, scalable, and secure.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              From small startups to government agencies, we've helped hundreds of clients navigate their digital transformation journey through high-quality hardware and expert technical engineering.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-bold text-primary mb-1">10+</h4>
                <p className="text-sm font-semibold text-slate-500 uppercase">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary mb-1">500+</h4>
                <p className="text-sm font-semibold text-slate-500 uppercase">Projects Delivered</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format" 
              alt="Office Team" 
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full z-0" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-teal-500/10 rounded-full z-0" />
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <div className="bg-slate-900 text-white p-12 rounded-[2.5rem]">
            <Target className="text-primary mb-6" size={48} />
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              To deliver innovative, secure, and scalable ICT solutions that empower organizations across East Africa to achieve their digital transformation goals through technical excellence.
            </p>
          </div>
          <div className="bg-primary text-white p-12 rounded-[2.5rem]">
            <Award className="text-white" size={48} />
            <h2 className="text-3xl font-bold mb-6 mt-6">Our Vision</h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              To become the leading provider of enterprise technology infrastructure in the region, recognized for our commitment to quality, integrity, and customer-centric support.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-slate-600">The principles that guide every interaction and project we undertake.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Integrity', desc: 'We only supply genuine products with full manufacturer warranties.' },
            { title: 'Excellence', desc: 'Our technical team is highly certified and trained on the latest tech.' },
            { title: 'Reliability', desc: 'We understand that downtime costs money. We respond fast.' },
            { title: 'Innovation', desc: 'We stay ahead of the curve to bring you the future of ICT today.' }
          ].map((v, i) => (
            <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm text-center">
              <ShieldCheck className="mx-auto text-primary mb-4" size={32} />
              <h4 className="text-xl font-bold mb-2">{v.title}</h4>
              <p className="text-slate-500 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;