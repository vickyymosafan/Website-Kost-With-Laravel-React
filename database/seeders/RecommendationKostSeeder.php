<?php

namespace Database\Seeders;

use App\Models\Kost;
use Illuminate\Database\Seeder;

class RecommendationKostSeeder extends Seeder
{
    public function run(): void
    {
        $recommendationKosts = [
            // MAHASISWA KOSTS
            // Jakarta
            [
                'nama' => 'Kost Mahasiswa UI Salemba',
                'deskripsi' => 'Kost khusus mahasiswa dekat kampus UI Salemba. Lingkungan kondusif untuk belajar.',
                'tipe' => 'mahasiswa',
                'harga' => 1800000,
                'lokasi' => 'Jakarta',
                'detail_lokasi' => 'Jl. Salemba Raya No. 4, Jakarta Pusat',
                'latitude' => -6.196002,
                'longitude' => 106.830802,
                'fasilitas' => [
                    'AC',
                    'Kamar Mandi Dalam',
                    'WiFi',
                    'Meja Belajar',
                    'Lemari',
                    'Ruang Belajar Bersama',
                ],
                'foto' => [
                    'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
                    'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
                ],
                'kontak_nama' => 'Bapak Rahmat',
                'kontak_telepon' => '081234567890',
            ],
            // Surabaya
            [
                'nama' => 'Kost Mahasiswa ITS',
                'deskripsi' => 'Kost nyaman untuk mahasiswa ITS. Lokasi strategis dekat kampus dengan fasilitas lengkap.',
                'tipe' => 'mahasiswa',
                'harga' => 1600000,
                'lokasi' => 'Surabaya',
                'detail_lokasi' => 'Jl. Teknik Kimia, Keputih, Sukolilo',
                'latitude' => -7.279616,
                'longitude' => 112.790791,
                'fasilitas' => [
                    'AC',
                    'Kamar Mandi Dalam',
                    'WiFi',
                    'Meja Belajar',
                    'Lemari',
                    'Dapur Bersama',
                ],
                'foto' => [
                    'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
                    'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
                ],
                'kontak_nama' => 'Ibu Maria',
                'kontak_telepon' => '081234567891',
            ],
            // Bandung
            [
                'nama' => 'Kost Mahasiswa ITB Dago',
                'deskripsi' => 'Kost strategis untuk mahasiswa ITB. Area tenang dan nyaman untuk belajar.',
                'tipe' => 'mahasiswa',
                'harga' => 1500000,
                'lokasi' => 'Bandung',
                'detail_lokasi' => 'Jl. Dago No. 100, Bandung',
                'latitude' => -6.893291,
                'longitude' => 107.613144,
                'fasilitas' => [
                    'Kipas Angin',
                    'Kamar Mandi Dalam',
                    'WiFi',
                    'Meja Belajar',
                    'Lemari',
                ],
                'foto' => [
                    'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
                    'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
                ],
                'kontak_nama' => 'Ibu Siti',
                'kontak_telepon' => '082345678901',
            ],
            // Malang
            [
                'nama' => 'Kost Mahasiswa UB',
                'deskripsi' => 'Kost eksklusif untuk mahasiswa Universitas Brawijaya. Suasana asri dan nyaman.',
                'tipe' => 'mahasiswa',
                'harga' => 1400000,
                'lokasi' => 'Malang',
                'detail_lokasi' => 'Jl. Veteran, Ketawanggede',
                'latitude' => -7.956324,
                'longitude' => 112.613192,
                'fasilitas' => [
                    'AC',
                    'Kamar Mandi Dalam',
                    'WiFi',
                    'Meja Belajar',
                    'Lemari',
                    'Taman Belajar',
                ],
                'foto' => [
                    'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
                    'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
                ],
                'kontak_nama' => 'Bapak Hendra',
                'kontak_telepon' => '082345678902',
            ],
            // Jember
            [
                'nama' => 'Kost Mahasiswa UNEJ',
                'deskripsi' => 'Kost strategis dekat Universitas Jember. Lingkungan yang tenang untuk belajar.',
                'tipe' => 'mahasiswa',
                'harga' => 1200000,
                'lokasi' => 'Jember',
                'detail_lokasi' => 'Jl. Kalimantan, Krajan Timur',
                'latitude' => -8.169207,
                'longitude' => 113.714589,
                'fasilitas' => [
                    'Kipas Angin',
                    'Kamar Mandi Dalam',
                    'WiFi',
                    'Meja Belajar',
                    'Lemari',
                ],
                'foto' => [
                    'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
                    'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
                ],
                'kontak_nama' => 'Ibu Linda',
                'kontak_telepon' => '082345678903',
            ],
            // Situbondo
            [
                'nama' => 'Kost Mahasiswa Poltek',
                'deskripsi' => 'Kost nyaman untuk mahasiswa Politeknik. Dekat dengan pusat kota dan fasilitas umum.',
                'tipe' => 'mahasiswa',
                'harga' => 1000000,
                'lokasi' => 'Situbondo',
                'detail_lokasi' => 'Jl. Raya Situbondo, Mimbaan',
                'latitude' => -7.706195,
                'longitude' => 113.943634,
                'fasilitas' => [
                    'Kipas Angin',
                    'Kamar Mandi Dalam',
                    'WiFi',
                    'Meja Belajar',
                    'Lemari',
                ],
                'foto' => [
                    'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
                    'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
                ],
                'kontak_nama' => 'Bapak Adi',
                'kontak_telepon' => '082345678904',
            ],

            // KARYAWAN KOSTS
            // Jakarta
            [
                'nama' => 'Kost Exclusive SCBD',
                'deskripsi' => 'Kost premium untuk karyawan di area SCBD. Akses mudah ke perkantoran.',
                'tipe' => 'karyawan',
                'harga' => 3500000,
                'lokasi' => 'Jakarta',
                'detail_lokasi' => 'SCBD Lot 10, Jakarta Selatan',
                'latitude' => -6.224164,
                'longitude' => 106.810233,
                'fasilitas' => [
                    'AC',
                    'Kamar Mandi Dalam',
                    'WiFi Fiber',
                    'Smart TV',
                    'Gym',
                    'Laundry',
                ],
                'foto' => [
                    'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
                    'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
                ],
                'kontak_nama' => 'Bapak James',
                'kontak_telepon' => '083456789012',
            ],
            // Surabaya
            [
                'nama' => 'Kost Premium HR Muhammad',
                'deskripsi' => 'Kost mewah untuk profesional di kawasan bisnis HR Muhammad. Akses mudah ke area perkantoran.',
                'tipe' => 'karyawan',
                'harga' => 3000000,
                'lokasi' => 'Surabaya',
                'detail_lokasi' => 'Jl. HR Muhammad, Surabaya Barat',
                'latitude' => -7.290811,
                'longitude' => 112.676054,
                'fasilitas' => [
                    'AC',
                    'Kamar Mandi Dalam',
                    'WiFi Fiber',
                    'Smart TV',
                    'Gym',
                    'Rooftop Lounge',
                ],
                'foto' => [
                    'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
                    'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
                ],
                'kontak_nama' => 'Ibu Diana',
                'kontak_telepon' => '083456789013',
            ],
            // Bandung
            [
                'nama' => 'Kost Premium Dago Suites',
                'deskripsi' => 'Kost modern untuk profesional di Bandung. Dekat dengan area bisnis.',
                'tipe' => 'karyawan',
                'harga' => 2800000,
                'lokasi' => 'Bandung',
                'detail_lokasi' => 'Jl. Ir. H. Djuanda No. 50, Bandung',
                'latitude' => -6.893291,
                'longitude' => 107.613144,
                'fasilitas' => [
                    'AC',
                    'Kamar Mandi Dalam',
                    'WiFi Fiber',
                    'Smart TV',
                    'Co-working Space',
                ],
                'foto' => [
                    'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
                    'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
                ],
                'kontak_nama' => 'Bapak William',
                'kontak_telepon' => '084567890123',
            ],
            // Malang
            [
                'nama' => 'Kost Executive Ijen',
                'deskripsi' => 'Kost premium di kawasan elit Ijen. Cocok untuk eksekutif dan profesional.',
                'tipe' => 'karyawan',
                'harga' => 2500000,
                'lokasi' => 'Malang',
                'detail_lokasi' => 'Jl. Ijen, Oro-oro Dowo',
                'latitude' => -7.972562,
                'longitude' => 112.621391,
                'fasilitas' => [
                    'AC',
                    'Kamar Mandi Dalam',
                    'WiFi Fiber',
                    'Smart TV',
                    'Taman Privat',
                ],
                'foto' => [
                    'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
                    'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
                ],
                'kontak_nama' => 'Ibu Sophie',
                'kontak_telepon' => '084567890124',
            ],
            // Jember
            [
                'nama' => 'Kost Modern Jember Town Square',
                'deskripsi' => 'Kost modern dekat pusat perbelanjaan. Ideal untuk karyawan dan profesional.',
                'tipe' => 'karyawan',
                'harga' => 2000000,
                'lokasi' => 'Jember',
                'detail_lokasi' => 'Jl. Gajah Mada, Kaliwates',
                'latitude' => -8.169781,
                'longitude' => 113.702904,
                'fasilitas' => [
                    'AC',
                    'Kamar Mandi Dalam',
                    'WiFi Fiber',
                    'TV Cable',
                    'Parkir Mobil',
                ],
                'foto' => [
                    'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
                    'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
                ],
                'kontak_nama' => 'Bapak Robert',
                'kontak_telepon' => '084567890125',
            ],
            // Situbondo
            [
                'nama' => 'Kost Premium Situbondo City',
                'deskripsi' => 'Kost modern di pusat kota Situbondo. Cocok untuk profesional dan karyawan.',
                'tipe' => 'karyawan',
                'harga' => 1800000,
                'lokasi' => 'Situbondo',
                'detail_lokasi' => 'Jl. PB. Sudirman, Situbondo',
                'latitude' => -7.706273,
                'longitude' => 113.944665,
                'fasilitas' => [
                    'AC',
                    'Kamar Mandi Dalam',
                    'WiFi Fiber',
                    'TV LED',
                    'Dapur Pribadi',
                ],
                'foto' => [
                    'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
                    'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
                ],
                'kontak_nama' => 'Ibu Caroline',
                'kontak_telepon' => '084567890126',
            ],
        ];

        foreach ($recommendationKosts as $kost) {
            Kost::create($kost);
        }
    }
}
