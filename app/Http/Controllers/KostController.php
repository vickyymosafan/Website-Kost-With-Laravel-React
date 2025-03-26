<?php

namespace App\Http\Controllers;

use App\Models\Kost;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KostController extends Controller
{
    public function index(Request $request)
    {
        $query = Kost::query();

        // Search by name
        if ($request->search) {
            $query->where('nama', 'like', '%' . $request->search . '%')
                  ->orWhere('lokasi', 'like', '%' . $request->search . '%');
        }

        // Filter by price range
        if ($request->min_price) {
            $query->where('harga', '>=', $request->min_price);
        }
        if ($request->max_price) {
            $query->where('harga', '<=', $request->max_price);
        }

        // Filter by facilities
        if ($request->facilities) {
            $facilities = explode(',', $request->facilities);
            foreach ($facilities as $facility) {
                $query->whereJsonContains('fasilitas', trim($facility));
            }
        }

        // Filter by location
        if ($request->location) {
            $query->where('lokasi', 'like', '%' . $request->location . '%');
        }

        $kosts = $query->latest()->get();
        
        return Inertia::render('Homepage', [
            'kosts' => $kosts,
            'filters' => $request->all()
        ]);
    }

    public function show(Kost $kost)
    {
        return Inertia::render('Kost/Show', [
            'kost' => $kost
        ]);
    }
}
