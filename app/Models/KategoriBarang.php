<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KategoriBarang extends Model
{
    use HasFactory;

    protected $table = 'kategori_barang';

    // protected $guarded = [];

    protected $appends = ['label'];

    public function kategori()
    {
        return $this->belongsTo(Kategori::class, 'id_kategori');
    }

    public function label(): Attribute
    {
        return Attribute::make(
            function ($value, $attribute) {
                return $attribute['kode'] . ' - ' . $attribute['nama'];
            }
        );
    }
}
