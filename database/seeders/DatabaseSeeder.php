<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            NewsSeeder::class,
            FacilitySeeder::class,
            RecommendationKostSeeder::class,
            // Add other seeders here
        ]);
    }
}
