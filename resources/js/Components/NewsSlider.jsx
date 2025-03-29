import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';

export default function NewsSlider({ news }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % news.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [news.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % news.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + news.length) % news.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative h-[600px] w-full overflow-hidden">
            {/* Slides */}
            {news.map((item, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <div className="relative h-full">
                        {/* Background Image */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
                        
                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                            <div className="max-w-7xl mx-auto">
                                <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold bg-indigo-600 rounded">
                                    {item.category}
                                </span>
                                <h2 className="text-4xl font-bold mb-4 line-clamp-2">
                                    {item.title}
                                </h2>
                                <p className="text-lg mb-4 line-clamp-2 text-gray-200">
                                    {item.description}
                                </p>
                                <Link
                                    href={`/news/${item.slug}`}
                                    className="inline-block px-6 py-2 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                                >
                                    Baca Selengkapnya
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {news.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentSlide ? 'bg-white' : 'bg-white/50'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
