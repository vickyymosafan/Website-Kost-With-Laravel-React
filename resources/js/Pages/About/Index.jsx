import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Index({ companyInfo }) {
    return (
        <AppLayout>
            <Head title="Tentang Kami" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <h1 className="text-3xl font-bold text-gray-900 mb-8">
                                Tentang {companyInfo.name}
                            </h1>

                            <div className="prose max-w-none">
                                <div className="mb-12">
                                    <p className="text-lg text-gray-600 mb-6">
                                        {companyInfo.description}
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                                        <div className="bg-gray-50 p-6 rounded-lg">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                                Visi Kami
                                            </h3>
                                            <p className="text-gray-600">
                                                {companyInfo.vision}
                                            </p>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-lg">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                                Misi Kami
                                            </h3>
                                            <p className="text-gray-600">
                                                {companyInfo.mission}
                                            </p>
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                        Tim Kami
                                    </h2>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        {companyInfo.team.map((member, index) => (
                                            <div
                                                key={index}
                                                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                                            >
                                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                    {member.name}
                                                </h3>
                                                <p className="text-gray-600">
                                                    {member.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="text-center text-gray-600">
                                    <p>
                                        Didirikan pada tahun {companyInfo.established}, {companyInfo.name} terus
                                        berkomitmen untuk memberikan layanan terbaik dalam industri properti kost.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
