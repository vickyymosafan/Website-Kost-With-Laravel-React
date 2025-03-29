<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function index()
    {
        return Inertia::render('News/Index', [
            'news' => News::latest()->paginate(12),
        ]);
    }

    public function show($slug)
    {
        $news = News::where('slug', $slug)->firstOrFail();
        
        return Inertia::render('News/Show', [
            'news' => $news,
            'related' => News::where('id', '!=', $news->id)
                            ->where('category', $news->category)
                            ->latest()
                            ->take(3)
                            ->get(),
        ]);
    }
}
