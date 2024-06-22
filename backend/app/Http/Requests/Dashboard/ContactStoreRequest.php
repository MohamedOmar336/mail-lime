<?php

namespace App\Http\Requests\Dashboard;

use App\Models\Contact;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ContactStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->can('createContact', Contact::class);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules()
    {
        $companyId = $this->user()->company_id;

        return [
            'name' => 'required|string',
            'email' => [
                'required',
                'email',
                Rule::unique('contacts')->where(function ($query) use ($companyId) {
                    return $query->where('company_id', $companyId);
                }),
            ],
            'phone_number' => 'nullable',
        ];
    }
}
