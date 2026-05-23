import { useState } from 'react';
import { Search, Filter, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { products, categories } from '@/data/products';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(p => 
    (activeCategory === 'All' || p.category === activeCategory) &&
    (p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
     p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
     p.specs.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleQuoteRequest = (productName: string) => {
    toast.success(`Quote request for ${productName} sent! We'll contact you shortly.`);
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold mb-4">Enterprise Hardware Catalog</h1>
            <p className="text-slate-600">Browse our expanded selection of 50+ high-performance ICT equipment from global leading manufacturers.</p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <Input 
                placeholder="Search products..." 
                className="pl-10" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={18} /> Filter
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(cat => (
            <Button
              key={cat}
              variant={activeCategory === cat ? 'default' : 'secondary'}
              onClick={() => setActiveCategory(cat)}
              className="rounded-full whitespace-nowrap"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all flex flex-col h-full">
              <div className="aspect-square overflow-hidden bg-slate-50 relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <Badge className="absolute top-4 left-4 bg-white/90 text-primary hover:bg-white">{product.brand}</Badge>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-xs font-semibold text-primary uppercase mb-2">{product.category}</p>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-1">{product.name}</h3>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2 min-h-[2.5rem]">{product.specs}</p>
                <div className="mt-auto">
                  <p className="text-xl font-bold text-slate-900 mb-6">{product.price}</p>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" size="sm" onClick={() => handleQuoteRequest(product.name)}>
                      Quote
                    </Button>
                    <Button size="sm">
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
            <Info className="mx-auto text-slate-300 mb-4" size={48} />
            <p className="text-lg font-medium text-slate-500">No products found matching your search.</p>
            <Button variant="link" onClick={() => {setActiveCategory('All'); setSearchQuery('');}}>Clear filters</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;