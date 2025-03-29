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
        ];

        foreach ($recommendationKosts as $kost) {
            Kost::create($kost);
        }
    }
}
