import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import WishlistButton from '@/Components/WishlistButton';

export default function Index({ auth, wishlists }) {
    const formatPrice = (price) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="My Wishlist" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-6">My Wishlist</h2>
                            
                            {wishlists.length === 0 ? (
                                <div className="text-center py-12">
                                    <div className="text-gray-500 mb-4">
                                        Your wishlist is empty
                                    </div>
                                    <Link
                                        href="/"
                                        className="inline-flex items-center px-4 py-2 bg-primary-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-primary-700 focus:bg-primary-700 active:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                    >
                                        Browse Kosts
                                    </Link>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {wishlists.map((kost) => (
                                        <div key={kost.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                                            <Link href={route('kost.show', kost.id)}>
                                                <img
                                                    src={kost.images[0] || '/images/placeholder.jpg'}
                                                    alt={kost.nama}
                                                    className="w-full h-48 object-cover"
                                                />
                                            </Link>
                                            <div className="p-4">
                                                <div className="flex justify-between items-start">
                                                    <div className="flex-1">
                                                        <Link 
                                                            href={route('kost.show', kost.id)}
                                                            className="hover:text-primary-600"
                                                        >
                                                            <h3 className="text-lg font-semibold mb-1">{kost.nama}</h3>
                                                        </Link>
                                                        <p className="text-gray-600 text-sm mb-2">{kost.lokasi}</p>
                                                        <p className="text-primary-600 font-semibold">
                                                            {formatPrice(kost.harga)} / bulan
                                                        </p>
                                                        {kost.fasilitas && (
                                                            <div className="mt-2 flex flex-wrap gap-1">
                                                                {kost.fasilitas.slice(0, 3).map((fasilitas, index) => (
                                                                    <span
                                                                        key={index}
                                                                        className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
                                                                    >
                                                                        {fasilitas}
                                                                    </span>
                                                                ))}
                                                                {kost.fasilitas.length > 3 && (
                                                                    <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                                                                        +{kost.fasilitas.length - 3} more
                                                                    </span>
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="ml-4">
                                                        <WishlistButton kostId={kost.id} />
                                                    </div>
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
