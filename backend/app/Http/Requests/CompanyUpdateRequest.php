<?php

namespace App\Http\Requests;

use App\Models\Company;
use Illuminate\Foundation\Http\FormRequest;

class CompanyUpdateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can('update', Company::class);
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'max:255'],
        ];
    }
}
