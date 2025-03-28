import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import WishlistButton from '@/Components/WishlistButton';

export default function Index({ auth, wishlists }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Daftar Favorit Kost
                </h2>
            }
        >
            <Head title="Daftar Favorit" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {wishlists && wishlists.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {wishlists.map((item) => (
                                <div key={item.id} className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                                    <div className="relative aspect-video">
                                        <img 
                                            src={item.thumbnail || '/images/placeholder.jpg'} 
                                            alt={item.nama}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="mb-2 text-xl font-semibold">{item.nama}</h3>
                                        <p className="mb-4 text-gray-600 line-clamp-2">{item.deskripsi}</p>
                                        <div className="mb-4">
                                            <span className="text-lg font-bold text-primary">
                                                Rp {item.harga}/bulan
                                            </span>
                                        </div>
                                        <div className="mt-2 flex flex-wrap gap-1 mb-4">
                                            {item.fasilitas.slice(0, 3).map((fasilitas, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-flex items-center px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
                                                >
                                                    {fasilitas.icon && (
                                                        <i className={`${fasilitas.icon} mr-1`}></i>
                                                    )}
                                                    {fasilitas.nama}
                                                </span>
                                            ))}
                                            {item.fasilitas.length > 3 && (
                                                <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                                                    +{item.fasilitas.length - 3} more
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <Link
                                                href={route('kost.show', item.id)}
                                                className="px-4 py-2 text-sm font-medium text-white transition-colors bg-primary hover:bg-primary-dark rounded-lg"
                                            >
                                                Lihat Detail
                                            </Link>
                                            <WishlistButton kostId={item.id} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="p-6 text-center bg-white shadow-sm sm:rounded-lg">
                            <p className="text-gray-600">Belum ada kost yang ditambahkan ke favorit.</p>
                            <Link
                                href={route('kost.index')}
                                className="inline-block px-4 py-2 mt-4 text-sm font-medium text-white transition-colors bg-primary hover:bg-primary-dark rounded-lg"
                            >
                                Jelajahi Kost
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
