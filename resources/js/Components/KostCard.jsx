import React from 'react';
import { Link } from '@inertiajs/react';

export default function KostCard({ kost }) {
  return (
    <Link href={`/kost/${kost.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={kost.foto[0]} 
          alt={kost.nama}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{kost.nama}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{kost.lokasi}</p>
        <div className="flex justify-between items-center">
          <p className="text-primary-600 font-bold">
            Rp {Number(kost.harga).toLocaleString('id-ID')}
          </p>
          <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
            Lihat Detail
          </span>
        </div>
      </div>
    </Link>
  );
}
