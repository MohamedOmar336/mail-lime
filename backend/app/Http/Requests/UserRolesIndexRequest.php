<?php

namespace App\Http\Requests;

use App\Models\UserRole;
use Illuminate\Foundation\Http\FormRequest;

class UserRolesIndexRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can('viewAny', UserRole::class);
    }

    public function rules(): array
    {
        return [];
    }
}
