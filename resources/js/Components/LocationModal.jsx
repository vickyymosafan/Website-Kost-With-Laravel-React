import React from 'react';
import { Dialog } from '@headlessui/react';
import { router } from '@inertiajs/react';

export default function LocationModal({ isOpen, onClose, locations, selectedType }) {
    const handleLocationSelect = (location) => {
        router.get('/kosts/recommendations', {
            lokasi: location,
            tipe: selectedType
        }, {
            preserveState: true,
            preserveScroll: true,
            onSuccess: () => onClose()
        });
    };

    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="w-full max-w-md bg-white rounded-lg p-6">
                    <Dialog.Title className="text-xl font-semibold text-gray-900 mb-6">
                        Pilih Lokasi {selectedType === 'mahasiswa' ? 'Kost Mahasiswa' : 'Kost Karyawan'}
                    </Dialog.Title>
                    
                    <div className="grid grid-cols-2 gap-4">
                        {locations.map((location) => (
                            <button
                                key={location}
                                onClick={() => handleLocationSelect(location)}
                                className="p-4 text-left rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-3 group"
                            >
                                <i className="material-icons text-gray-500 group-hover:text-primary-600">location_on</i>
                                <span className="text-gray-700 group-hover:text-gray-900">{location}</span>
                            </button>
                        ))}
                    </div>
                    
                    <button
                        onClick={onClose}
                        className="mt-6 w-full py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        Tutup
                    </button>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
}
