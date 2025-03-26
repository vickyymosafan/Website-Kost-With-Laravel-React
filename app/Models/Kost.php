<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kost extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama',
        'deskripsi',
        'harga',
        'lokasi',
        'latitude',
        'longitude',
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
}
