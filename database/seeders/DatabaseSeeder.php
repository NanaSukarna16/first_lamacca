<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Kategori;
use App\Models\KategoriBarang;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // create admin
        $admin = User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'is_admin' => true
        ]);

        // create admin
        $user = User::factory()->create([
            'name' => 'User',
            'email' => 'user@example.com',
        ]);

        // Generate 1 Kategori
        $kategori = Kategori::factory()->create();

        // Generate 5 katgori Barang Dengan Kategori berID 1
        KategoriBarang::factory(5)->create([
            'id_kategori' => $kategori->id
        ]);


        // Generate 5 kategori Barang, dalam proses generate Kategori barang

        // tersebut, 5 kategori juga akan otomatis tergenrate 

        KategoriBarang::factory(5)->create();



        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
