<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TodoShowRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can('view', $this->todo);
    }

    public function rules(): array
    {
        return [];
    }
}
