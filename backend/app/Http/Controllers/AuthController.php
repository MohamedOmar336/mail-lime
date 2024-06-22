<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\ForgotPasswordRequest;
use App\Http\Requests\ResetPasswordRequest;
use App\Http\Requests\SignupRequest;
use App\Mail\ForgotPassword;
use App\Mail\PasswordReset;
use App\Models\Company;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function signup(SignupRequest $request)
    {
        $company = Company::create([
            'name' => $request->company_name,
        ]);

        $user = User::create(
            array_merge(
                $request->only([
                    'first_name',
                    'last_name',
                    'email',
                    'password',
                    'timezone_offset',
                ]),
                [
                    'user_role_id' => 2,
                    'company_id' => $company->id,
                ],
            )
        )->refresh();

        $token = auth()->login($user);

        $user = collect($user)->merge([
            'user_role' => $user->userRole,
            'company' => $user->company,
        ]);

        return response()->json([
            "user" => $user,
            "token" => $token,
        ], 201);
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->only('email', 'password');
        $remember = $request->filled('remember');

        // Set the TTL based on the "Remember Me" status
        $ttl = $remember ? config('jwt.remember_ttl') : config('jwt.ttl');

        // Attempt to authenticate the user
        $token = Auth::setTTL($ttl)->attempt($credentials);

        if (!$token) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        return $this->createNewToken($token);
    }

    protected function createNewToken($token)
    {
        return response()->json([
            'token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }

    public function logout(Request $request)
    {
        auth()->logout();
        return response()->noContent();
    }

    public function validateToken(Request $request)
    {
        return response()->json(['user' => auth()->user()]);
    }

    public function forgotPassword(ForgotPasswordRequest $request)
    {
        $token = Str::random(64);

        DB::table('password_reset_tokens')
            ->where(['email' => $request->email])
            ->delete();

        DB::table('password_reset_tokens')
            ->insert([
                'email' => $request->email,
                'token' => $token,
                'created_at' => Carbon::now()
            ]);

        Mail::to($request->email)->send(new ForgotPassword($token));

        return response()->noContent(201);
    }

    public function resetPassword(ResetPasswordRequest $request)
    {
        $tokenRow = DB::table('password_reset_tokens')->where(['token' => $request->token]);
        $userEmail = $tokenRow->first()->email;

        User::where('email', $userEmail)->update([
            'password' => Hash::make($request->password),
        ]);

        $tokenRow->delete();

        Mail::to($userEmail)->send(new PasswordReset());

        return response()->noContent();
    }
}
