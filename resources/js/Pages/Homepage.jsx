import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import KostCard from '@/Components/KostCard';
import SearchFilter from '@/Components/SearchFilter';
import NewsSlider from '@/Components/NewsSlider';
import LocationModal from '@/Components/LocationModal';

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
          {/* Mahasiswa Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Rekomendasi Kost Mahasiswa
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.mahasiswa.map((kost) => (
                <div key={kost.id} onClick={() => handleKostCardClick('mahasiswa')}>
                  <KostCard kost={kost} />
                </div>
              ))}
            </div>
          </div>

          {/* Karyawan Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Rekomendasi Kost Karyawan
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.karyawan.map((kost) => (
                <div key={kost.id} onClick={() => handleKostCardClick('karyawan')}>
                  <KostCard kost={kost} />
                </div>
              ))}
            </div>
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
