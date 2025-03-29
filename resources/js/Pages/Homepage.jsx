import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import KostCard from '@/Components/KostCard';
import SearchFilter from '@/Components/SearchFilter';
import NewsSlider from '@/Components/NewsSlider';
import LocationModal from '@/Components/LocationModal';

const KOST_TYPES = [
  {
    id: 'mahasiswa',
    title: 'Kost untuk Mahasiswa',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80'
  },
  {
    id: 'karyawan',
    title: 'Kost untuk Karyawan',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80'
  }
];

export default function Homepage({ kosts, filters, news, recommendations, popularLocations }) {
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

  const handleKostCardClick = (type) => {
    setSelectedType(type);
    setIsLocationModalOpen(true);
  };

  return (
    <AppLayout>
      <Head title="Temukan Kost Impianmu" />
      
      <div className="relative">
        {/* News Slider */}
        <NewsSlider news={news} />
        
        {/* Search Filter Overlay */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-24 w-full max-w-5xl px-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6">
            <SearchFilter filters={filters} />
          </div>
        </div>
      </div>

      {/* Rekomendasi Kost Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {KOST_TYPES.map((type) => (
              <div 
                key={type.id}
                className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                onClick={() => handleKostCardClick(type.id)}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">{type.title}</h2>
                  <button className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Lihat Semua
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location Selection Modal */}
      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
        locations={popularLocations}
        selectedType={selectedType}
      />
    </AppLayout>
  );
}
