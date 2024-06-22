<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SignupRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'first_name' => ['required', 'max:255'],
            'last_name' => ['required', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'password' => ['required', 'confirmed', 'max:255'],
            'company_name' => ['required', 'max:255'],
            'timezone_offset' => ['required', 'regex:/^[+-]\d{2}:[0-5]\d$/'],
        ];
    }
}
