<?php

namespace App\Http\Requests;

use App\Models\Company;
use Illuminate\Foundation\Http\FormRequest;

class CompanyDeleteRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can('delete', Company::class);
    }

    public function rules(): array
    {
        return [];
    }
}
