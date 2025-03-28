import React from 'react';
import { Link } from '@inertiajs/react';
import WishlistButton from '@/Components/WishlistButton';

export default function KostCard({ kost }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="relative">
                <Link href={`/kost/${kost.id}`}>
                    <img
                        src={kost.thumbnail || kost.foto?.[0]}
                        alt={kost.nama}
                        className="w-full h-48 object-cover"
                    />
                </Link>
                <div className="absolute top-2 right-2">
                    <WishlistButton kostId={kost.id} />
                </div>
            </div>
            <div className="p-4">
                <Link href={`/kost/${kost.id}`}>
                    <h3 className="text-lg font-semibold hover:text-primary-600 line-clamp-1">{kost.nama}</h3>
                </Link>
                <p className="text-gray-600 text-sm line-clamp-1">{kost.lokasi}</p>
                <p className="text-primary-600 font-semibold mt-2">
                    Rp {typeof kost.harga === 'string' ? kost.harga : Number(kost.harga).toLocaleString('id-ID')} / bulan
                </p>
            </div>
        </div>
    );
}
