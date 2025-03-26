import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import KostCard from '@/Components/KostCard';

export default function Homepage({ kosts }) {
  return (
    <AppLayout>
      <Head title="Temukan Kost Impianmu" />
      
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Temukan Kost Impianmu
          </h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kosts.map((kost) => (
              <KostCard key={kost.id} kost={kost} />
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
