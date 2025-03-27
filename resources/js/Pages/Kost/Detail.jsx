import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import BookingForm from '@/Components/BookingForm';

export default function Detail({ auth, kost }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{kost.nama}</h2>}
        >
            <Head title={kost.nama} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            {/* Kost Details */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    {kost.foto && kost.foto.length > 0 ? (
                                        <img 
                                            src={kost.images[0]} 
                                            alt={kost.nama}
                                            className="w-full h-64 object-cover rounded-lg"
                                        />
                                    ) : (
                                        <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                                            <span className="text-gray-400">No image available</span>
                                        </div>
                                    )}
                                    <div className="mt-4">
                                        <h3 className="text-2xl font-bold">{kost.nama}</h3>
                                        <p className="text-gray-600 mt-2">{kost.lokasi}</p>
                                        <p className="text-xl font-semibold text-indigo-600 mt-2">
                                            Rp {parseInt(kost.harga).toLocaleString('id-ID')} / bulan
                                        </p>
                                        <div className="mt-4">
                                            <h4 className="font-semibold mb-2">Fasilitas:</h4>
                                            <div className="grid grid-cols-2 gap-2">
                                                {kost.fasilitas && kost.fasilitas.map((facility, index) => (
                                                    <div key={index} className="flex items-center space-x-2">
                                                        <span className="text-indigo-500">✓</span>
                                                        <span>{facility}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <h4 className="font-semibold mb-2">Deskripsi:</h4>
                                            <p className="text-gray-600">{kost.deskripsi}</p>
                                        </div>
                                        <div className="mt-4">
                                            <h4 className="font-semibold mb-2">Kontak:</h4>
                                            <p className="text-gray-600">{kost.kontak_nama}</p>
                                            <p className="text-gray-600">{kost.kontak_telepon}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Booking Form */}
                                <div>
                                    <BookingForm kostId={kost.id} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
