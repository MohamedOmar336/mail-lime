<?php

namespace Database\Seeders;

use App\Models\UserRole;
use Illuminate\Database\Seeder;

class UserRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        UserRole::factory()->create([
            'title' => 'client',
        ]);
        UserRole::factory()->create([
            'title' => 'admin',
        ]);
        UserRole::factory()->create([
            'title' => 'campaign manager',
        ]);
        UserRole::factory()->create([
            'title' => 'campaign editor',
        ]);
    }
}
