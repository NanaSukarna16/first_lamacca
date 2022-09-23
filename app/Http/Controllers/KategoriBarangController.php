<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use App\Models\KategoriBarang;
use GrahamCampbell\ResultType\Success;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KategoriBarangController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('is_admin')->only('destroy');
    // }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // dd();
        return Inertia::render('KategoriBarang/Index', [
            'kategori_barang' => KategoriBarang::with('kategori')->paginate(3)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        return Inertia::render('KategoriBarang/Create', [
            'kategori' => Kategori::all(),
            'can_create' => request()->user()->can('create', KategoriBarang::class),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'kode' => ['required', 'min:3', 'max:255', 'unique:kategori_barang,kode'],
            'nama' => ['required', 'min:3', 'max:255',],
            'id_kategori' => ['required', 'exists:kategori,id'],
        ]);

        KategoriBarang::create($validated);

        return redirect(route('kategori-barang.index'))
            ->with('flash', [
                'type' => 'Success',
                'title' => 'Kategori Barang Tersimpan', 'body' => 'Data kategori Barang berhasil diSimpan'
            ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\KategoriBarang  $kategoriBarang
     * @return \Illuminate\Http\Response
     */
    public function show(KategoriBarang $kategoriBarang)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\KategoriBarang  $kategoriBarang
     * @return \Illuminate\Http\Response
     */
    public function edit(KategoriBarang $kategoriBarang)
    {
        return Inertia::render('KategoriBarang/Edit', [
            'kategori' => Kategori::all(),
            'kategori_barang' => $kategoriBarang
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\KategoriBarang  $kategoriBarang
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, KategoriBarang $kategoriBarang)
    {
        $validated = $request->validate([
            'kode' => ['required', 'min:3', 'max:255'],
            'nama' => ['required', 'min:3', 'max:255',],
            'id_kategori' => ['required', 'exists:kategori,id'],
        ]);

        $kategoriBarang->update($validated);
        return redirect(route('kategori-barang.index'))
            ->with('flash', ['type' => 'success', 'title' => 'Kategori Barang Tersimpan', 'body' => 'Kategori Barang berhasil diupdate']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\KategoriBarang  $kategoriBarang
     * @return \Illuminate\Http\Response
     */
    public function destroy(KategoriBarang $kategoriBarang)
    {
        $this->authorize('delete', $kategoriBarang);

        $kategoriBarang->delete();

        return redirect()->back()->with('flash', [
            'type' => 'success',
            'tittle' => 'Berhasil dihapus',
            'body' => 'Kategori Barang berhasil dihapus'
        ]);
    }
}
