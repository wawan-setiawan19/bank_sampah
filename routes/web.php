<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SampahController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function(){
    return Inertia::render('Homepage',[
        'title' => 'Homepage'
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/sampah', [SampahController::class, 'index'])->name('sampah');
    Route::get('/sampah/create', [SampahController::class, 'create'])->name('sampah.create');
    Route::get('/sampah/edit/{id}', [SampahController::class, 'edit'])->name('sampah.edit');
    Route::post('/sampah', [SampahController::class, 'store'])->name('sampah.store');
    Route::post('/sampah/{id}', [SampahController::class, 'update'])->name('sampah.update');
    Route::delete('sampah/{id}', [SampahController::class, 'destroy'])->name('sampah.destroy');
});

require __DIR__.'/auth.php';
