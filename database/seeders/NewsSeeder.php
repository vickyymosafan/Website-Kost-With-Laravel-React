<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class NewsSeeder extends Seeder
{
    public function run()
    {
        $news = [
            [
                'title' => 'Tips Memilih Kost yang Nyaman untuk Mahasiswa',
                'slug' => Str::slug('Tips Memilih Kost yang Nyaman untuk Mahasiswa'),
                'description' => 'Panduan lengkap bagi mahasiswa dalam memilih kost yang sesuai dengan kebutuhan dan budget.',
                'category' => 'Tips',
                'image' => 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Promo Kost Bulan Ini: Diskon hingga 20%',
                'slug' => Str::slug('Promo Kost Bulan Ini: Diskon hingga 20%'),
                'description' => 'Dapatkan penawaran spesial untuk berbagai kost pilihan di area kampus dan perkantoran.',
                'category' => 'Promo',
                'image' => 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Kost Premium dengan Fasilitas Hotel Bintang 5',
                'slug' => Str::slug('Kost Premium dengan Fasilitas Hotel Bintang 5'),
                'description' => 'Nikmati pengalaman tinggal eksklusif dengan fasilitas lengkap seperti gym, kolam renang, dan ruang kerja bersama.',
                'category' => 'News',
                'image' => 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Area Kost Terpopuler di Jakarta 2024',
                'slug' => Str::slug('Area Kost Terpopuler di Jakarta 2024'),
                'description' => 'Temukan lokasi kost strategis dengan akses mudah ke transportasi publik dan pusat keramaian.',
                'category' => 'News',
                'image' => 'https://images.unsplash.com/photo-1555899434-94d1368aa7af',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Cara Mudah Booking Kost Online',
                'slug' => Str::slug('Cara Mudah Booking Kost Online'),
                'description' => 'Panduan step by step untuk memesan kost secara online dengan aman dan nyaman.',
                'category' => 'Tips',
                'image' => 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('news')->insert($news);
    }
}
