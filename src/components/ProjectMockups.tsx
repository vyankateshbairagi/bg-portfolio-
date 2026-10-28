import React, { useState } from 'react';
import { 
  Calendar, Clock, ShieldCheck, CheckCircle2, 
  Star, ShoppingBag, Truck,
  Sparkles, Filter
} from 'lucide-react';

/* -------------------------------------------------------------
   PROJECT 01: PUJANAM MOCKUP
   Pandit Booking & Puja Services Platform (MERN + Cloudinary + JWT)
------------------------------------------------------------- */
export const PujanamMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'discovery' | 'booking' | 'dashboard'>('discovery');

  return (
    <div className="w-full bg-[#0b0f19] rounded-xl border border-slate-800/90 overflow-hidden shadow-2xl">
      {/* App Bar / Header */}
      <div className="px-4 py-3 bg-[#0e1626] border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="ml-2 text-xs font-mono text-slate-400">pujanam-platform.internal / app</span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-slate-900/90 p-0.5 rounded-lg border border-slate-700/60 text-xs">
          <button
            onClick={() => setActiveTab('discovery')}
            className={`px-2.5 py-1 rounded-md transition-all font-medium ${
              activeTab === 'discovery' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Services Catalog
          </button>
          <button
            onClick={() => setActiveTab('booking')}
            className={`px-2.5 py-1 rounded-md transition-all font-medium ${
              activeTab === 'booking' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Booking Flow
          </button>
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-2.5 py-1 rounded-md transition-all font-medium ${
              activeTab === 'dashboard' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Pandit Portal
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-5 min-h-[300px] text-xs">
        {activeTab === 'discovery' && (
          <div className="space-y-4">
            {/* Filter Bar */}
            <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-slate-800/60">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-semibold tracking-wide flex items-center gap-1">
                  <Sparkles size={13} /> Pujanam Ritual Catalog
                </span>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full border border-slate-700">
                  Role: Devotee
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <span className="flex items-center gap-1 bg-slate-800/80 px-2 py-1 rounded border border-slate-700/60">
                  <Filter size={11} /> Vedic Sampradaya: All
                </span>
                <span className="text-emerald-400 font-mono">18 Pandits Online</span>
              </div>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Card 1 */}
              <div className="bg-slate-900/80 p-3.5 rounded-lg border border-slate-800 hover:border-amber-500/40 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    House Blessing
                  </span>
                  <div className="flex items-center gap-1 text-amber-400 font-medium">
                    <Star size={12} className="fill-amber-400" /> 4.9 <span className="text-slate-500 text-[10px]">(84)</span>
                  </div>
                </div>
                <h4 className="font-semibold text-slate-100 text-sm">Griha Pravesh & Vastu Puja</h4>
                <p className="text-slate-400 text-[11px] mt-1 line-clamp-2">
                  Complete Vedic rituals with Navagraha Shanti, Havan, and certified Samagri list.
                </p>
                <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                    <Clock size={12} className="text-blue-400" /> ~3.5 hrs
                  </div>
                  <span className="px-2.5 py-1 rounded bg-blue-600/20 text-blue-400 font-medium text-[11px] border border-blue-500/30">
                    Select Pandit
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-900/80 p-3.5 rounded-lg border border-slate-800 hover:border-amber-500/40 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    Auspicious Ritual
                  </span>
                  <div className="flex items-center gap-1 text-amber-400 font-medium">
                    <Star size={12} className="fill-amber-400" /> 5.0 <span className="text-slate-500 text-[10px]">(112)</span>
                  </div>
                </div>
                <h4 className="font-semibold text-slate-100 text-sm">Satyanarayan Katha & Puja</h4>
                <p className="text-slate-400 text-[11px] mt-1 line-clamp-2">
                  Traditional Katha recital with Prashad guidance, Sanskrit Stotras, and Aarti ceremony.
                </p>
                <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                    <Clock size={12} className="text-blue-400" /> ~2.0 hrs
                  </div>
                  <span className="px-2.5 py-1 rounded bg-blue-600/20 text-blue-400 font-medium text-[11px] border border-blue-500/30">
                    Select Pandit
                  </span>
                </div>
              </div>
            </div>

            {/* Verified Pandit Banner */}
            <div className="p-2.5 bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-slate-900/40 rounded-lg border border-blue-500/20 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center font-bold text-amber-300">
                  PT
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-medium text-slate-200">
                    Pt. Vidyadhar Shastri <ShieldCheck size={13} className="text-emerald-400" />
                  </div>
                  <span className="text-[10px] text-slate-400">14+ Years Vedic Experience • Rigveda Certified • Pune</span>
                </div>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Next Slot: Today 4:30 PM
              </span>
            </div>
          </div>
        )}

        {activeTab === 'booking' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-slate-900 p-2.5 rounded-lg border border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-medium text-slate-200">Booking Summary: Satyanarayan Puja</span>
              </div>
              <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                JWT Auth Verified
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-3 bg-slate-900/60 rounded border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">Selected Pandit</span>
                <span className="font-semibold text-slate-200 block">Pt. Ramesh Joshi</span>
                <span className="text-[11px] text-slate-400">Shivaji Nagar, Pune (Local)</span>
              </div>
              <div className="p-3 bg-slate-900/60 rounded border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">Date & Muhurat</span>
                <div className="flex items-center gap-1.5 text-slate-200 font-semibold">
                  <Calendar size={12} className="text-blue-400" /> 14 Nov 2025 • 09:15 AM
                </div>
                <span className="text-[11px] text-emerald-400">Shubh Muhurat confirmed</span>
              </div>
            </div>

            <div className="p-3 bg-slate-900/40 rounded border border-slate-800 space-y-1.5">
              <div className="flex justify-between text-slate-400">
                <span>Ritual Dakshina (Transparent Rate):</span>
                <span className="font-mono text-slate-200">₹ 2,100</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Samagri Arrangement Option:</span>
                <span className="font-mono text-slate-200">Included (Devotee List verified)</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Booking Status:</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1">
                  <CheckCircle2 size={12} /> Confirmed & Scheduled
                </span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'dashboard' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div>
                <span className="text-slate-400 text-[10px]">Pandit Profile & Dashboard</span>
                <h5 className="text-slate-200 font-semibold text-sm">Pt. Vidyadhar Shastri</h5>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-mono">
                Role: Pandit (Verified)
              </span>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2 bg-slate-900 rounded border border-slate-800">
                <span className="text-[10px] text-slate-400">Scheduled</span>
                <span className="block font-mono text-base font-bold text-blue-400">6</span>
              </div>
              <div className="p-2 bg-slate-900 rounded border border-slate-800">
                <span className="text-[10px] text-slate-400">Completed</span>
                <span className="block font-mono text-base font-bold text-emerald-400">128</span>
              </div>
              <div className="p-2 bg-slate-900 rounded border border-slate-800">
                <span className="text-[10px] text-slate-400">Rating</span>
                <span className="block font-mono text-base font-bold text-amber-400">4.95 ★</span>
              </div>
            </div>

            <div className="p-2.5 bg-slate-900/60 rounded border border-slate-800 flex items-center justify-between">
              <div>
                <span className="font-medium text-slate-200 block">Upcoming: Rudrabhishek Puja</span>
                <span className="text-[10px] text-slate-400">Kothrud, Pune • Devotee: Sharma Family</span>
              </div>
              <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 font-mono text-[10px] border border-blue-500/20">
                Tomorrow 07:00 AM
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Footer bar */}
      <div className="px-4 py-2 bg-[#090d16] border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <span className="font-mono text-blue-400">MERN Stack • Cloudinary Media • RBAC</span>
        <span className="text-slate-500">REST API: /api/v1/bookings</span>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
   PROJECT 02: AGRICULTURE PLATFORM MOCKUP
   Direct Farm-to-Consumer & Restaurant Marketplace (MERN + RBAC)
------------------------------------------------------------- */
export const AgricultureMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'marketplace' | 'inventory' | 'orders'>('marketplace');

  return (
    <div className="w-full bg-[#0b0f19] rounded-xl border border-slate-800/90 overflow-hidden shadow-2xl">
      {/* Top Window Bar */}
      <div className="px-4 py-3 bg-[#0e1626] border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="ml-2 text-xs font-mono text-slate-400">agri-connect.internal / market</span>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-1 bg-slate-900/90 p-0.5 rounded-lg border border-slate-700/60 text-xs">
          <button
            onClick={() => setActiveTab('marketplace')}
            className={`px-2.5 py-1 rounded-md transition-all font-medium ${
              activeTab === 'marketplace' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Direct Market
          </button>
          <button
            onClick={() => setActiveTab('inventory')}
            className={`px-2.5 py-1 rounded-md transition-all font-medium ${
              activeTab === 'inventory' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Farmer Inventory
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-2.5 py-1 rounded-md transition-all font-medium ${
              activeTab === 'orders' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Live Orders
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-5 min-h-[300px] text-xs">
        {activeTab === 'marketplace' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-slate-800">
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <ShoppingBag size={13} /> Fresh Harvest From Verified Farms
              </span>
              <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                0% Middleman Commission
              </span>
            </div>

            {/* Produce Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 hover:border-emerald-500/40 transition-colors">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    Organic Grain
                  </span>
                  <span className="text-emerald-400 font-mono font-bold text-xs">₹ 38 / kg</span>
                </div>
                <h4 className="font-semibold text-slate-100 text-sm mt-1.5">Sharbati Wheat (Grade A)</h4>
                <p className="text-slate-400 text-[11px] mt-1">Farm: Patil Agro Farms • Sangamner</p>
                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Available: 2,400 kg</span>
                  <span className="text-blue-400 font-medium">Order Direct →</span>
                </div>
              </div>

              <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 hover:border-emerald-500/40 transition-colors">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20">
                    Fresh Harvest
                  </span>
                  <span className="text-emerald-400 font-mono font-bold text-xs">₹ 24 / kg</span>
                </div>
                <h4 className="font-semibold text-slate-100 text-sm mt-1.5">Vine-Ripened Field Tomatoes</h4>
                <p className="text-slate-400 text-[11px] mt-1">Farm: GreenValley Farm • Nashik Road</p>
                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Harvested: Today 05:00 AM</span>
                  <span className="text-blue-400 font-medium">Order Direct →</span>
                </div>
              </div>
            </div>

            <div className="p-2.5 bg-slate-900/50 rounded-lg border border-slate-800 text-[11px] flex items-center justify-between text-slate-300">
              <span className="flex items-center gap-1.5">
                <Truck size={13} className="text-emerald-400" /> Direct dispatch routes to Pune & Mumbai restaurants
              </span>
              <span className="font-mono text-emerald-400">Bulk Tier Active</span>
            </div>
          </div>
        )}

        {activeTab === 'inventory' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div>
                <span className="text-slate-400 text-[10px]">Farmer Management Console</span>
                <h5 className="text-slate-200 font-semibold text-sm">Sunil Deshmukh (Verified Farmer)</h5>
              </div>
              <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
                Role: Farmer (JWT Auth)
              </span>
            </div>

            <div className="space-y-2">
              <div className="p-2.5 bg-slate-900 rounded border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="font-medium text-slate-200 block">Red Onions (Nashik Quality)</span>
                  <span className="text-[10px] text-slate-400">Stock: 1,800 kg • Listed: ₹ 22/kg</span>
                </div>
                <span className="text-emerald-400 text-[10px] font-mono bg-emerald-500/10 px-2 py-1 rounded">
                  Active in Market
                </span>
              </div>
              <div className="p-2.5 bg-slate-900 rounded border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="font-medium text-slate-200 block">Fresh Green Capsicum</span>
                  <span className="text-[10px] text-slate-400">Stock: 450 kg • Listed: ₹ 45/kg</span>
                </div>
                <span className="text-emerald-400 text-[10px] font-mono bg-emerald-500/10 px-2 py-1 rounded">
                  Active in Market
                </span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-slate-300 font-medium pb-2 border-b border-slate-800">
              <span>Recent Orders (Restaurants & Consumers)</span>
              <span className="text-[11px] font-mono text-blue-400">MongoDB Query: .find()</span>
            </div>

            <div className="p-2.5 bg-slate-900 rounded border border-slate-800 flex items-center justify-between">
              <div>
                <span className="font-semibold text-slate-200 block">Order #AG-9421 • The Bistro Kitchen (Pune)</span>
                <span className="text-[10px] text-slate-400">120 kg Tomatoes + 50 kg Capsicum</span>
              </div>
              <span className="text-amber-400 font-mono text-[10px] bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                Dispatched
              </span>
            </div>

            <div className="p-2.5 bg-slate-900 rounded border border-slate-800 flex items-center justify-between">
              <div>
                <span className="font-semibold text-slate-200 block">Order #AG-9418 • Rajesh K. (Household)</span>
                <span className="text-[10px] text-slate-400">25 kg Sharbati Wheat</span>
              </div>
              <span className="text-emerald-400 font-mono text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Delivered
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="px-4 py-2 bg-[#090d16] border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <span className="font-mono text-emerald-400">MongoDB • Express • React • Node</span>
        <span className="text-slate-500">Multi-Role JWT System</span>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
   PROJECT 03: BUILDING CONSTRUCTION ESTIMATOR MOCKUP
   Responsive Construction Cost & Material Calculator (PHP/JS/Bootstrap)
------------------------------------------------------------- */
export const EstimatorMockup: React.FC = () => {
  const [area, setArea] = useState<number>(1200);
  const [floors, setFloors] = useState<number>(1);
  const [quality, setQuality] = useState<'Standard' | 'Premium'>('Standard');

  // Simple, realistic architectural thumb-rule estimates based on area
  const totalArea = area * floors;
  const ratePerSqFt = quality === 'Standard' ? 1600 : 2100;
  const estimatedCost = totalArea * ratePerSqFt;
  const cementBags = Math.round(totalArea * 0.4);
  const steelKg = Math.round(totalArea * 3.8);

  return (
    <div className="w-full bg-[#0b0f19] rounded-xl border border-slate-800/90 overflow-hidden shadow-2xl">
      {/* Top Window Bar */}
      <div className="px-4 py-3 bg-[#0e1626] border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="ml-2 text-xs font-mono text-slate-400">estimator-portal.local / calculator</span>
        </div>
        <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
          PHP + JS + MySQL
        </span>
      </div>

      <div className="p-4 sm:p-5 min-h-[300px] text-xs space-y-4">
        {/* Form controls */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
          <div>
            <label className="text-[11px] text-slate-400 block mb-1">Built-Up Area (sq. ft)</label>
            <input
              type="number"
              value={area}
              onChange={(e) => setArea(Math.max(100, Number(e.target.value)))}
              className="w-full bg-slate-800 border border-slate-700 rounded px-2.5 py-1 text-slate-200 font-mono text-xs focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-[11px] text-slate-400 block mb-1">Number of Floors</label>
            <select
              value={floors}
              onChange={(e) => setFloors(Number(e.target.value))}
              className="w-full bg-slate-800 border border-slate-700 rounded px-2.5 py-1 text-slate-200 font-mono text-xs focus:border-blue-500 focus:outline-none"
            >
              <option value={1}>G (1 Floor)</option>
              <option value={2}>G + 1 (2 Floors)</option>
              <option value={3}>G + 2 (3 Floors)</option>
            </select>
          </div>

          <div>
            <label className="text-[11px] text-slate-400 block mb-1">Construction Grade</label>
            <div className="flex gap-1.5">
              <button
                type="button"
                onClick={() => setQuality('Standard')}
                className={`flex-1 py-1 px-2 rounded font-medium transition-all ${
                  quality === 'Standard' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                }`}
              >
                Standard
              </button>
              <button
                type="button"
                onClick={() => setQuality('Premium')}
                className={`flex-1 py-1 px-2 rounded font-medium transition-all ${
                  quality === 'Premium' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                }`}
              >
                Premium
              </button>
            </div>
          </div>
        </div>

        {/* Live Calculation Output Card */}
        <div className="p-3.5 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/30 rounded-lg border border-slate-800 space-y-3">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2">
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Total Estimated Cost</span>
              <span className="text-lg font-bold font-mono text-blue-400">
                ₹ {estimatedCost.toLocaleString('en-IN')}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-slate-400 block">Total Built-Up Area</span>
              <span className="font-mono text-slate-200 font-semibold">{totalArea} sq.ft</span>
            </div>
          </div>

          {/* Material Quantities Summary */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pt-1">
            <div className="p-2 bg-slate-950/60 rounded border border-slate-800/80">
              <span className="text-[10px] text-slate-400 block">Cement Est.</span>
              <span className="font-mono text-slate-200 font-semibold">{cementBags} bags</span>
            </div>
            <div className="p-2 bg-slate-950/60 rounded border border-slate-800/80">
              <span className="text-[10px] text-slate-400 block">Steel Est.</span>
              <span className="font-mono text-slate-200 font-semibold">{steelKg} kg</span>
            </div>
            <div className="p-2 bg-slate-950/60 rounded border border-slate-800/80">
              <span className="text-[10px] text-slate-400 block">Civil Labor</span>
              <span className="font-mono text-emerald-400 font-semibold">~28% Total</span>
            </div>
            <div className="p-2 bg-slate-950/60 rounded border border-slate-800/80">
              <span className="text-[10px] text-slate-400 block">Finishing & Masonry</span>
              <span className="font-mono text-amber-400 font-semibold">~32% Total</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-2 bg-[#090d16] border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <span className="font-mono text-blue-400">Interactive Cost Form • Dynamic Breakdown</span>
        <span className="text-slate-500">Cross-Browser Tested Layout</span>
      </div>
    </div>
  );
};
