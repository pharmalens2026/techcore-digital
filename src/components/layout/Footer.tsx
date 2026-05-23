import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-2 bg-primary rounded-lg text-primary-foreground">
                <Cpu size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                TechCore <span className="text-primary">Kenya</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Kenya's leading ICT infrastructure and enterprise technology provider. Delivering innovative, secure, and scalable digital solutions.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Product Catalog</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/industries" className="hover:text-primary transition-colors">Industries Served</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact & Support</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Core Solutions</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Networking Solutions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">CCTV & Security</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Enterprise Cloud</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">IT Support & AMC</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Get In Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="text-primary mt-1" size={18} />
                <span>Nairobi CBD / Westlands Area, Kenya</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-primary" size={18} />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-primary" size={18} />
                <span>info@techcorekenya.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} TechCore Solutions Kenya. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;