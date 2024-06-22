<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TodoUpdateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can('update', $this->todo);
    }

    public function rules(): array
    {
        return [
            'text' => ['required', 'max:255'],
            'due_date' => ['required', 'date', 'after:now'],
        ];
    }
}
