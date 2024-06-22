<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ResetPasswordRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'token' => ['required', 'exists:password_reset_tokens,token'],
            'password' => ['required', 'confirmed', 'max:255'],
        ];
    }
}
