<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;

class GoogleAuthController extends Controller
{

    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback()
    {
        $googleUser = Socialite::driver('google')->user();

        $userData = User::firstOrCreate([
            'name' => $googleUser->getName(),
            'username' => substr($googleUser->getEmail(), 0, strpos($googleUser->getEmail(), '@')),
            'email' => $googleUser->getEmail(),
            'google_id' => $googleUser->getId(),
        ], ['email' => $googleUser->getEmail()]);

        event(new Registered($userData));

        Auth::login($userData);

        return to_route('dashboard');
    }
}
