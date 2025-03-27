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
            ->get()
            ->map(function ($kost) {
                return [
                    'id' => $kost->id,
                    'nama' => $kost->nama,
                    'deskripsi' => $kost->deskripsi,
                    'harga' => $kost->harga,
                    'lokasi' => $kost->lokasi,
                    'fasilitas' => $kost->fasilitas,
                    'images' => $kost->images,
                    'kontak_nama' => $kost->kontak_nama,
                    'kontak_telepon' => $kost->kontak_telepon,
                ];
            });

        return Inertia::render('Wishlist/Index', [
            'wishlists' => $wishlists
        ]);
    }

    public function toggle(Kost $kost)
    {
        $user = auth()->user();
        $exists = $user->wishlists()->where('kost_id', $kost->id)->exists();

        if ($exists) {
            $user->wishlists()->where('kost_id', $kost->id)->delete();
            return response()->json(['wishlisted' => false]);
        }

        $user->wishlists()->create([
            'kost_id' => $kost->id
        ]);

        return response()->json(['wishlisted' => true]);
    }

    public function check(Kost $kost)
    {
        $wishlisted = auth()->user()->wishlists()
            ->where('kost_id', $kost->id)
            ->exists();

        return response()->json(['wishlisted' => $wishlisted]);
    }
}
