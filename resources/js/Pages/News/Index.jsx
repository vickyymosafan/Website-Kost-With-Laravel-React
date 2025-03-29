import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Index({ news }) {
    return (
        <AppLayout>
            <Head title="Berita & Artikel" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">
                        Berita & Artikel
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {news.data.map((item) => (
                            <article key={item.id} className="bg-white overflow-hidden shadow-sm rounded-lg">
                                <img 
                                    src={item.image} 
                                    alt={item.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <span className="inline-block px-3 py-1 text-sm font-semibold bg-indigo-100 text-indigo-800 rounded-full mb-4">
                                        {item.category}
                                    </span>
                                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                                        {item.title}
                                    </h2>
                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {item.description}
                                    </p>
                                    <a
                                        href={`/news/${item.slug}`}
                                        className="text-indigo-600 hover:text-indigo-500 font-medium"
                                    >
                                        Baca Selengkapnya →
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Pagination here if needed */}
                </div>
            </div>
        </AppLayout>
    );
}
