import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import KostCard from '@/Components/KostCard';

export default function Recommendations({ kosts, selectedLocation, selectedType }) {
    const title = `${selectedType === 'mahasiswa' ? 'Kost Mahasiswa' : 'Kost Karyawan'} di ${selectedLocation}`;

    return (
        <AppLayout>
            <Head title={title} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                        <p className="mt-2 text-gray-600">
                            Menampilkan {kosts.length} kost yang tersedia
                        </p>
                    </div>

                    {kosts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {kosts.map((kost) => (
                                <KostCard key={kost.id} kost={kost} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <span className="material-icons text-gray-400 text-6xl mb-4">
                                search_off
                            </span>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Tidak ada kost ditemukan
                            </h3>
                            <p className="text-gray-600">
                                Tidak ada kost yang tersedia untuk kriteria pencarian Anda.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
