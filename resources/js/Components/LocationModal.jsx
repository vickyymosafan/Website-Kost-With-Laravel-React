import React from 'react';
import { Dialog } from '@headlessui/react';
import { router } from '@inertiajs/react';

export default function LocationModal({ isOpen, onClose, locations, selectedType }) {
    const handleLocationSelect = (location) => {
        router.get('/', {
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
                    <Dialog.Title className="text-lg font-semibold mb-4">
                        Pilih Lokasi {selectedType === 'mahasiswa' ? 'Kost Mahasiswa' : 'Kost Karyawan'}
                    </Dialog.Title>
                    
                    <div className="grid grid-cols-2 gap-4">
                        {locations.map((location) => (
                            <button
                                key={location}
                                onClick={() => handleLocationSelect(location)}
                                className="p-3 text-left rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                {location}
                            </button>
                        ))}
                    </div>
                    
                    <button
                        onClick={onClose}
                        className="mt-6 w-full py-2 px-4 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                        Tutup
                    </button>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
}
