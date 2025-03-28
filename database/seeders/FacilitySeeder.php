<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Facility;

class FacilitySeeder extends Seeder
{
    public function run()
    {
        $facilities = [
            [
                'nama' => 'AC',
                'icon' => 'fas fa-snowflake',
                'description' => 'Air Conditioner'
            ],
            [
                'nama' => 'WiFi',
                'icon' => 'fas fa-wifi',
                'description' => 'Free WiFi'
            ],
            [
                'nama' => 'Kamar Mandi Dalam',
                'icon' => 'fas fa-bath',
                'description' => 'Kamar Mandi Dalam'
            ],
            [
                'nama' => 'Parkir Motor',
                'icon' => 'fas fa-motorcycle',
                'description' => 'Area Parkir Motor'
            ],
            [
                'nama' => 'Dapur',
                'icon' => 'fas fa-utensils',
                'description' => 'Dapur Bersama'
            ],
            [
                'nama' => 'Akses 24 Jam',
                'icon' => 'fas fa-clock',
                'description' => 'Akses 24 Jam'
            ],
            [
                'nama' => 'Listrik',
                'icon' => 'fas fa-bolt',
                'description' => 'Termasuk Listrik'
            ],
            [
                'nama' => 'Air',
                'icon' => 'fas fa-tint',
                'description' => 'Termasuk Air'
            ]
        ];

        foreach ($facilities as $facility) {
            Facility::create($facility);
        }
    }
}
