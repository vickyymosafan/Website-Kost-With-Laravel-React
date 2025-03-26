import React from 'react';
import { Head } from '@inertiajs/react';

export default function Home({ kosts }) {
    return (
        <>
            <Head>
                <title>Daftar Kost</title>
                <meta name="description" content="Temukan kost terbaik untuk Anda" />
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">
                        Temukan Kost Impian Anda
                    </h1>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {kosts.map((kost) => (
                            <div key={kost.id} className="bg-white overflow-hidden shadow-sm rounded-lg">
                                <div className="relative h-48">
                                    <img
                                        src={kost.foto[0]} // Mengambil foto pertama sebagai thumbnail
                                        alt={kost.nama}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                        {kost.nama}
                                    </h2>
                                    <p className="text-gray-600 mb-2">
                                        <span className="inline-block">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        {kost.lokasi}
                                    </p>
                                    <p className="text-lg font-bold text-indigo-600">
                                        Rp {Number(kost.harga).toLocaleString('id-ID')} / bulan
                                    </p>
                                    <div className="mt-4 flex space-x-2">
                                        {kost.fasilitas.slice(0, 3).map((fasilitas, index) => (
                                            <span
                                                key={index}
                                                className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600"
                                            >
                                                {fasilitas}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
