import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! Our team will respond within 24 hours.");
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-slate-600">
            Have a project in mind or need technical support? Get in touch with our team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold mb-8">Our Offices</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary mt-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Main Headquarters</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      TechCore Plaza, 4th Floor<br />
                      Westlands, Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary mt-1">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Call Us</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      Sales: +254 700 000 000<br />
                      Support: +254 711 000 000
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary mt-1">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Email Us</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      General: info@techcore.co.ke<br />
                      Technical: support@techcore.co.ke
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-slate-900 rounded-2xl text-white">
                <h4 className="font-bold mb-2">Technical Support</h4>
                <p className="text-xs text-slate-400 mb-4">Our ticketing system is monitored 24/7 for critical infrastructure issues.</p>
                <Button variant="secondary" className="w-full text-xs">Open Support Ticket</Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Full Name</label>
                    <Input placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Email Address</label>
                    <Input type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Phone Number</label>
                    <Input placeholder="+254 7XX XXX XXX" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Service Interested In</label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option>Hardware Procurement</option>
                      <option>Networking Project</option>
                      <option>CCTV Installation</option>
                      <option>Cloud/Cybersecurity</option>
                      <option>IT Maintenance (AMC)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold">Subject</label>
                  <Input placeholder="How can we help you?" required />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold">Message</label>
                  <Textarea placeholder="Please provide details about your requirements..." className="min-h-[150px]" required />
                </div>

                <Button type="submit" className="w-full sm:w-auto px-10 h-12 text-md">
                  Send Message <Send className="ml-2" size={18} />
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-20 h-96 w-full bg-slate-100 rounded-3xl relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto text-primary mb-4" size={48} />
              <p className="text-slate-500 font-medium italic">Interactive Google Map Placeholder</p>
              <p className="text-slate-400 text-sm mt-1">Our offices are located in Westlands, Nairobi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;