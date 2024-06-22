<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserUpdateOtherRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can('update', $this->user);
    }

    public function rules(): array
    {
        return [
            'user_role_id' => ['required', 'exists:user_roles,id'],
        ];
    }
}
