<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NoteDeleteRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can('delete', $this->note);
    }

    public function rules(): array
    {
        return [];
    }
}
