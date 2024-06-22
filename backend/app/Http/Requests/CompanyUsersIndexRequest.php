<?php

namespace App\Http\Requests;

use App\Models\Company;
use Illuminate\Foundation\Http\FormRequest;

class CompanyUsersIndexRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can('viewAnyUser', Company::class);
    }

    public function rules(): array
    {
        return [];
    }
}
