import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Show({ news, related }) {
    return (
        <AppLayout>
            <Head title={news.title} />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    {/* Hero Image */}
                    <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
                        <img 
                            src={news.image} 
                            alt={news.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <span className="inline-block px-3 py-1 text-sm font-semibold bg-indigo-600 text-white rounded-full mb-4">
                                {news.category}
                            </span>
                            <h1 className="text-4xl font-bold text-white mb-4">
                                {news.title}
                            </h1>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="bg-white overflow-hidden shadow-sm rounded-lg p-8">
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {news.description}
                        </p>
                    </div>

                    {/* Related News */}
                    {related.length > 0 && (
                        <div className="mt-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Artikel Terkait
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {related.map((item) => (
                                    <article key={item.id} className="bg-white overflow-hidden shadow-sm rounded-lg">
                                        <img 
                                            src={item.image} 
                                            alt={item.title}
                                            className="w-full h-40 object-cover"
                                        />
                                        <div className="p-4">
                                            <span className="inline-block px-2 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full mb-2">
                                                {item.category}
                                            </span>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                                                {item.title}
                                            </h3>
                                            <a
                                                href={`/news/${item.slug}`}
                                                className="text-indigo-600 hover:text-indigo-500 font-medium text-sm"
                                            >
                                                Baca Selengkapnya →
                                            </a>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
