<?php

namespace App\Traits;

trait HasImages
{
    public function getImageUrls($field = 'foto')
    {
        return collect($this->{$field} ?? [])->map(function($path) {
            return asset('storage/' . $path);
        });
    }
}
