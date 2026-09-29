import React, { useState, useMemo } from 'react';
import { Search, X, AlertCircle, Phone, ExternalLink, Filter } from 'lucide-react';
import { fullMenu, menuCategories, restaurantInfo } from '../data/restaurantData';
import type { MenuCategory, DietaryType, MenuItem } from '../types';

export const MenuSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | 'ALL'>('ALL');
  const [dietaryFilter, setDietaryFilter] = useState<'ALL' | DietaryType>('ALL');

  // Filter items
  const filteredItems = useMemo(() => {
    return fullMenu.filter((item) => {
      // Search term matching
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      // Category matching
      const matchesCategory = selectedCategory === 'ALL' || item.category === selectedCategory;

      // Dietary matching
      const matchesDietary = dietaryFilter === 'ALL' || item.dietary === dietaryFilter;

      return matchesSearch && matchesCategory && matchesDietary;
    });
  }, [searchQuery, selectedCategory, dietaryFilter]);

  // Group filtered items by category for structured layout
  const groupedItems = useMemo(() => {
    const groups: { [key: string]: MenuItem[] } = {};
    filteredItems.forEach((item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredItems]);

  const renderDietaryIcon = (dietary: DietaryType) => {
    if (dietary === 'veg') {
      return <span className="veg-icon" title="Vegetarian" />;
    }
    if (dietary === 'egg') {
      return <span className="egg-icon" title="Egg" />;
    }
    return <span className="non-veg-icon" title="Non-Vegetarian" />;
  };

  return (
    <section id="menu" className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-[#84601A] bg-[#F4ECE0] px-3.5 py-1 rounded-full border border-[#D5C7A9]">
            Authentic Flavors
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10271D] mt-3">
            Our Restaurant Menu
          </h2>
          <div className="w-16 h-0.5 bg-[#C59B37] mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-base text-[#4E5852] font-light leading-relaxed">
            Explore our complete selection of authentic Hyderabadi Dum Biryanis, sizzling tandoori specialties, hearty Indian curries, and comforting Chinese rice and noodles.
          </p>

          {/* Pricing Notice Box */}
          <div className="mt-4 p-3.5 rounded-xl bg-[#F4ECE0] border border-[#D5C7A9] text-xs text-[#52483A] flex items-center justify-center gap-2 max-w-2xl mx-auto text-left sm:text-center">
            <AlertCircle className="w-4 h-4 text-[#84601A] shrink-0" />
            <span>
              Prices listed are based on the supplied restaurant listing. Please confirm current prices and daily availability directly with the restaurant when ordering.
            </span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-[#FAF7F2] p-4 sm:p-6 rounded-2xl border border-[#E9DFC9] shadow-soft mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-7 relative">
              <Search className="w-5 h-5 text-[#8B8070] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dish (e.g., Chicken Dum Biryani, Paneer, Fried Rice, Soups)..."
                className="w-full pl-10 pr-10 py-3 rounded-xl bg-[#FAF7F2] border border-[#D5C7A9] text-sm text-[#10271D] placeholder-[#8B8070] focus:outline-none focus:ring-2 focus:ring-[#84601A] focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[#8B8070] hover:text-[#10271D]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Dietary Filter Segmented Control */}
            <div className="md:col-span-5 flex items-center gap-1.5 p-1 bg-[#F4ECE0] rounded-xl border border-[#D5C7A9]/60">
              <button
                type="button"
                onClick={() => setDietaryFilter('ALL')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                  dietaryFilter === 'ALL'
                    ? 'bg-[#10271D] text-[#FAF7F2] shadow-sm'
                    : 'text-[#5A4F40] hover:text-[#10271D]'
                }`}
              >
                All Dishes
              </button>
              <button
                type="button"
                onClick={() => setDietaryFilter('veg')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                  dietaryFilter === 'veg'
                    ? 'bg-[#16A34A] text-white shadow-sm'
                    : 'text-[#16A34A] hover:bg-emerald-50'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Veg
              </button>
              <button
                type="button"
                onClick={() => setDietaryFilter('non-veg')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                  dietaryFilter === 'non-veg'
                    ? 'bg-[#DC2626] text-white shadow-sm'
                    : 'text-[#DC2626] hover:bg-red-50'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-500" />
                Non-Veg
              </button>
              <button
                type="button"
                onClick={() => setDietaryFilter('egg')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                  dietaryFilter === 'egg'
                    ? 'bg-[#D97706] text-white shadow-sm'
                    : 'text-[#D97706] hover:bg-amber-50'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                Egg
              </button>
            </div>

          </div>

          {/* Categories Pill Navigation (Horizontally scrollable) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-none no-scrollbar">
            {menuCategories.map((cat) => {
              const count = cat.id === 'ALL'
                ? fullMenu.length
                : fullMenu.filter(item => item.category === cat.id).length;

              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                    isSelected
                      ? 'bg-[#10271D] text-[#FAF7F2] shadow-sm'
                      : 'bg-[#FAF7F2] text-[#4F4638] border border-[#D5C7A9] hover:bg-[#F4ECE0]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-dmsans font-semibold ${
                    isSelected ? 'bg-[#FAF7F2]/20 text-[#FAF7F2]' : 'bg-[#EAE2D2] text-[#554C3E]'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Count & Quick Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 px-1">
          <p className="text-sm font-medium text-[#4E5852]">
            Showing <strong className="text-[#10271D]">{filteredItems.length}</strong> {filteredItems.length === 1 ? 'item' : 'items'}
            {selectedCategory !== 'ALL' && <span> in <span className="font-semibold text-[#84601A]">{selectedCategory}</span></span>}
            {dietaryFilter !== 'ALL' && <span> ({dietaryFilter})</span>}
          </p>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${restaurantInfo.phone}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#10271D] hover:text-[#84601A] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C59B37]" />
              <span>Call to Order: {restaurantInfo.phoneDisplay}</span>
            </a>
            <span className="text-[#D5C7A9]">•</span>
            <a
              href={restaurantInfo.zomatoOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#10271D] hover:text-[#84601A] transition-colors"
            >
              <span>Order via Zomato</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Menu Items Render */}
        {filteredItems.length === 0 ? (
          <div className="bg-[#FAF7F2] p-12 rounded-2xl border border-dashed border-[#D5C7A9] text-center max-w-md mx-auto">
            <Filter className="w-10 h-10 text-[#8B8070] mx-auto mb-3" />
            <h4 className="font-serif text-lg font-bold text-[#10271D]">No dishes found</h4>
            <p className="text-xs text-[#5D5446] mt-1 mb-4">
              Try adjusting your search keyword or clearing the dietary filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('ALL');
                setDietaryFilter('ALL');
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#10271D] text-[#FAF7F2]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-10">
            {Object.entries(groupedItems).map(([categoryName, items]) => (
              <div key={categoryName} className="space-y-4">
                {/* Category Header with Divider */}
                <div className="flex items-center justify-between pb-2 border-b border-[#E9DFC9]">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#10271D] tracking-tight">
                    {categoryName}
                  </h3>
                  <span className="text-xs font-medium text-[#7A7060]">
                    {items.length} {items.length === 1 ? 'item' : 'items'}
                  </span>
                </div>

                {/* Category Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E9DFC9] shadow-soft hover:shadow-md hover:border-[#D5C7A9] transition-all flex items-start justify-between gap-3 group"
                    >
                      <div className="flex items-start gap-2.5 flex-1 min-w-0">
                        <div className="mt-1 shrink-0">
                          {renderDietaryIcon(item.dietary)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-medium text-sm sm:text-base text-[#10271D] group-hover:text-[#84601A] transition-colors leading-snug">
                            {item.name}
                          </h4>
                          {item.portionNote && (
                            <p className="text-[11px] text-[#7A7060] italic mt-0.5">
                              {item.portionNote}
                            </p>
                          )}
                          <span className="text-[10px] text-[#84601A] font-medium tracking-wide uppercase mt-1 inline-block">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      {/* Price and Action */}
                      <div className="text-right shrink-0 flex flex-col items-end">
                        <span className="font-dmsans font-bold text-base text-[#10271D] tracking-tight">
                          ₹{item.price}
                        </span>
                        <a
                          href={restaurantInfo.zomatoOrderUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1.5 text-[10px] font-semibold text-[#84601A] hover:text-[#10271D] flex items-center gap-0.5"
                          title="Order on Zomato"
                        >
                          <span>Order</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
