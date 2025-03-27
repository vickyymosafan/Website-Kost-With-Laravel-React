import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import toast from 'react-hot-toast';

export default function BookingForm({ kostId }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        notes: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const loadingToast = toast.loading('Mengirim permintaan...');
        
        post(route('bookings.store', kostId), {
            onSuccess: () => {
                reset();
                toast.dismiss(loadingToast);
                toast.success('Permintaan pemesanan berhasil dikirim!');
            },
            onError: () => {
                toast.dismiss(loadingToast);
                toast.error('Terjadi kesalahan. Silakan coba lagi.');
            }
        });
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Form Pemesanan Kost</h3>
            
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <InputLabel htmlFor="name" value="Nama Lengkap" />
                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        onChange={e => setData('name', e.target.value)}
                        required
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mb-4">
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        onChange={e => setData('email', e.target.value)}
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mb-4">
                    <InputLabel htmlFor="phone" value="Nomor Telepon" />
                    <TextInput
                        id="phone"
                        type="tel"
                        name="phone"
                        value={data.phone}
                        className="mt-1 block w-full"
                        onChange={e => setData('phone', e.target.value)}
                        required
                    />
                    <InputError message={errors.phone} className="mt-2" />
                </div>

                <div className="mb-4">
                    <InputLabel htmlFor="notes" value="Catatan Tambahan" />
                    <textarea
                        id="notes"
                        name="notes"
                        value={data.notes}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        onChange={e => setData('notes', e.target.value)}
                        rows="4"
                    />
                    <InputError message={errors.notes} className="mt-2" />
                </div>

                <div className="flex justify-end">
                    <PrimaryButton
                        className="ml-4"
                        disabled={processing}
                    >
                        {processing ? 'Mengirim...' : 'Kirim Permintaan'}
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
}
