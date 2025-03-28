<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class OwnerController extends Controller
{
    public function info()
    {
        return Inertia::render('Owner/Info', [
            'benefits' => [
                [
                    'title' => 'Jangkauan Luas',
                    'description' => 'Akses ke ribuan pencari kost potensial setiap harinya.'
                ],
                [
                    'title' => 'Manajemen Mudah',
                    'description' => 'Dashboard khusus untuk mengelola properti dan pemesanan.'
                ],
                [
                    'title' => 'Pembayaran Aman',
                    'description' => 'Sistem pembayaran yang aman dan transparan.'
                ],
                [
                    'title' => 'Dukungan 24/7',
                    'description' => 'Tim support kami siap membantu Anda kapan saja.'
                ]
            ]
        ]);
    }
}
