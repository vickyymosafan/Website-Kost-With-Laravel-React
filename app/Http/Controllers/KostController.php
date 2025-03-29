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

    public function recommendations(Request $request)
    {
        $lokasi = $request->input('lokasi');
        $tipe = $request->input('tipe');

        $kosts = Kost::query()
            ->when($lokasi, function ($query) use ($lokasi) {
                return $query->where('lokasi', $lokasi);
            })
            ->when($tipe, function ($query) use ($tipe) {
                return $query->where('tipe', $tipe);
            })
            ->get();

        return Inertia::render('Kost/Recommendations', [
            'kosts' => $kosts,
            'selectedLocation' => $lokasi,
            'selectedType' => $tipe
        ]);
    }
}
