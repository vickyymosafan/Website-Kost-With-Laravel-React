<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\KostController;
use App\Http\Controllers\WishlistController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\OwnerController;
use App\Http\Controllers\AboutController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Authentication routes
require __DIR__.'/auth.php';

// All routes require authentication
Route::middleware(['auth', 'verified'])->group(function () {
    // Home route
    Route::get('/', [KostController::class, 'index'])->name('home');
    
    // Kost routes
    Route::get('/kost', [KostController::class, 'index'])->name('kost.index');
    Route::get('/kost/{kost}', [KostController::class, 'show'])->name('kost.show');
    
    // Information pages
    Route::get('/owner-info', [OwnerController::class, 'info'])->name('owner.info');
    Route::get('/about', [AboutController::class, 'index'])->name('about');

    // Dashboard
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    // Profile routes
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Wishlist routes
    Route::prefix('dashboard')->group(function () {
        Route::get('/wishlist', [WishlistController::class, 'index'])->name('wishlist.index');
        Route::post('/wishlist/{kost}', [WishlistController::class, 'toggle'])->name('wishlist.toggle');
        Route::get('/wishlist/check/{kost}', [WishlistController::class, 'check'])->name('wishlist.check');
    });

    // Booking routes
    Route::get('/bookings', [BookingController::class, 'index'])->name('bookings.index');
    Route::post('/bookings/{kost}', [BookingController::class, 'store'])->name('bookings.store');
});
