<?php

namespace App\Services;

use App\Models\Kost;
use Illuminate\Http\Request;

class KostQueryService
{
    public function getFilteredKosts(Request $request)
    {
        $query = Kost::query();

        $this->applySearchFilter($query, $request->search);
        $this->applyPriceFilter($query, $request->min_price, $request->max_price);
        $this->applyFacilitiesFilter($query, $request->facilities);
        $this->applyLocationFilter($query, $request->location);

        return $query->latest()->get();
    }

    private function applySearchFilter($query, $search)
    {
        if ($search) {
            $query->where('nama', 'like', '%' . $search . '%')
                  ->orWhere('lokasi', 'like', '%' . $search . '%');
        }
    }

    private function applyPriceFilter($query, $minPrice, $maxPrice)
    {
        if ($minPrice) {
            $query->where('harga', '>=', $minPrice);
        }
        if ($maxPrice) {
            $query->where('harga', '<=', $maxPrice);
        }
    }

    private function applyFacilitiesFilter($query, $facilities)
    {
        if ($facilities) {
            $facilities = explode(',', $facilities);
            foreach ($facilities as $facility) {
                $query->whereJsonContains('fasilitas', trim($facility));
            }
        }
    }

    private function applyLocationFilter($query, $location)
    {
        if ($location) {
            $query->where('lokasi', 'like', '%' . $location . '%');
        }
    }
}
