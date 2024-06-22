<?php

namespace App\Http\Requests\Dashboard;

use App\Models\Contact;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class BatchDeleteContactsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->can('batchDeleteContacts', Contact::class);
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
            'contacts.*.id' => [
                'required',
                'integer',
                Rule::exists('contacts', 'id')->where(function ($query) use ($companyId) {
                    $query->where('company_id', $companyId);
                }),
            ],
        ];
    }
}
