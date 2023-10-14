<?php

namespace App\Http\Controllers;

use App\Models\Sampah;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class SampahController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $dataSampah = Sampah::all();
        return Inertia::render('DataSampah',[
            'dataSampah' => $dataSampah,
            'title' => 'Data Master Sampah',
            'assetPath' => asset('storage/sampah/')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Sampah/Create',[
            'title' => 'Data Baru'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'jenis_sampah' => 'required|string|max:255',
            'deskripsi' => 'required|string|max:255',
            'harga' => 'required|integer|not_in:0',
            'foto' => ['image'],
        ]);

        if ($request->foto->isValid()) {
            $file = $request->foto;
            $fileName = date('Y-m-d').$file->getClientOriginalName();
            $path = 'sampah/'.$fileName;
            Storage::disk('public')->put($path,file_get_contents($file));
            // dd($path);
            $sampah = Sampah::create([
                'jenis_sampah' => $request->jenis_sampah,
                'deskripsi' => $request->deskripsi,
                'harga' => $request->harga,
                'foto' => $fileName,
            ]);
        }else{
            $sampah = Sampah::create([
                'jenis_sampah' => $request->jenis_sampah,
                'deskripsi' => $request->deskripsi,
                'harga' => $request->harga,
                'foto' => 'not image',
            ]);
        }
        return redirect(route('sampah'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Sampah $sampah)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $sampah = Sampah::find($id);
        return Inertia::render('Sampah/Edit',[
            'sampah' => $sampah
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $sampah = Sampah::find($id);
        $request->validate([
            'jenis_sampah' => 'required|string|max:255',
            'deskripsi' => 'required|string|max:255',
            'harga' => 'required|integer|not_in:0',
        ]);

        if ($request->hasFile('foto')) {
            Storage::delete('public/sampah/'.$sampah->foto);
            $file = $request->foto;
            $fileName = date('Y-m-d').$file->getClientOriginalName();
            $path = 'sampah/'.$fileName;
            Storage::disk('public')->put($path,file_get_contents($file));
            // dd($path);
            $sampah->update([
                'jenis_sampah' => $request->jenis_sampah,
                'deskripsi' => $request->deskripsi,
                'harga' => $request->harga,
                'foto' => $fileName,
            ]);
        }else{
            $sampah->update([
                'jenis_sampah' => $request->jenis_sampah,
                'deskripsi' => $request->deskripsi,
                'harga' => $request->harga,
            ]);
        }
        $sampah->save();
        return redirect(route('sampah'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $sampah = Sampah::find($id);
        $sampah->delete();
        // $mobil->delete();
        return redirect(route('sampah'));
    }
}
