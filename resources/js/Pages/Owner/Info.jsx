import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Info({ benefits }) {
    return (
        <AppLayout>
            <Head title="Informasi Pemilik Kost" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <h1 className="text-3xl font-bold text-gray-900 mb-8">
                                Bergabung sebagai Pemilik Kost
                            </h1>

                            <div className="prose max-w-none">
                                <p className="text-lg text-gray-600 mb-8">
                                    Dapatkan keuntungan lebih dengan mendaftarkan properti kost Anda di platform kami.
                                </p>

                                <div className="grid md:grid-cols-2 gap-8">
                                    {benefits.map((benefit, index) => (
                                        <div
                                            key={index}
                                            className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                                        >
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-gray-600">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 text-center">
                                    <a
                                        href={route('register')}
                                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Daftar Sekarang
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
