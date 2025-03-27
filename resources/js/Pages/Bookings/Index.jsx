import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Index({ auth, bookings }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Riwayat Pemesanan</h2>}
        >
            <Head title="Riwayat Pemesanan" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            {bookings.length === 0 ? (
                                <p className="text-gray-500 text-center">Belum ada riwayat pemesanan</p>
                            ) : (
                                <div className="space-y-6">
                                    {bookings.map((booking) => (
                                        <div key={booking.id} className="border rounded-lg p-4">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="text-lg font-semibold">{booking.kost.name}</h3>
                                                    <p className="text-gray-600 mt-1">
                                                        Dipesan oleh: {booking.name}
                                                    </p>
                                                    <p className="text-gray-600">
                                                        Email: {booking.email}
                                                    </p>
                                                    <p className="text-gray-600">
                                                        Telepon: {booking.phone}
                                                    </p>
                                                    {booking.notes && (
                                                        <p className="text-gray-600 mt-2">
                                                            Catatan: {booking.notes}
                                                        </p>
                                                    )}
                                                </div>
                                                <div>
                                                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                                        booking.status === 'approved' ? 'bg-green-100 text-green-800' :
                                                        booking.status === 'rejected' ? 'bg-red-100 text-red-800' :
                                                        'bg-yellow-100 text-yellow-800'
                                                    }`}>
                                                        {booking.status === 'approved' ? 'Disetujui' :
                                                         booking.status === 'rejected' ? 'Ditolak' :
                                                         'Menunggu'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
