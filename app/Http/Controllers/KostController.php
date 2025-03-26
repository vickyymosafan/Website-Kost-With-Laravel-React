<?php

namespace App\Http\Controllers;

use App\Models\Kost;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KostController extends Controller
{
    public function index()
    {
        $kosts = Kost::latest()->get();
        
        return Inertia::render('Home', [
            'kosts' => $kosts
        ]);
    }
}
