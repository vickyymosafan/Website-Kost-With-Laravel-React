import React from 'react';
import { Link } from '@inertiajs/react';
import WishlistButton from '@/Components/WishlistButton';

export default function KostCard({ kost }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
            <Link href={`/kost/${kost.id}`}>
                <img
                    src={kost.foto[0]}
                    alt={kost.nama}
                    className="w-full h-48 object-cover"
                />
            </Link>
            <div className="p-4">
                <div className="flex justify-between items-start">
                    <div>
                        <Link href={`/kost/${kost.id}`}>
                            <h3 className="text-lg font-semibold hover:text-primary-600">{kost.nama}</h3>
                        </Link>
                        <p className="text-gray-600">{kost.lokasi}</p>
                        <p className="text-primary-600 font-semibold mt-2">
                            Rp {Number(kost.harga).toLocaleString('id-ID')} / bulan
                        </p>
                    </div>
                    <WishlistButton kostId={kost.id} />
                </div>
            </div>
        </div>
    );
}
