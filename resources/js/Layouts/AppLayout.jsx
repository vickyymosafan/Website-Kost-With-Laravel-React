import React from 'react';
import Navbar from '@/Components/Navbar';
import { Toaster } from 'react-hot-toast';
import { Head } from '@inertiajs/react';

export default function AppLayout({ children, title = 'KostKita' }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Head>
                <title>{title}</title>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            </Head>
            
            <Navbar />
            
            {/* Main Content */}
            <main className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white shadow mt-8">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm text-gray-500">
                        {new Date().getFullYear()} KostKita. All rights reserved.
                    </p>
                </div>
            </footer>
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 3000,
                    style: {
                        background: '#333',
                        color: '#fff',
                    },
                }}
            />
        </div>
    );
}
