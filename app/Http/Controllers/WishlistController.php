<?php

namespace App\Http\Controllers;

use App\Models\Kost;
use App\Models\Wishlist;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WishlistController extends Controller
{
    public function index()
    {
        $wishlists = auth()->user()->wishlistedKosts()
            ->with(['images', 'facilities'])
            ->get()
            ->map(function ($kost) {
                return [
                    'id' => $kost->id,
                    'nama' => $kost->nama,
                    'deskripsi' => $kost->deskripsi,
                    'harga' => number_format($kost->harga, 0, ',', '.'),
                    'lokasi' => $kost->lokasi,
                    'fasilitas' => $kost->facilities->map(fn($f) => [
                        'nama' => $f->nama,
                        'icon' => $f->icon
                    ]),
                    'thumbnail' => $kost->images->where('is_primary', true)->first()?->image_path 
                        ?? $kost->images->first()?->image_path 
                        ?? null,
                    'kontak' => [
                        'nama' => $kost->kontak_nama,
                        'telepon' => $kost->kontak_telepon
                    ]
                ];
            });

        return Inertia::render('Dashboard/Wishlist/Index', [
            'wishlists' => $wishlists
        ]);
    }

    public function toggle(Kost $kost)
    {
        $user = auth()->user();
        $exists = $user->wishlists()->where('kost_id', $kost->id)->exists();

        if ($exists) {
            $user->wishlists()->where('kost_id', $kost->id)->delete();
            return response()->json([
                'status' => 'success',
                'wishlisted' => false,
                'message' => 'Kost berhasil dihapus dari wishlist'
            ]);
        }

        $user->wishlists()->create([
            'kost_id' => $kost->id
        ]);

        return response()->json([
            'status' => 'success',
            'wishlisted' => true,
            'message' => 'Kost berhasil ditambahkan ke wishlist'
        ]);
    }

    public function check(Kost $kost)
    {
        $wishlisted = auth()->user()->wishlists()
            ->where('kost_id', $kost->id)
            ->exists();

        return response()->json([
            'status' => 'success',
            'wishlisted' => $wishlisted
        ]);
    }
}
