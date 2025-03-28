<?php

namespace App\Http\Controllers;

use App\Models\Kost;
use App\Services\KostQueryService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KostController extends Controller
{
    protected $kostQueryService;

    public function __construct(KostQueryService $kostQueryService)
    {
        $this->kostQueryService = $kostQueryService;
    }

    public function index(Request $request)
    {
        $kosts = $this->kostQueryService->getFilteredKosts($request);
        
        return Inertia::render('Homepage', [
            'kosts' => $kosts,
            'filters' => $request->all()
        ]);
    }

    public function show(Kost $kost)
    {
        return Inertia::render('Kost/Detail', [
            'kost' => $kost
        ]);
    }
}
