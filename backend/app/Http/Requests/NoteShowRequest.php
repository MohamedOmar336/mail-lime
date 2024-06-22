<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NoteShowRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can('view', $this->note);
    }

    public function rules(): array
    {
        return [];
    }
}
