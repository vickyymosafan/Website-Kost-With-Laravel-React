import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import { toast } from 'react-hot-toast';

export default function WishlistButton({ kostId }) {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        checkWishlistStatus();
    }, [kostId]);

    const checkWishlistStatus = async () => {
        try {
            const response = await axios.get(`/dashboard/wishlist/check/${kostId}`);
            setIsWishlisted(response.data.wishlisted);
        } catch (error) {
            console.error('Error checking wishlist status:', error);
            toast.error('Gagal memeriksa status wishlist');
        } finally {
            setIsLoading(false);
        }
    };

    const toggleWishlist = async (e) => {
        e.preventDefault(); 
        try {
            setIsLoading(true);
            const response = await axios.post(`/dashboard/wishlist/${kostId}`);
            setIsWishlisted(response.data.wishlisted);
            toast.success(response.data.message);
        } catch (error) {
            console.error('Error toggling wishlist:', error);
            toast.error('Gagal mengubah status wishlist');
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return (
            <button
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                disabled
            >
                <HeartOutline className="h-6 w-6 text-gray-400 animate-pulse" />
            </button>
        );
    }

    return (
        <button
            onClick={toggleWishlist}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            title={isWishlisted ? "Hapus dari Wishlist" : "Tambah ke Wishlist"}
        >
            {isWishlisted ? (
                <HeartSolid className="h-6 w-6 text-red-500" />
            ) : (
                <HeartOutline className="h-6 w-6 text-gray-600 hover:text-red-500" />
            )}
        </button>
    );
}
