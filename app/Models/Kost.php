<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Wishlist;
use App\Models\Facility;
use App\Models\KostImage;
use App\Models\Booking;
use App\Traits\HasImages;

class Kost extends Model
{
    use HasFactory, HasImages;

    protected $fillable = [
        'nama',
        'deskripsi',
        'harga',
        'lokasi',
        'fasilitas',
        'foto',
        'kontak_nama',
        'kontak_telepon',
    ];

    protected $casts = [
        'fasilitas' => 'array',
        'foto' => 'array',
        'harga' => 'decimal:2',
        'latitude' => 'decimal:8',
        'longitude' => 'decimal:8',
    ];

    protected $appends = ['images'];

    public function getImagesAttribute()
    {
        return $this->getImageUrls();
    }

    public function wishlists()
    {
        return $this->hasMany(Wishlist::class);
    }

    public function wishlistedByUsers()
    {
        return $this->belongsToMany(User::class, 'wishlists');
    }

    public function isWishlistedBy(User $user)
    {
        return $this->wishlists()->where('user_id', $user->id)->exists();
    }

    public function facilities()
    {
        return $this->belongsToMany(Facility::class, 'kost_facilities');
    }

    public function images()
    {
        return $this->hasMany(KostImage::class);
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
}
