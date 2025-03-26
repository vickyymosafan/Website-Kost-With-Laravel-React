import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import WishlistButton from '@/Components/WishlistButton';

export default function Index({ auth, wishlists }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="My Wishlist" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-6">My Wishlist</h2>
                            
                            {wishlists.length === 0 ? (
                                <div className="text-center py-8 text-gray-500">
                                    Your wishlist is empty. Browse kosts to add some to your wishlist!
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {wishlists.map((kost) => (
                                        <div key={kost.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                            <img
                                                src={kost.images[0]}
                                                alt={kost.name}
                                                className="w-full h-48 object-cover"
                                            />
                                            <div className="p-4">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="text-lg font-semibold">{kost.name}</h3>
                                                        <p className="text-gray-600">{kost.location}</p>
                                                        <p className="text-primary-600 font-semibold mt-2">
                                                            Rp {kost.price.toLocaleString('id-ID')} / bulan
                                                        </p>
                                                    </div>
                                                    <WishlistButton kostId={kost.id} />
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
