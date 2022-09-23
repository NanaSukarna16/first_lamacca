<?php

namespace App\Http\Controllers;

use App\Http\Requests\SaveKategoriRequest;
use App\Models\Kategori;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KategoriController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Kategori/Index', ['kategori' => Kategori::paginate(3)]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Kategori/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SaveKategoriRequest $request)
    {
        Kategori::create($request->validated());

        return redirect(route('kategori.index'))
            ->with('flash', ['type' => 'success', 'title' => 'Kategori Tersimpan', 'body' => 'Data kategori berhasil disimpan']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Kategori  $kategori
     * @return \Illuminate\Http\Response
     */
    public function show(Kategori $kategori)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Kategori  $kategori
     * @return \Illuminate\Http\Response
     */
    public function edit(Kategori $kategori)
    {
        return Inertia::render('Kategori/Edit', ['kategori' => $kategori]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Kategori  $kategori
     * @return \Illuminate\Http\Response
     */
    public function update(SaveKategoriRequest $request, Kategori $kategori)
    {
        $kategori->update($request->validated());

        return redirect(route('kategori.index'))
            ->with('flash', ['type' => 'success', 'title' => 'Kategori Tersimpan', 'body' => 'Data kategori berhasil diupdate']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Kategori  $kategori
     * @return \Illuminate\Http\Response
     */
    public function destroy(Kategori $kategori)
    {
        $kategori->delete();

        return redirect()->back()
            ->with('flash', ['type' => 'success', 'title' => 'Kategori Dihapus', 'body' => 'Data kategori berhasil dihapus']);
    }
}
