<?php

namespace App\Http\Requests\Dashboard;

use App\Models\Contact;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class BatchStoreContactsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->can('batchStoreContacts', Contact::class);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        $companyId = $this->user()->company_id;

        return [
            'contacts' => 'required|array',
            'contacts.*.name' => 'required|string',
            'contacts.*.email' => [
                'required',
                'email',
                Rule::exists('contacts')->where(function ($query) use ($companyId) {
                    return $query->where('company_id', $companyId);
                }),
            ],
            'contacts.*.phone_number' => 'nullable',
        ];
    }
}
