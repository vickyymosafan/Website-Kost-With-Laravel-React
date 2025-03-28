<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutController extends Controller
{
    public function index()
    {
        return Inertia::render('About/Index', [
            'companyInfo' => [
                'name' => 'KostKita',
                'description' => 'Platform pencarian kost modern yang menghubungkan pemilik kost dengan pencari kost.',
                'vision' => 'Menjadi platform terpercaya dalam mencari dan mengelola properti kost di Indonesia.',
                'mission' => 'Menyediakan solusi yang mudah, aman, dan terpercaya untuk semua kebutuhan kost Anda.',
                'established' => '2025',
                'team' => [
                    [
                        'name' => 'Tim Pengembang',
                        'description' => 'Tim yang berdedikasi dalam mengembangkan platform modern dan inovatif.'
                    ],
                    [
                        'name' => 'Tim Support',
                        'description' => 'Siap membantu pengguna 24/7 dengan pelayanan terbaik.'
                    ],
                    [
                        'name' => 'Tim Verifikasi',
                        'description' => 'Memastikan kualitas dan keamanan setiap properti kost.'
                    ]
                ]
            ]
        ]);
    }
}
