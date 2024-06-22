<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserShowRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can('view', $this->user);
    }

    public function rules(): array
    {
        return [];
    }
}
