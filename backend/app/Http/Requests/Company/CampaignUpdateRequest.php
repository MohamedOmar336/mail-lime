<?php

namespace App\Http\Requests\Company;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CampaignUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->can('updateCampaign', $this->campaign);
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
            'name' => 'required|string',
            'scheduled_date' => 'required|date',
            'contacts' => [
                'nullable',
                'array',
                Rule::exists('contacts', 'id')->where('company_id', $companyId),
            ],
            'type' => [
                'required',
                Rule::in(['email', 'sms']),
            ],
            'is_ab_testing' => 'required|boolean',
            'content' => 'required|json',
            'status' => [
                'required',
                Rule::in(['scheduled', 'drafted']),
            ],
        ];
    }
}
