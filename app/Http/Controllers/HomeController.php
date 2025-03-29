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
            $query->where('name', 'like', "%{$request->search}%")
                  ->orWhere('location', 'like', "%{$request->search}%");
        }

        if ($request->location) {
            $query->where('location', 'like', "%{$request->location}%");
        }

        if ($request->min_price) {
            $query->where('price', '>=', $request->min_price);
        }

        if ($request->max_price) {
            $query->where('price', '<=', $request->max_price);
        }

        if ($request->facilities) {
            $facilities = explode(',', $request->facilities);
            foreach ($facilities as $facility) {
                $query->whereHas('facilities', function ($q) use ($facility) {
                    $q->where('name', $facility);
                });
            }
        }

        // Get latest news
        $news = News::latest()->take(5)->get();

        return Inertia::render('Homepage', [
            'kosts' => $query->with('facilities')->get(),
            'filters' => $request->all(),
            'news' => $news,
        ]);
    }
}
