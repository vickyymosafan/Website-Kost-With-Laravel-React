<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KostImage extends Model
{
    use HasFactory;

    protected $fillable = [
        'kost_id',
        'image_path',
        'is_primary'
    ];

    protected $casts = [
        'is_primary' => 'boolean'
    ];

    public function kost()
    {
        return $this->belongsTo(Kost::class);
    }

    public function getImagePathAttribute($value)
    {
        return asset('storage/' . $value);
    }
}
