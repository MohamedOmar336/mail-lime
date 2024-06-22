<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TodoDeleteRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can('delete', $this->todo);
    }

    public function rules(): array
    {
        return [];
    }
}
