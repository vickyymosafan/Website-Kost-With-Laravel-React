import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

export default function WishlistButton({ kostId }) {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        checkWishlistStatus();
    }, [kostId]);

    const checkWishlistStatus = async () => {
        try {
            const response = await axios.get(`/wishlist/${kostId}/check`);
            setIsWishlisted(response.data.wishlisted);
        } catch (error) {
            console.error('Error checking wishlist status:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const toggleWishlist = async () => {
        try {
            setIsLoading(true);
            const response = await axios.post(`/wishlist/${kostId}/toggle`);
            setIsWishlisted(response.data.wishlisted);
        } catch (error) {
            console.error('Error toggling wishlist:', error);
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
                <HeartOutline className="h-6 w-6 text-gray-400" />
            </button>
        );
    }

    return (
        <button
            onClick={toggleWishlist}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        >
            {isWishlisted ? (
                <HeartSolid className="h-6 w-6 text-red-500" />
            ) : (
                <HeartOutline className="h-6 w-6 text-gray-600" />
            )}
        </button>
    );
}
