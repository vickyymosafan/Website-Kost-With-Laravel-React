<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Facility extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama',
        'icon',
        'description'
    ];

    public function kosts()
    {
        return $this->belongsToMany(Kost::class, 'kost_facilities');
    }
}
