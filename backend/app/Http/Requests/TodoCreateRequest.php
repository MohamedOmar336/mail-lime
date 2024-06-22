<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TodoCreateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'text' => ['required', 'max:255'],
            'due_date' => ['required', 'date', 'after:now'],
        ];
    }
}
