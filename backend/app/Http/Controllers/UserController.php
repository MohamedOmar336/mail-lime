<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdatePasswordRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => ['required', 'max:255'],
            'last_name' => ['required', 'max:255'],
            'email' => ['required', 'max:255', 'email'],
            'profile_picture' => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
            'location' => ['nullable', 'string'],
            'timezone_offset' => ['required', 'regex:/^[+-]\d{2}:[0-5]\d$/'],
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = auth()->user();

        // Upload the user's profile picture
        if ($request->hasFile('profile_picture')) {
            try {
                $path = $request->file('profile_picture')->store('public/profile-pictures');
                $filename = basename($path);
                $user->profile_picture = $filename;
            } catch (\Exception $e) {
                return response()->json(['error' => 'Error uploading profile picture'], 500);
            }
        }

        // Update user data
        $user->fill($request->only(['first_name', 'last_name', 'email', 'location', 'timezone_offset']));
        $user->save();

        return response()->json($user, 200);
    }

    public function updatePassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'old_password' => ['required', 'current_password'],
            'new_password' => ['required', 'confirmed', 'max:255'],
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        auth()->user()->update([
            'password' => $request->new_password,
        ]);

        return response()->noContent();
    }

    public function destroy(Request $request)
    {
        $user = auth()->user();
        auth()->logout();
        $user->delete();

        return response()->noContent();
    }
}
