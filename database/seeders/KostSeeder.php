<?php

namespace Database\Seeders;

use App\Models\Kost;
use Illuminate\Database\Seeder;

class KostSeeder extends Seeder
{
    public function run(): void
    {
        $kosts = [
            [
                'nama' => 'Kost Exclusive Menteng',
                'deskripsi' => 'Kost exclusive dengan fasilitas lengkap di jantung kota Jakarta. Cocok untuk professional muda dan mahasiswa. Lingkungan aman dan nyaman dengan akses 24 jam.',
                'harga' => 2500000,
                'lokasi' => 'Jl. Menteng Raya No. 10, Jakarta Pusat',
                'latitude' => -6.196002,
                'longitude' => 106.830802,
                'fasilitas' => [
                    'AC',
                    'Kamar Mandi Dalam',
                    'WiFi',
                    'Kasur Spring Bed',
                    'Lemari Pakaian',
                    'Meja Kerja',
                    'Dapur Bersama',
                    'Ruang Tamu',
                ],
                'foto' => [
                    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
                    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
                    'https://images.unsplash.com/photo-1484154218962-a197022b5858',
                ],
                'kontak_nama' => 'Bapak Suharto',
                'kontak_telepon' => '081234567890',
            ],
            [
                'nama' => 'Kost Putri Melati',
                'deskripsi' => 'Kost khusus putri dengan lingkungan yang asri dan tenang. Dekat dengan kampus dan pusat perbelanjaan. Dilengkapi dengan sistem keamanan 24 jam.',
                'harga' => 1800000,
                'lokasi' => 'Jl. Margonda Raya No. 15, Depok',
                'latitude' => -6.372169,
                'longitude' => 106.834183,
                'fasilitas' => [
                    'AC',
                    'Kamar Mandi Dalam',
                    'WiFi',
                    'Kasur',
                    'Lemari',
                    'Laundry',
                    'Dapur Bersama',
                ],
                'foto' => [
                    'https://images.unsplash.com/photo-1484154218962-a197022b5858',
                    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
                    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
                ],
                'kontak_nama' => 'Ibu Sarah',
                'kontak_telepon' => '087654321098',
            ],
            [
                'nama' => 'Kost Putra Mandiri',
                'deskripsi' => 'Kost putra dengan lokasi strategis dekat stasiun KRL. Bangunan baru dengan fasilitas modern dan area parkir luas.',
                'harga' => 1500000,
                'lokasi' => 'Jl. Raya Bogor Km. 20, Jakarta Timur',
                'latitude' => -6.281815,
                'longitude' => 106.867011,
                'fasilitas' => [
                    'Kipas Angin',
                    'Kamar Mandi Dalam',
                    'WiFi',
                    'Kasur',
                    'Lemari',
                    'Parkir Motor',
                    'Parkir Mobil',
                ],
                'foto' => [
                    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
                    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
                    'https://images.unsplash.com/photo-1484154218962-a197022b5858',
                ],
                'kontak_nama' => 'Bapak Rudi',
                'kontak_telepon' => '089876543210',
            ],
            [
                'nama' => 'Kost Premium BSD',
                'deskripsi' => 'Kost premium dengan konsep co-living modern. Dilengkapi dengan fasilitas premium dan ruang komunal yang nyaman.',
                'harga' => 3500000,
                'lokasi' => 'BSD Green Office Park, Tangerang Selatan',
                'latitude' => -6.301924,
                'longitude' => 106.652404,
                'fasilitas' => [
                    'AC',
                    'Kamar Mandi Dalam',
                    'WiFi Fiber Optic',
                    'Smart TV',
                    'Kasur Premium',
                    'Lemari Built-in',
                    'Gym',
                    'Co-working Space',
                    'Cafe',
                ],
                'foto' => [
                    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
                    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
                    'https://images.unsplash.com/photo-1484154218962-a197022b5858',
                ],
                'kontak_nama' => 'Ms. Jessica',
                'kontak_telepon' => '081122334455',
            ],
        ];

        foreach ($kosts as $kost) {
            Kost::create($kost);
        }
    }
}
