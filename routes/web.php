<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route::get('karaoke', function () {
        return Inertia::render('karaoke');
    })->name('karaoke');
    Route::get('karaoke/playing/{song}', function ($song) {
        return Inertia::render('karaoke/playing', ['song' => $song]);
    })->name('karaoke.playing');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
