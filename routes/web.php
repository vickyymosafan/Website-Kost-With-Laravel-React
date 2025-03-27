<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\KostController;
use App\Http\Controllers\WishlistController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// All routes require authentication except auth routes
Route::middleware(['auth', 'verified'])->group(function () {
    // Home route
    Route::get('/', [KostController::class, 'index'])->name('home');
    Route::get('/kost/{kost}', [KostController::class, 'show'])->name('kost.show');

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    // Profile routes
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Wishlist routes
    Route::get('/wishlist', [WishlistController::class, 'index'])->name('wishlist.index');
    Route::post('/wishlist/{kost}/toggle', [WishlistController::class, 'toggle'])->name('wishlist.toggle');
    Route::get('/wishlist/{kost}/check', [WishlistController::class, 'check'])->name('wishlist.check');
});

// Auth routes (login, register, etc.)
require __DIR__.'/auth.php';
