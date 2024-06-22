<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserBatchDeleteRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can('batchDeleteUsers', User::class);
    }

    public function rules(): array
    {
        $companyId = $this->user()->company_id;

        return [
            'users' => ['required', 'array'],
            'users.*.id' => [
                'required',
                'integer',
                Rule::exists('users', 'id')->where(function ($query) use ($companyId) {
                    $query->where('company_id', $companyId);
                }),
            ],
        ];
    }
}
