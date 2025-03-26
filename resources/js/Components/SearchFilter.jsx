import React, { useState, useEffect } from 'react';
import { router } from '@inertiajs/react';
import { debounce } from 'lodash';

export default function SearchFilter({ filters }) {
    const [values, setValues] = useState({
        search: filters.search || '',
        location: filters.location || '',
        min_price: filters.min_price || '',
        max_price: filters.max_price || '',
        facilities: filters.facilities || '',
    });

    const facilities = [
        'AC',
        'Wifi',
        'Kamar Mandi Dalam',
        'Dapur',
        'Parkir Motor',
        'Parkir Mobil',
        'Laundry',
        'CCTV',
    ];

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.type === 'checkbox' 
            ? handleFacilityChange(e.target.value)
            : e.target.value;

        setValues(values => ({
            ...values,
            [key]: value,
        }));
    };

    const handleFacilityChange = (facility) => {
        const currentFacilities = values.facilities ? values.facilities.split(',') : [];
        if (currentFacilities.includes(facility)) {
            return currentFacilities.filter(f => f !== facility).join(',');
        } else {
            return [...currentFacilities, facility].join(',');
        }
    };

    useEffect(() => {
        const debouncedSearch = debounce(() => {
            router.get('/', values, {
                preserveState: true,
                preserveScroll: true,
            });
        }, 300);

        debouncedSearch();
        return () => debouncedSearch.cancel();
    }, [values]);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Search Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Cari Kost
                    </label>
                    <input
                        type="text"
                        name="search"
                        value={values.search}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Nama atau lokasi kost..."
                    />
                </div>

                {/* Location Filter */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Lokasi
                    </label>
                    <input
                        type="text"
                        name="location"
                        value={values.location}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Cari berdasarkan lokasi..."
                    />
                </div>

                {/* Price Range */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Rentang Harga
                    </label>
                    <div className="flex space-x-2">
                        <input
                            type="number"
                            name="min_price"
                            value={values.min_price}
                            onChange={handleChange}
                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Min"
                        />
                        <input
                            type="number"
                            name="max_price"
                            value={values.max_price}
                            onChange={handleChange}
                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Max"
                        />
                    </div>
                </div>
            </div>

            {/* Facilities */}
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fasilitas
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {facilities.map((facility) => (
                        <label key={facility} className="inline-flex items-center">
                            <input
                                type="checkbox"
                                name="facilities"
                                value={facility}
                                checked={values.facilities?.includes(facility)}
                                onChange={handleChange}
                                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                            <span className="ml-2 text-sm text-gray-600">{facility}</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}
