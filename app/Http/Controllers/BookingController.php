<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Kost;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

class BookingController extends Controller
{
    public function store(Request $request, Kost $kost)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'notes' => 'nullable|string|max:1000',
        ], [
            'name.required' => 'Nama lengkap harus diisi',
            'email.required' => 'Email harus diisi',
            'email.email' => 'Format email tidak valid',
            'phone.required' => 'Nomor telepon harus diisi',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator->errors());
        }

        try {
            $booking = Booking::create([
                'user_id' => auth()->id(),
                'kost_id' => $kost->id,
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'notes' => $request->notes,
            ]);

            return redirect()->back()->with('success', 'Permintaan pemesanan kost berhasil dikirim!');
        } catch (\Exception $e) {
            return redirect()->back()
                ->withErrors(['error' => 'Terjadi kesalahan saat memproses permintaan. Silakan coba lagi.'])
                ->withInput();
        }
    }

    public function index()
    {
        $bookings = Booking::where('user_id', auth()->id())
            ->with('kost')
            ->latest()
            ->get();

        return Inertia::render('Bookings/Index', [
            'bookings' => $bookings
        ]);
    }
}
