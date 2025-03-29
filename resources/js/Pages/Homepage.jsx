import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import KostCard from '@/Components/KostCard';
import SearchFilter from '@/Components/SearchFilter';
import NewsSlider from '@/Components/NewsSlider';

export default function Homepage({ kosts, filters, news }) {
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

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Rekomendasi Kost
          </h1>
          
          {kosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {kosts.map((kost) => (
                <KostCard key={kost.id} kost={kost} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900">
                Tidak ada kost yang ditemukan
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Coba ubah filter pencarian Anda
              </p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
