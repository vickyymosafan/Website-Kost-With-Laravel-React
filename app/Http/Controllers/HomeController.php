<?php

namespace App\Http\Controllers;

use App\Models\Kost;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        $query = Kost::query();

        // Apply search filters
        if ($request->search) {
            $query->where('nama', 'like', "%{$request->search}%")
                  ->orWhere('lokasi', 'like', "%{$request->lokasi}%");
        }

        if ($request->lokasi) {
            $query->where('lokasi', 'like', "%{$request->lokasi}%");
        }

        if ($request->min_price) {
            $query->where('harga', '>=', $request->min_price);
        }

        if ($request->max_price) {
            $query->where('harga', '<=', $request->max_price);
        }

        if ($request->facilities) {
            $facilities = explode(',', $request->facilities);
            foreach ($facilities as $facility) {
                $query->whereHas('facilities', function ($q) use ($facility) {
                    $q->where('name', $facility);
                });
            }
        }

        // Get recommendations based on type
        $recommendations = [
            'mahasiswa' => Kost::where('tipe', 'mahasiswa')
                ->when($request->lokasi, function($q) use ($request) {
                    $q->where('lokasi', 'like', "%{$request->lokasi}%");
                })
                ->take(6)
                ->get(),
            'karyawan' => Kost::where('tipe', 'karyawan')
                ->when($request->lokasi, function($q) use ($request) {
                    $q->where('lokasi', 'like', "%{$request->lokasi}%");
                })
                ->take(6)
                ->get(),
        ];

        // Get latest news
        $news = News::latest()->take(5)->get();

        // Get popular locations for selection
        $popularLocations = [
            'Surabaya',
            'Jakarta',
            'Bandung',
            'Malang',
            'Jember',
            'Situbondo'
        ];

        return Inertia::render('Homepage', [
            'kosts' => $query->with('facilities')->get(),
            'recommendations' => $recommendations,
            'popularLocations' => $popularLocations,
            'filters' => $request->all(),
            'news' => $news,
        ]);
    }
}
