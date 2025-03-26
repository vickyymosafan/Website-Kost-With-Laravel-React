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
            ->with(['images'])
            ->get();

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
